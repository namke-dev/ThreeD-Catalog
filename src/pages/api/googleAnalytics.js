import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { google } from "googleapis";
import fs from "fs";

const CREDENTIALS_PATH =
  "C:\\Users\\Namng\\Downloads\\d3catalog-cb9310abe884.json";

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

    console.log("Service Account Keys:", auth);

    return auth;
  } catch (error) {
    console.error("Error reading or parsing service account key:", error);
    throw error; // Rethrow the error to be caught in the calling function
  }
};

// Function to run a Google Analytics report for a given property ID
export default async function handler(req, res) {
  const propertyId = req.query.propertyId; // Get propertyId from the request query parameters

  try {
    // Get OAuth token
    const authToken = await getAuthToken();

    // Create an instance of BetaAnalyticsDataClient
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: authToken,
    });

    //Filter by time
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    // Run a simple report
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: thirtyDaysAgo.toISOString().split("T")[0], // Format as "YYYY-MM-DD"
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "city",
        },
      ],
      metrics: [
        {
          name: "activeUsers",
        },
      ],
    });

    // Send the report result as the response
    res.status(200).json({ report: response.rows });
  } catch (error) {
    console.error("Error running Google Analytics report:", error);
    throw error;
  }
}
