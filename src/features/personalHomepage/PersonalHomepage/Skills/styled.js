import styled from "styled-components";
import { ReactComponent as BulletImage } from "./bullet.svg";
import { SubHeader } from "../SubHeader";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.boxBackground};
  padding: 32px;
  margin-top: 72px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 48px;
    padding: 16px;
  }
`;

export const List = styled.ul`
  margin-top: 32px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    font-size: 14px;
    margin-top: 12px;
  }
`;

export const Item = styled.li`
  display: flex;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    line-height: 1.2;
  }
`;

export const Bullet = styled(BulletImage)`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 16px;
  height: auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 6px;
    margin-right: 8px;
  }
`;

export const StyledHeader = styled(SubHeader)`
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding-bottom: 12px;
  }
`;
