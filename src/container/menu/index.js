import React, {useEffect, useState} from "react";

import {Content} from "./style";
import * as Icon from "react-bootstrap-icons";

import {useDispatch} from "react-redux";
import * as Actions from 'store/actions';

import logo_jacto from "images/logo/logo-jacto.png";
import { Header } from "container";

let limit_scroll = 450;
let limit_scroll_header = 250;

const MenuSite = () => {
		
		const dispatch = useDispatch()
		
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
				// console.log('winScroll', winScroll);
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
		
		// const openContact = () => {
		// 		window.open("https://calendly.com/liber-comercial/agendar-especialista");
		// }
		
		return (
				<Content className={`navbar fixed-top ${scroll > limit_scroll ? 'bg-active' : ''}`}>
						{ scroll < limit_scroll_header ? <Header/> : "" }
						<div className="container px-3  px-md-2 offset-0 col-12 offset-md-1 col-md-10">
								<div className={`menu-logo col-12 col-md-12 col-lg-5 ${scroll > limit_scroll ? 'menu-scroll' : 'menu-top'} col-md flex justify-between`}>
										<a href="/terrazultratores" onClick={() => clickMenu("home")} aria-label="Product">
												<img src={logo_jacto} alt="Jacto" className={scroll > limit_scroll ? 'scroll' : ''} id="logo"/>
												<span className="texto-logo md-1">Terrazul Tratores</span>
										</a>
										<div className="d-block d-lg-none">
												<button
														type="button"
														className="menu-mobile"
														onClick={() => updateMenu()}
												>
														{!showMenu ? <Icon.List size={32} color={'#FFFFFF'}/> : <Icon.X size={32} color={'#FFFFFF'}/>}
												</button>
										</div>
								</div>
								<div className={`col-12 col-md-12 col-lg-5 col-xl-5 justify-content-between menu-nav ${showMenu ? "show-menu" : "hide-menu"}`}>
										<a onClick={() => clickMenu("#terrazul")} className={active === "#terrazul" ? 'active mr-3' : 'mr-3'}
										   href="#terrazul">
												A Terrazul
										</a>
										<a onClick={() => clickMenu("#maquinas")} className={active === "#maquinas" ? 'active ' : ''}
										   href="#maquinas">
												Máquinas
										</a>
										<a onClick={() => clickMenu("#pos_vendas")} className={active === "#pos_vendas" ? 'active ' : ''}
										   href="#pos_vendas">
												Pós-Venda 
										</a>
										<a onClick={() => clickMenu("#catalogo")} className={active === "#catalogo" ? 'active ' : ''}
										   href="#catalogo">
												Catálogos
										</a>
										<a onClick={() => clickMenu("#contato")} className={active === "#contato" ? 'active' : ''}
										   href="#contato">
												Contato
										</a>
								</div>
						</div>
				</Content>
		);
};

export default MenuSite;
