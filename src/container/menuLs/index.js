import React, { useEffect, useState } from "react";

import { Content } from "./style";
import * as Icon from "react-bootstrap-icons";

import { useDispatch } from "react-redux";
import * as Actions from 'store/actions';

import logo from "images/logo/logo-ls.png";

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
		const { innerWidth: width } = window;
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


	return (
		<Content className={`navbar absolute inset-x-0 top-0 ${scroll > limit_scroll ? 'bg-active' : 'bg-active'}`}>
			<div className="container px-3  px-md-2 offset-0 col-12 offset-md-1 col-md-10">
				<div className={`menu-logo  ${scroll > limit_scroll ? 'menu-scroll' : 'menu-top'} col-md flex justify-between`}>
					<a href="/barbo" onClick={() => clickMenu("home")} aria-label="Product">
						<img src={logo} alt="Barbo Empreendimentos" className={scroll > limit_scroll ? 'scroll' : ''} id="logo" />
					</a>
					<div className="d-block d-lg-none">
						<button
							type="button"
							className="menu-mobile"
							onClick={() => updateMenu()}
						>
							{!showMenu ? <Icon.List size={32} color={'#FFFFFF'} /> : <Icon.X size={32} color={'#FFFFFF'} />}
						</button>
					</div>
				</div>
				<div className={`justify-content-between menu-nav ${showMenu ? "show-menu" : "hide-menu"}`}>
					<a href="/quem_somos" onClick={() => clickMenu("#quem_somos")} className={active === "#quem_somos" ? 'active ' : 'mr-3'}>
						quem somos
					</a>
					<a href="/empreendimentos" onClick={() => clickMenu("#empreendimentos")} className={active === "#empreendimentos" ? 'active ' : 'mr-3'}>
						empreendimentos
					</a>
					<a href="/blog" onClick={() => clickMenu("#blog")} className={active === "#blog" ? 'active ' : 'mr-3'}>
						blog
					</a>
					<a href="/fale_conosco" onClick={() => clickMenu("#fale_conosco")} className={active === "#fale_conosco" ? 'active ' : 'mr-3'}>
						fale conosco
						<div className="marca ml-3">|</div>
					</a>
					<a href="/portal_corretor" onClick={() => clickMenu("#portal_corretor")} className={active === "#portal_corretor" ? 'active ' : 'mr-3'}>
						portal do corretor
					</a>
					<a href="/contato" onClick={() => clickMenu("#contato")} className={active === "#contato" ? 'active ' : 'mr-3'}>
						contato
					</a>
				</div>
			</div>
		</Content>
	);
};

export default MenuSite;
