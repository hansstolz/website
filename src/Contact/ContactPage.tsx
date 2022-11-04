import React from "react";
import styled from "styled-components";
import Button from "../Buttons/Button";
import { FormInput } from "../Form/form-input";
import { H4, IMG, Main, P } from "../Styles/TextStyles";
import "../Styles/colors.css";
import { useForm } from "react-hook-form";

type Props = {};

export type RegistrationFormFields = {
  company: string;
  lastName: string;
  firstName: string;
  email: string;
  message: string;
  backend: boolean;
  android: boolean;
  ios: boolean;
  web: boolean;
};

function ContactPage({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormFields>();

  const onSubmit = handleSubmit((data) => {
    alert(data);
    console.log(data);
  });

  const emailPattern = {
    value: new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$", "ig"),
    message: "E-Mail ist ungültig.",
  };

  return (
    <>
      <Main>
        <div>
          <H4>Wir freuen uns von Ihnen zu hören.</H4>
          <br />
          <br />
          <Form onSubmit={onSubmit}>
            <Content>
              <div>
                <P>Ich interessiere mich für:</P>
                <br />
                <FormInput<RegistrationFormFields>
                  name={"web"}
                  label={"Webentwicklung (Frontend)"}
                  id={"web"}
                  kind={"large"}
                  type={"checkbox"}
                  register={register}
                />

                <FormInput<RegistrationFormFields>
                  name={"ios"}
                  label={"iOS Entwicklung (iPad)"}
                  id={"ios"}
                  kind={"large"}
                  errors={errors}
                  type={"checkbox"}
                  register={register}
                />
                <FormInput<RegistrationFormFields>
                  name={"android"}
                  label={"Android"}
                  id={"android"}
                  kind={"large"}
                  type={"checkbox"}
                  register={register}
                />

                <FormInput<RegistrationFormFields>
                  name={"backend"}
                  label={"Backend"}
                  id={"backend"}
                  kind={"large"}
                  type={"checkbox"}
                  register={register}
                />
                <br />
                <FormInput<RegistrationFormFields>
                  name={"message"}
                  label={"Nachricht"}
                  id={"message"}
                  kind={"medium"}
                  rows={5}
                  cols={60}
                  register={register}
                ></FormInput>
              </div>
              <Right>
                <FormInput<RegistrationFormFields>
                  name={"company"}
                  label={"Firma"}
                  id={"company"}
                  kind={"medium"}
                  errors={errors}
                  register={register}
                />

                <FormInput<RegistrationFormFields>
                  name={"lastName"}
                  label={"Nachname"}
                  id={"lastName"}
                  kind={"medium"}
                  errors={errors}
                  register={register}
                  rules={{
                    required: "Pflichtfeld",
                  }}
                ></FormInput>

                <FormInput<RegistrationFormFields>
                  name={"firstName"}
                  label={"Vorname"}
                  id={"firstName"}
                  kind={"medium"}
                  errors={errors}
                  register={register}
                  rules={{
                    required: "Pflichtfeld",
                  }}
                ></FormInput>

                <FormInput<RegistrationFormFields>
                  name={"email"}
                  label={"E-Mail"}
                  id={"email"}
                  kind={"medium"}
                  errors={errors}
                  register={register}
                  rules={{
                    required: "Pflichtfeld",
                    pattern: emailPattern,
                  }}
                ></FormInput>
              </Right>
            </Content>
            <Buttons>
              <div></div>
              <Button size="large" state="primary" type="submit">
                Senden
              </Button>
            </Buttons>
          </Form>
        </div>
        <IMG src="media/images/left08.png" />
      </Main>
    </>
  );
}

export default ContactPage;

const Content = styled.div`
  display: grid;
  column-gap: 200px;
  grid-template-columns: 500px 300px;
`;

const Form = styled.form`
  margin-left: 16px;
`;

const Right = styled.div`
  margin-top: 30px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 60px;
  margin-right: 150px;
`;

/*
mport React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const {
    register,
    getValues,
    formState: { errors }
  } = useForm({
    mode: "onChange"
  });
  const atLeastOne = () =>
    getValues("test").length ? true : "Please tell me if this is too hard.";

  console.log(errors);

  return (
    <form>
      {[1, 2, 3].map((value) => (
        <input
          key={value}
          type="checkbox"
          value={value}
          {...register("test", {
            validate: atLeastOne
          })}
        />
      ))}
    </form>
  );
}
*/
