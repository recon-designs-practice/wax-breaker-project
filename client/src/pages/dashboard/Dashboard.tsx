import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import useBreaksStore from "../../stores/store";
import { Modal } from "../../components";
import NewBreakModalForm from "./NewBreakModal/NewBreakModalForm";
import BreakSection from "./BreaksSection/BreakSection";
import AuthDetails from "../../components/AuthDetails";

// const api = "http://localhost:5656/box_breaks";
const api = "https://wax-breaker-db-service.onrender.com/box_breaks";

const DashboardContainer = styled("main")({
  // border: "2px solid hotpink",
});

const Dashboard = () => {
  const [newBreakName, setNewBreakName] = useState("");
  const setBreaks = useBreaksStore((state) => state.setAllStoreBreaks);
  const isNewBreakModalShowing = useBreaksStore(
    (state) => state.isNewBreakModalShowing
  );
  const setIsNewBreakModalShowing = useBreaksStore(
    (state) => state.setIsNewBreakModalShowing
  );

  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        const tempArr: any = [];

        response.data.forEach((entry: any) => {
          tempArr.push(entry);
        });

        setBreaks(tempArr);
      })
      .catch((error) => {
        console.log(222, error);
      });
  }, [setBreaks]);

  useEffect(() => {
    const closeModal = (e: any) => {
      if (e.keyCode === 27) {
        if (!isNewBreakModalShowing) return;

        if (isNewBreakModalShowing) {
          setIsNewBreakModalShowing();
          setNewBreakName("");
        }
      }
    };

    window.addEventListener("keydown", closeModal);

    return () => window.removeEventListener("keydown", closeModal);
  });

  return (
    <DashboardContainer>
      {isNewBreakModalShowing && (
        <Modal>
          <NewBreakModalForm
            newBreakNameValue={newBreakName}
            newBreakNameOnChange={setNewBreakName}
          />
        </Modal>
      )}
      <BreakSection />
      <section>
        <AuthDetails />
      </section>
    </DashboardContainer>
  );
};

export default Dashboard;
