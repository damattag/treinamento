import { useState } from "react";
import { Control, Controller, FieldError } from "react-hook-form";

import { Container, ErrorText, Input, Label } from "./styles";
import error from "next/error";

interface ControlledTextInputProps {
  name: string;
  control: Control;
  required?: boolean;
  error?: boolean;
}

export default function ControlledTextInput({
  control,
  name,
  required = true,
  error,
}: ControlledTextInputProps) {
  return (
    <Container>
      <Label htmlFor={name}>
        {name} {required && <span style={{ color: "red" }}>*</span>}
      </Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Input
              id={name}
              type="text"
              placeholder={name}
              error={error}
              {...field}
            />
          </>
        )}
      />
    </Container>
  );
}
