import React from "react";
import axios from "axios";
import styled from "@emotion/styled";
import useBreaksStore from "../../../stores/store";
import { Input } from "be-ubiquitous";
import { Button } from "../../../components";

// const api = "http://localhost:5656/box_breaks"
const api = "https://wax-breaker-db-service.onrender.com/box_breaks";

const Form = styled("form")({
  padding: "12px",
});

const FormHeading = styled("h4")({
  margin: "0px",
});

// @ts-expect-error
export default function NewBreakModalForm({ newBreakNameValue, newBreakNameOnChange}) {
  const setBreaks = useBreaksStore((state) => state.setAllStoreBreaks)
  const setIsNewBreakModalShowing = useBreaksStore((state) => state.setIsNewBreakModalShowing)

  const submitForm = (api: string) => {
    axios
      .post(`${api}`, {
        break_name: newBreakNameValue,
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

          newBreakNameOnChange("");
        setIsNewBreakModalShowing();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form>
      <FormHeading>Form title</FormHeading>
      <Input
        label="Label goes here"
        // @ts-expect-error Type '(e: any) => void'... delete comment to see full error
        onchange={(e: any) => newBreakNameOnChange(e.target.value)}
        placeholder="Placeholder thing"
        value={newBreakNameValue}
      />
      <Button label="Add break" onClick={() => submitForm(api)} />
    </Form>
  )
}
