import React from 'react';
import TopNav from '../components/top-nav';
import QuestionWithOptions from '../components/questionwithoptions';
import TableTitle from '../components/day1/table-title';
import TableBanner from '../components/activity-index/table-baner';
import Vid from '../assets/vid.png'
const Day2 = () => {
  return (
    <div>
      <TopNav />
    <TableBanner 
     title="28-DAY CHALLENGE"
        description="DAY2"
        image={Vid}
        imageAlt="Challenge Preview"
        imageWidth={900} // optional
    />

      <TableTitle
        TableTitle
        subtitle="Table 3"
        title="Defining selection criteria"
      />
      <QuestionWithOptions/>
    </div>
  );
}

export default Day2;
