// Your main file (e.g., DashboardPage.js)
import React from "react";
import Layout from "@/components/layouts/Layout";
import Tabs from "@/components/layouts/Tabs";
import DashBoardUser from "@/components/layouts/DashBoardUser";

const DashboardPage = () => {
  const tabs = ["User", "Revenue"];

  return (
    <Layout>
      <Tabs tabs={tabs} defaultTab="User">
        {{
          User: <DashBoardUser />,
          Revenue: <DashBoardUser />,
        }}
      </Tabs>
    </Layout>
  );
};

export default DashboardPage;
