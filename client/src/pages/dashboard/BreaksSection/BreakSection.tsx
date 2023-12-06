import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import moment from "moment";
import axios from "axios";
import useBreaksStore from "../../../stores/store";
import { Card, Button } from "../../../components";
import { Theme } from "@emotion/react";

// const api = "http://localhost:5656/box_breaks";
const api = "https://wax-breaker-db-service.onrender.com/box_breaks";

type SectionProps = {
  theme?: Theme;
} & React.HTMLAttributes<HTMLElement>;

const Section = styled.section<SectionProps>(
  {
    paddingTop: "40px",
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gap: "20px",
  },
  ({ theme }) => ({})
);

type CardWrapperProps = {
  theme?: Theme;
} & React.HTMLAttributes<HTMLElement>;

const CardWrapper = styled("div")<CardWrapperProps>({
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

type CardTitleProps = {
  theme?: Theme;
} & React.HTMLAttributes<HTMLHeadingElement>;

const CardTitle = styled.h3<CardTitleProps>(({ theme }) => ({
  margin: "0px",
  color: theme.color.onPrimary,
  fontSize: "18px",
  lineHeight: "20px",
  height: "40px",
}));

type CardSubtitleProps = {
  theme?: Theme;
} & React.HTMLAttributes<HTMLParagraphElement>;

const CardSubtitle = styled("p")<CardSubtitleProps>(({ theme }) => ({
  margin: "0px 0px 20px 0px",
  color: theme.color.onPrimary,
}));

export default function BreakSection() {
  const breaks = useBreaksStore((state) => state.breaks);
  const setBreaks = useBreaksStore((state) => state.setAllStoreBreaks);
  const navigate = useNavigate();

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

  return (
    <Section>
      {breaks.map((boxBreak: any, idx: number) => {
        const breakDate = moment(boxBreak.break_date).format("MM/DD/YYYY");

        return (
          <CardWrapper key={idx}>
            <Card>
              <CardTitle>{boxBreak.break_name}</CardTitle>
              <CardSubtitle>{breakDate}</CardSubtitle>
              <Button
                variant="secondary"
                label="Delete"
                onClick={() => deleteBreak(boxBreak.box_break_id, api)}
              />
              <Button
                variant="primary"
                label="View"
                onClick={() => navigate(`/break-page/${boxBreak.box_break_id}`)}
              />
            </Card>
          </CardWrapper>
        );
      })}
    </Section>
  );
}
