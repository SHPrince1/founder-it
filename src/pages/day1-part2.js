"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RankingSkills from "../components/day1/ranking-skills";
import TableBanner from "../components/activity-index/table-baner";
import Vid from "../assets/vid.png";
import TableTitle from "../components/day1/table-title";
import style2 from "../styles/day1part2.module.css";
import TopNav from "../components/top-nav";
import Footer from "../components/footer";
import EditText from "../components/edittext";
import ButtonNextPre from "../components/button-next-pre";
import { message } from "antd";

const Day1part2 = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  //  Fetch saved skills & passions when page loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (!token) {
          message.error("No token found. Please login again.");
          navigate("/login");
          return;
        }

        const res = await fetch(
          "https://backend.thefounderfit.com/api/day1/get",
          {
            headers: {
              Authorization: `Bearer ${token}`, // fixed here
            },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error(err);
        message.error("Error fetching skills & passions");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handlePrev = () => navigate("/day1-part1");
  const handleNext = () => navigate("/day2");

  return (
    <div className={style2.container}>
      <TopNav />

      <TableBanner
        title="28-DAY CHALLENGE"
        description="DAY1-PART2"
        image={Vid}
        imageAlt="Challenge Preview"
        imageWidth={900}
      />

      <div className={style2.rank}>
        <p>
          To rank your skills, passions, interests using the table below, we
          will automatically do it for you and you can sort them and adjust
          accordingly.
        </p>
      </div>

      <div className={style2.edit}>
        <EditText
          message='You can edit the list by changing the numbers assigned to the
          attribute and clicking the "rank for me" button above'
        />
      </div>

      <TableTitle
        subtitle="Table 2"
        title="Ranking skills, passions and interests"
      />

      <div className={style2.TableContainer}>
        {loading ? (
          <p>Loading your skills & passions...</p>
        ) : (
          <RankingSkills
            data={items}
            onDataChange={(newData) => setItems(newData)}
          />
        )}

        <div className={style2.btnContainer}>
          <ButtonNextPre
            buttons={[
              { label: "PREVIOUS", onClick: handlePrev },
              { label: "NEXT", onClick: handleNext },
            ]}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Day1part2;
