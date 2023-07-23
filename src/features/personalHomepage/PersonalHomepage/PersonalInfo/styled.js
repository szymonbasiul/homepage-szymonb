import styled from "styled-components";

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
export const Preheader = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Header = styled.h1`
  display: flex;
`;
export const Content = styled.p`
  display: flex;
`;
