import React from "react";
import DownloadSection from "./components/DownloadSection";
import InstallationGuide from "./components/InstallGuide";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <DownloadSection />
      <InstallationGuide />
    </Layout>
  );
};

export default App;
