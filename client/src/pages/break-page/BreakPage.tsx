import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// const api = "http://localhost:5656/box_breaks";
const api = "https://wax-breaker-db-service.onrender.com/box_breaks";

type MyState = {
  box_break_id: String;
  break_name: String;
  break_date: String;
};

export default function BreakPage() {
  const [breakDetails, setBreakDetails] = React.useState<MyState | null>(null);
  const { breakId } = useParams();
  const apiString = `${api}/${breakId}`;

  React.useEffect(() => {
    axios
      .get(apiString)
      .then((response) => {
        const breakObj = { ...response.data };

        setBreakDetails(breakObj);
      })
      .catch((error) => console.log(222, error));
  }, [apiString]);

  return (
    <div>
      {breakDetails && <h1>{breakDetails.break_name}</h1>}
      {breakDetails && <p>{breakDetails.break_date}</p>}
      {!breakDetails ? <p>Loading...</p> : null}
    </div>
  );
}
