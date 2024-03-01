import { BetaAnalyticsDataClient } from "@google-analytics/data";

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
    const auth = {
      client_email: process.env.NEXT_PUBLIC_GA_CLIENT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_GA_PRIVATE_KEY.split(
        String.raw`\n`
      ).join("\n"),
    };

    // console.log("Service Account Keys:", auth);

    return auth;
  } catch (error) {
    console.error("==> Error reading or parsing service account key:", error);
    throw error; // Rethrow the error to be caught in the calling function
  }
};
