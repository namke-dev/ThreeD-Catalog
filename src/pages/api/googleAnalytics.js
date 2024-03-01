import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { google } from "googleapis";
import fs from "fs";
import { attributeList1, demensionList1 } from "./reportOptions";

const CREDENTIALS_PATH =
  "C:\\Users\\Namng\\Downloads\\d3catalog-cb9310abe884.json";

export default async function handler(req, res) {
  const propertyId = req.query.propertyId;

  try {
    // Get OAuth token
    const authToken = await getAuthToken();

    // Create an instance of BetaAnalyticsDataClient
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: authToken,
    });

    const reportOption = generateReportOption(
      propertyId,
      demensionList1,
      attributeList1,
      30
    );

    // Run a report
    const [response] = await analyticsDataClient.runReport(reportOption);

    // Send the report result as the response
    res.status(200).json({ report: response });
  } catch (error) {
    console.error("==> Error when fetching Google Analytics report:", error);
    throw error;
  }
}

const getAuthToken = async () => {
  try {
    const content = fs.readFileSync(CREDENTIALS_PATH, {
      encoding: "utf8",
      flag: "r",
    });
    const keys = JSON.parse(content);

    const auth = {
      client_email: keys.client_email,
      private_key: keys.private_key,
    };

    // console.log("Service Account Keys:", auth);

    return auth;
  } catch (error) {
    console.error("Error reading or parsing service account key:", error);
    throw error; // Rethrow the error to be caught in the calling function
  }
};

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
