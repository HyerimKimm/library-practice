import React, {useEffect, useRef, useState} from 'react';
import * as S from './style';
import {NAV_LIST} from "../../constants";

const Menu = ({ isNav, setIsNav, hamburgerRef }) => {
    let [currentClickMenu, setCurrentClickMenu] = useState(null);
    const selectMenuRef = useRef();

    //모든 메뉴를 닫는 함수
    const closeAllMenu = () => {
        setCurrentClickMenu(null);
        setIsNav(false);
    }
    const clickSelectMenuOutside = (event) => {
        if(hamburgerRef.current.contains(event.target)) return;
        if ( !selectMenuRef.current.contains(event.target) ) {
            closeAllMenu();
        }
    }
    //subMenu를 return 하는 함수
    const renderSubMenuList = () => {
        const selectedMenu = NAV_LIST.filter(menuObj => menuObj.name===currentClickMenu)[0];

        return (
            <S.SubMenuBox>
                <S.SubMenuUl>
                    {
                        selectedMenu.submenu.map((e,idx)=>
                            <S.SubMenuItem key={idx}>{ e.sub_name }</S.SubMenuItem>)
                    }
                </S.SubMenuUl>
            </S.SubMenuBox>
        );
    }

    useEffect(() => {
        document.addEventListener('mousedown', clickSelectMenuOutside);

        return () => {
            document.removeEventListener('mousedown', clickSelectMenuOutside);
        };
    });

    return (
        <S.TopHeaderMenuWrap $isNav={isNav} ref={selectMenuRef}>
            {
                NAV_LIST.map((menu,idx)=>(
                    <S.MenuItem key={idx} onMouseDown={()=>{
                        setCurrentClickMenu(menu.name);
                    }}>
                        {menu.name}
                        {currentClickMenu === menu.name && renderSubMenuList()}
                    </S.MenuItem>
                ))
            }
        </S.TopHeaderMenuWrap>
    );
};

export default Menu;