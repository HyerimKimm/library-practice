import styled from "styled-components";

export const TopHeaderMenuWrap = styled.div`
  width: 280px;
  height: calc(100vh - 60px);

  display: flex;
  flex-direction: column;

  background-color: #dddddd;
  border-right: 1px solid #000;

  position: fixed;
  left: ${(props) => (props.$isNav ? '0' : '-280px')};
  top: 60px;
  transition: 0.2s ease-in;

  z-index: 9;
`;
export const MenuItem = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 4px 0;
  padding-left: 10px;
`
export const SubMenuBox = styled.div`
  position: absolute;
  top: 3px;
  left: 262px;
  min-width: 150px;
  background-color: white;
  box-shadow: 1px 3px 9px 5px rgb(0 0 0 / 15%);
  z-index: 5;
  border-radius: 4px;
`;

export const SubMenuUl = styled.ul``;

export const SubMenuItem = styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333338;

  &:hover {
    background-color: #f3f3f3;
  }
`;