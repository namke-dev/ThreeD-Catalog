import { BetaAnalyticsDataClient } from "@google-analytics/data";
import fs from "fs";

const CREDENTIALS_PATH =
  "C:\\Users\\Namng\\Downloads\\d3catalog-cb9310abe884.json";

export default async function handler(req, res) {
  try {
    // Get OAuth token
    const authToken = await getAuthToken();

    // Create an instance of BetaAnalyticsDataClient
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: authToken,
    });

    const reportOption = req.body.reportOption; // Use the report option from the request body

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
