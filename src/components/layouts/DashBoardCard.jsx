import { useEffect, useState } from "react";

export default function DashBoardCard() {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_PROPERTY_ID' with the actual Google Analytics property ID
    const propertyId = "429693073";

    // Fetch data from the API route
    fetch(`/api/googleAnalytics?propertyId=${propertyId}`)
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
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
