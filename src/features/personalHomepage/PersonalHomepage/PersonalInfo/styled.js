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
`;
export const Text = styled.p`
  display: flex;
  max-width: 500px;
`;
export const Button = styled.a`
  margin-top: 32px;
  display: inline-flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: white;
  background: #0366d6;
  font-size: 20px;
  font-weight: 600px;
  border-radius: 4px;
  border: 1px solid var(--diff-bg-neutral, rgba(209, 213, 218, 0.3));
`;

export const Icon = styled(MailIcon)``;
