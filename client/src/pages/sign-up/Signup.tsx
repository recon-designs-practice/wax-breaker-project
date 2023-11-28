import React from "react";
import styled from "@emotion/styled";
import AuthDetails from "../../components/AuthDetails";
import SignupForm from "./SignupForm";
import { Theme } from "@emotion/react";

type SectionProps = {
  theme?: Theme;
} & React.HTMLAttributes<HTMLElement>;

const SignupContainer = styled("main")<SectionProps>(
  {
    // border: "2px solid red",
  },
  ({ theme }) => ({})
);

const Signup = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SignupContainer>
      <section>
        <SignupForm
          email={{ value: email, onchange: setEmail }}
          password={{ value: password, onchange: setPassword }}
        />
      </section>
      <section>
        <AuthDetails />
      </section>
    </SignupContainer>
  );
};

export default Signup;
