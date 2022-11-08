import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Buttons/Button";
import { FormInput } from "../Form/form-input";
import { H4, IMG, Main, P, Props } from "../Styles/TextStyles";
import "../Styles/colors.css";
import { useForm } from "react-hook-form";
import postData from "../Util/HTTPRequest";
import { useMediaQuery } from "react-responsive";

export type RegistrationFormFields = {
  company: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  mobile: string;
  message: string;
  backend: boolean;
  android: boolean;
  ios: boolean;
  web: boolean;
};

export type ServerPesponse = {
  body: string;
  isBase64Encoded: false;
  statusCode: number;
  headers: Object;
};

function ContactPage() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormFields>();

  const [success, setSuccess] = useState("start");

  const onSubmit = handleSubmit(async (data) => {
    const result = postData<RegistrationFormFields>(data);

    result.then((data) => {
      if (data === "success") {
        setSuccess(data);
      } else {
        setSuccess(data);
      }
    });
  });

  const emailPattern = {
    value: new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$", "ig"),
    message: "E-Mail ist ungültig.",
  };

  return (
    <>
      <Main toggle={isDesktop}>
        <div>
          <H4 toggle={isDesktop}>Wir freuen uns von Ihnen zu hören.</H4>
          <br />
          <br />
          {success === "start" || success === "error" ? (
            <Form onSubmit={onSubmit}>
              <Content toggle={isDesktop}>
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
                    rows={12}
                    cols={50}
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
                  <FormInput<RegistrationFormFields>
                    name={"phone"}
                    label={"Telefon"}
                    id={"phone"}
                    kind={"medium"}
                    errors={errors}
                    register={register}
                  ></FormInput>
                  <FormInput<RegistrationFormFields>
                    name={"mobile"}
                    label={"Mobile"}
                    id={"mobile"}
                    kind={"medium"}
                    errors={errors}
                    register={register}
                  ></FormInput>
                </Right>
              </Content>
              <Buttons>
                <div></div>
                <Button size="large" state="primary" type="submit">
                  Senden
                </Button>
              </Buttons>
              {success === "error" && (
                <Red>
                  <h4>Etwas ist schief gelaufen.</h4>
                  <h4>Versuchen Sie es noch einmal.</h4>
                </Red>
              )}
            </Form>
          ) : (
            <div>
              <img
                src="https://artexxis.de/media/images/contact.png"
                width="549px"
                height="252px"
                alt="Wir setzen uns mit Ihnen in Verbindung"
              />
            </div>
          )}
        </div>
        {isDesktop && <IMG src="media/images/left08.png" />}
      </Main>
    </>
  );
}

export default ContactPage;

const Content = styled.div<Props>`
  display: grid;
  column-gap: 100px;
  grid-template-columns: ${(props) =>
    props.toggle ? "500px 300px 50px;" : "1fr;"};
`;

const Form = styled.form`
  margin-left: 16px;
`;

const Right = styled.div`
  margin-top: 30px;
  margin-right: 90px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 60px;
  margin-right: 150px;
`;

const Red = styled.div`
  color: red;
`;
