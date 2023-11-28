import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import moment from "moment";
import useBreaksStore from "../../stores/store";
import { Button, Input } from "be-ubiquitous";
import Card from "../../components/card/Card";
import Modal from "../../components/modal/Modal";
import AuthDetails from "../../components/AuthDetails";

// const api = "http://localhost:5656/box_breaks"
const api = "https://wax-breaker-db-service.onrender.com/box_breaks";

const CardTitle = styled.h3(({ theme }) => ({
  margin: "0px",
  color: theme.color.onPrimary,
  fontSize: "18px",
  lineHeight: "20px",
  height: "40px",
}));

const CardSubtitle = styled("p")(({ theme }) => ({
  margin: "0px 0px 20px 0px",
  color: theme.color.onPrimary,
}));

const DashboardContainer = styled("div")({
  border: '2px solid hotpink'
});

const Form = styled("form")({
  padding: "12px",
});

const FormHeading = styled("h4")({
  margin: "0px",
});

const BreaksSection = styled("div")({
  paddingTop: "40px",
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: "20px",
});

const CardWrapper = styled("div")({
  gridColumn: "span 12",
  "@media (min-width: 768px)": {
    gridColumn: "span 6",
  },
  "@media (min-width: 1024px)": {
    gridColumn: "span 4",
  },
  "@media (min-width: 1280px)": {
    gridColumn: "span 3",
  },
  "@media (min-width: 1536px)": {
    gridColumn: "span 2",
  },
});

const Dashboard = () => {
  const [newBreakName, setNewBreakName] = useState("");
  const breaks = useBreaksStore((state) => state.breaks);
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

  const deleteBreak = (breakId: string, api: string) => {
    axios
      .delete(`${api}/${breakId}`)
      .then(() => {
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitForm = (api: string) => {
    axios
      .post(`${api}`, {
        break_name: newBreakName,
      })
      .then((response) => {
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
            console.log(error);
          });

        setNewBreakName("");
        setIsNewBreakModalShowing();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DashboardContainer>
      {isNewBreakModalShowing && (
        <Modal>
          <Form>
            <FormHeading>Form title</FormHeading>
            <Input
              label="Label goes here"
              // @ts-expect-error Type '(e: any) => void'... delete comment to see full error
              onchange={(e: any) => setNewBreakName(e.target.value)}
              placeholder="Placeholder thing"
              value={newBreakName}
            />
            <Button label="Add break" onClick={() => submitForm(api)} />
          </Form>
        </Modal>
      )}
      <BreaksSection>
        {breaks.map((boxBreak: any, idx: number) => {
          const breakDate = moment(boxBreak.break_date).format(
            "MMMM Do YYYY, h:mm:ss"
          );

          return (
            <CardWrapper>
              <Card key={idx}>
                <CardTitle>{boxBreak.break_name}</CardTitle>
                <CardSubtitle>{breakDate}</CardSubtitle>
                <Button
                  variant="secondary"
                  label="Delete"
                  onClick={() => deleteBreak(boxBreak.box_break_id, api)}
                />
              </Card>
            </CardWrapper>
          );
        })}
      </BreaksSection>
      <div>
        <AuthDetails />
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
