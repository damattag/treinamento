import styled from "styled-components";
import { barlow } from "styles/theme";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 32px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 32px;

  padding: 56px 80px;
  border-radius: 12px;

  border: 2px solid #58cbfb;

  background-color: #d2effe;
`;

export const FormDescription = styled.p`
  font-family: ${barlow.style.fontFamily};
  font-size: 1.6rem;
  color: #000;
  font-weight: 500;

  text-align: center;
`;
