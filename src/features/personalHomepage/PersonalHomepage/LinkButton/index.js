import styled from "styled-components";

export const LinkButton = styled.a`
  margin-top: 32px;
  display: inline-flex;
  text-decoration: none;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
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
