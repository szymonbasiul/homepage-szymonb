import styled from "styled-components";
import { ReactComponent as MailIcon } from "./mail.svg";

export const Container = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 70px;
  align-items: center;
`;
export const PersonalImage = styled.img`
  width: 30vw;
  max-width: 384px;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: top center;
`;
export const Preheader = styled.h2`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Header = styled.h1`
  display: flex;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
export const Text = styled.p`
  display: flex;
  max-width: 600px;
`;
export const Button = styled.a`
  margin-top: 32px;
  display: inline-flex;
  text-decoration: none;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.colors.mailButton.text};
  background: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 600px;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  border: 1px solid ${({ theme }) => theme.colors.mailButton.border};
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.mailButton.shadow};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const Icon = styled(MailIcon)``;
