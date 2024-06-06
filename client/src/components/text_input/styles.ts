import styled from "styled-components";

import { barlow } from "styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-family: ${barlow.style.fontFamily};
  font-size: 2rem;

  color: #000;
`;

interface InputProps {
  error?: boolean;
}

export const Input = styled.input<InputProps>`
  width: 320px;

  padding: 16px;
  border: 1px solid ${({ error }) => (error ? "red" : "#787878")};
  border-radius: 8px;

  font-family: ${barlow.style.fontFamily};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #787878;
  }
`;

export const ErrorText = styled.p`
  font-family: ${barlow.style.fontFamily};
  font-size: 1.6rem;
  color: red;
`;
