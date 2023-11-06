import React, {useRef, useState} from 'react';
import styled from "styled-components";
import * as S from "./style";
import {createPortal} from "react-dom";
import Menu from "./menu/Menu";
import {useStore} from "../../hooks/zustand/useStore";

const Header = () => {
    const hamburgerRef = useRef();
    const [isNav, setIsNav] = useState(false);
    const { inc } = useStore();

    const hamburgerClickHandler = () => {
        inc();
        setIsNav((prev)=>!prev);
    }

    return (
        <S.HeaderWrap>
            <S.Header>
                <S.HeaderLeftBox>
                    <S.HamburgerButton
                        ref={hamburgerRef}
                        isNav={isNav}
                        onClick={hamburgerClickHandler}>햄버거</S.HamburgerButton>
                    { createPortal(
                        <Menu isNav={isNav} setIsNav={setIsNav} hamburgerRef={hamburgerRef}/>,
                        document.getElementById('navList-root')
                    ) }
                </S.HeaderLeftBox>
            </S.Header>
        </S.HeaderWrap>
    );
};

export default Header;