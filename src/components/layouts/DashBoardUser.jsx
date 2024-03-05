import { useEffect, useState } from "react";
import CustomLineChart from "./CustomLineChart";
import {
  attributeList1,
  attributeList2,
  attributeList3,
  demensionList1,
  demensionList2,
  demensionList3,
} from "@/pages/api/reportOptions";
import HorizontalBarChart from "./HorizontalBarChart";
import CountryTable from "./CountryTable";

export default function DashBoardUser() {
  const [overviewReportData, setOverviewReportData] = useState(null);
  const [eventTypeReportData, setEventTypeReportData] = useState(null);
  const [countryReportData, setCountryReportData] = useState(null);

  useEffect(() => {
    const propertyId = "429693073";
    const period = 30;

    // Fetch data for Overview Report
    const reportOptionOverview = generateReportOption(
      propertyId,
      demensionList1,
      attributeList1,
      period
    );
    fetchDataAndSetState(reportOptionOverview, setOverviewReportData);

    // Fetch data for Event Type Report
    const reportOptionByEventType = generateReportOption(
      propertyId,
      demensionList2,
      attributeList2,
      period
    );
    fetchDataAndSetState(reportOptionByEventType, setEventTypeReportData);

    // Fetch data for Country Report
    const reportOptionByCountry = generateReportOption(
      propertyId,
      demensionList3,
      attributeList3,
      period
    );
    fetchDataAndSetState(reportOptionByCountry, setCountryReportData);
  }, []);

  return (
    <>
      {overviewReportData && eventTypeReportData && countryReportData ? (
        <div className="flex flex-col space-y-8 dark:text-black p-5">
          <div className="flex flex-row flex-wrap -mx-4">
            <div className="w-full md:w-2/3  px-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl my-2">Active Users and Event count</h2>
                <CustomLineChart rawData={overviewReportData} />
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl my-2">Event Type Report</h2>
                <HorizontalBarChart rawData={eventTypeReportData} />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl my-2">Country Report</h2>
              <CountryTable rawData={countryReportData} />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

function generateReportOption(
  propertyId,
  demensionList,
  attributeList,
  period
) {
  const beginDate = new Date();
  beginDate.setDate(beginDate.getDate() - period);

  const dateRanges = [
    {
      startDate: beginDate.toISOString().split("T")[0], // Format as "YYYY-MM-DD"
      endDate: "today",
    },
  ];

  const dimensions = demensionList.map((demension) => ({
    name: demension,
  }));

  const metrics = attributeList.map((attribute) => ({
    name: attribute,
  }));

  return {
    property: `properties/${propertyId}`,
    dateRanges,
    dimensions,
    metrics,
  };
}

const fetchDataAndSetState = (reportOption, setStateFunction) => {
  fetch(
    `/api/googleAnalytics?propertyId=${reportOption.property.split("/")[1]}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reportOption }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      setStateFunction(data.report);
    })
    .catch((error) => {
      console.error("Error fetching Google Analytics data:", error);
    });
};
