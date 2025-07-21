import React from "react";
import TopNav from "../components/top-nav";
import Footer from "../components/footer";
import TableBanner from "../components/activity-index/table-baner";
import Table from "../components/activity-index/table";
import Vid from '../assets/vid.png'
const ActivityIndexPage = () => {
  return (
    <div>
      <TopNav />
      <TableBanner
        title="28-DAY CHALLENGE"
        description="Track your progress, start today’s task, and stay on the path to launching your business."
        image={Vid}
        imageAlt="Challenge Preview"
        imageWidth={900} // optional
      />
      <Table />
      <Footer />
    </div>
  );
};

export default ActivityIndexPage;
