import React from "react";
import styled from "@emotion/styled";

type Props = {
  children?: React.ReactNode;
  classname?: string;
  style?: any;
  noPadding?: boolean;
};

const CardContainer = styled.div<Props>(
  {
    borderRadius: "4px",
  },
  ({ noPadding }) => ({
    padding: noPadding ? "0px" : "16px",
  }),
  ({ theme }) => ({
    border: "2px solid rgba(63, 63, 63, .3)",
    background: theme.color.surfacePrimary,
  })
);

export default function Card({ children, classname, style, noPadding }: Props) {
  return (
    <CardContainer className={classname} style={style} noPadding={noPadding}>
      {children}
    </CardContainer>
  );
}
