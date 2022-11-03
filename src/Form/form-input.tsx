import { get } from "lodash";
import React from "react";
import {
  RegisterOptions,
  UseFormRegister,
  Path,
  FieldErrors,
} from "react-hook-form";
import styled from "styled-components";

import Label from "../Label/Label";
import { ErrorContainer } from "./formstyles";
import Input, { InputProps } from "./input";

export type FormInputProps<TFormValues extends Record<string, unknown>> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: FieldErrors<TFormValues>;
  rows?: number;
  cols?: number;
  value?: string | number;
  defaultValue?: string | number;
} & Omit<InputProps, "name">;

export const FormInput = <TFormValues extends Record<string, unknown>>({
  label,
  name,
  register,
  rules,
  errors,
  rows,
  cols,
  type,
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  let hasError = false;
  let errorMessages: any = "";
  if (errors && errors[name] !== undefined) {
    //console.log(get(errors, name));
    const error = get(errors, name);
    errorMessages = get(error, "message");
    hasError = !!(errors && errorMessages);
  }

  {
    return type === "checkbox" ? (
      <Checkbox>
        <Input
          width="20px"
          label={label}
          name={name}
          type={type}
          {...props}
          {...(register && register(name, rules))}
        />
        <Label size={"checkbox"}> {label}</Label>
      </Checkbox>
    ) : (
      <div>
        <ErrorContainer>
          <Label size={"small"}> {label}</Label>
          {hasError && (
            <Label color="red" size={"small"}>
              {errorMessages}
            </Label>
          )}
        </ErrorContainer>

        {rows !== undefined ? (
          <textarea name="Text1" cols={cols} rows={rows} />
        ) : (
          <Input
            label={label}
            name={name}
            {...props}
            {...(register && register(name, rules))}
          />
        )}
      </div>
    );
  }
};

const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;
