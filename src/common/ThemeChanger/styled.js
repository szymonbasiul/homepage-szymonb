import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  `;

export const Button = styled.button`
  position: absolute;
  display: flex;
  cursor: pointer;
  align-items: center;
  border: none;
  color: inherit;
  background: none;
  outline-offset: 10px;
`;

export const Text = styled.span`
  margin-right: 12px;
  text-transform: uppercase;
  color: currentColor;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
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
  background: currentColor;
  display: flex;
  border-radius: 50%;
  padding: 3px;
  transition: transform 0.3s;

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;
