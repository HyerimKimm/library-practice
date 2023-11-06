import styled from "styled-components";

export const HeaderWrap = styled.header`
  height: 60px;
  min-width: 1440px;
  position: relative;
  background-color: #47474b;
`;

export const Header = styled.div`
  height: 100%;
  width: 100vw;
  min-width: 1000px;
  padding: 0 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HamburgerButton = styled.button`
  background-color: ${props=>props.isNav?'red':'blue'};
`
