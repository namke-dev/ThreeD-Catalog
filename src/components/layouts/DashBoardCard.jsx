import { useEffect, useState } from "react";
import CustomLineChart from "./CustomLineChart";
import {
  attributeList1,
  attributeList3,
  demensionList1,
  demensionList3,
} from "@/pages/api/reportOptions";

export default function DashBoardCard() {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_PROPERTY_ID' with the actual Google Analytics property ID
    const propertyId = "429693073";

    const reportOption = generateReportOption(
      propertyId,
      demensionList1,
      attributeList1,
      30
    );

    // Fetch data from the API route
    fetch(`/api/googleAnalytics?propertyId=${propertyId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reportOption }),
    })
      .then((response) => response.json())
      .then((data) => {
        setReportData(data.report);
      })
      .catch((error) => {
        console.error("Error fetching Google Analytics data:", error);
      });
  }, []);

  return (
    <div>
      {reportData ? (
        <div>
          <h2 className="text-xl my-2">Google Analytics Report</h2>
          <pre>{JSON.stringify(reportData, null, 2)}</pre>
          <CustomLineChart rawData={reportData} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
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
