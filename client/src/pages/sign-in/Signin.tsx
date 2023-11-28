import React from "react";
import styled from "@emotion/styled";
import SignInForm from "./SignInForm";
import AuthDetails from "../../components/AuthDetails";
import { Theme } from "@emotion/react";

type SectionProps = {
  theme?: Theme;
} & React.HTMLAttributes<HTMLElement>;

const SigninContainer = styled("main")<SectionProps>(
  {
    // border: "2px solid red",
  },
  ({ theme }) => ({})
);

const Signin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SigninContainer>
      <section>
        <SignInForm
          email={{ value: email, onchange: setEmail }}
          password={{ value: password, onchange: setPassword }}
        />
      </section>
      <section>
        <AuthDetails />
      </section>
    </SigninContainer>
  );
};

export default Signin;
