import styled from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  border: none;
  background: transparent;
`;

export const Text = styled.span`
  margin-right: 12px;
  text-transform: uppercase;
  color: currentColor;
  align-self: center;
`;

export const Switch = styled.span`
  display: flex;
  background: ${({ theme }) => theme.colors.themeSwitch.background};
  border: 1px solid;
  border-radius: 16px;
  width: 48px;
  padding: 3px;
`;

export const IconWrapper = styled.div`
  display: flex;
  border-radius: 50%;
  padding: 3px;
  background: currentColor;
`;

export const Icon = styled(SunIcon)``;
