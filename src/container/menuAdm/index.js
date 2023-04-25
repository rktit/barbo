import React, {useEffect, useReducer, useState} from "react";

import {Content} from "./style";
import * as Icon from "react-bootstrap-icons";

import {useDispatch, useSelector} from "react-redux";
import * as Actions from 'store/actions';

import logo from "images/logo/Barbo-Logo.png";

let limit_scroll = 450;

const MenuSite = () => {

    const dispatch = useDispatch()

    const _user = useSelector(({system}) => system);

    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setMobile] = useState(false);
    const [active, setActive] = useState('#');
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        if (window.innerWidth >= 992) {
            setShowMenu(true);
            setMobile(false);
        } else {
            setMobile(true);
            dispatch(Actions.close_modal('black'));
            limit_scroll = 50;
        }
    }, [window.innerWidth]);

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => {
            window.removeEventListener('scroll', listenToScroll);
        }
    }, [])

    function listenToScroll() {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
        setScroll(winScroll);
    }

    const updateMenu = () => {
        const {innerWidth: width} = window;
        if (width >= 992) {
            setShowMenu(true);
        } else {
            setShowMenu(!showMenu);
        }
    };

    const clickMenu = (link) => {
        setActive(link);
        if (isMobile) {
            setShowMenu(false);
        }
    };

    const clickLogout = () => {
        //dispatch(Actions.logout());
        localStorage.clear();
        window.location = '/@sys';
    }

    return (
        <Content className={`navbar fixed-top ${scroll > limit_scroll ? 'bg-active' : ''}`}>
            <div className="container px-3  px-md-2 col-12 d-flex justify-content-center">
                <div
                    className={`menu-logo col-12 col-md-12 col-lg-2 ${scroll > limit_scroll ? 'menu-scroll' : 'menu-top'}`}>
                    <a href="/" onClick={() => clickMenu("home")} aria-label="Product">
                        <img src={logo} className={scroll > limit_scroll ? 'scroll' : ''} id="logo"/>
                    </a>
                    <div className="d-block d-lg-none">
                        <button
                            type="button"
                            className="menu-mobile"
                            onClick={() => updateMenu()}
                        >
                            {!showMenu ? <Icon.List size={32} color={'#FFFFFF'}/> :
                                <Icon.X size={32} color={'#FFFFFF'}/>}
                        </button>
                    </div>
                </div>
                {_user.logged &&
                <div
                    className={`col-12 col-md-12 col-lg-5 col-xl-5 ml-lg-5 justify-content-between menu-nav ${showMenu ? "show-menu" : "hide-menu"}`}>
                    <a href="/@sys/banners">Banners</a>
                    <a href="/@sys/ofertas">Jornais de ofertas</a>
                    <a href="/@sys/lojas">Lojas</a>
                    <a href="/@sys/cv">Currículos</a>
                    <a href="/@sys/usuarios">Usuários</a>
                    <div className='logged'>
                        {_user.name}
                        <a onClick={() => clickLogout()} className={active === "sair" ? 'active logout' : 'logout'}
                            //    href="/coopbom/lojas">
                           href="#s">
                            Sair
                        </a>
                    </div>
                </div>
                }
            </div>
        </Content>
    );
};

export default MenuSite;