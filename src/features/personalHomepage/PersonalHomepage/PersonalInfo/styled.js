import styled from "styled-components";
import { ReactComponent as MailIcon } from "./mail.svg";
import { LinkButton } from "../LinkButton";

export const Container = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 70px;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-gap: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;
export const PersonalImage = styled.img`
  width: 30vw;
  max-width: 384px;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: top center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 132px;
  }
`;
export const Preheader = styled.h2`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: initial;
`;
export const Header = styled.h1`
  display: flex;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 38px;
  font-weight: 900;
  margin: 12px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;
export const Text = styled.p`
  display: flex;
  font-size: 20px;
  margin: 36px 0 0 0;
  line-height: 1.4;
  max-width: 650px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-right: 4px;
    max-width: 570px;
  }
`;

export const StyledLinkButton = styled(LinkButton)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 24px;
  }
`;

export const Icon = styled(MailIcon)`
  margin-right: 16px;
`;
