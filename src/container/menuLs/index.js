import React, { useEffect, useState } from "react";

import { Content } from "./style";
import * as Icon from "react-bootstrap-icons";

import { useDispatch } from "react-redux";
import * as Actions from 'store/actions';

import logo from "images/logo/logo-ls.png";
import { HeaderLS } from "container";

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

	// const openContact = () => {
	// 		window.open("https://calendly.com/liber-comercial/agendar-especialista");
	// }

	return (
		<Content className={`navbar inset-x-0 top-0 ${scroll > limit_scroll ? 'bg-active' : 'bg-active'}`}>
			<div className="container">
				<div className={`menu-logo ${scroll > limit_scroll ? 'menu-scroll' : 'menu-top'} col-md flex justify-between`}>
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
				<div className={`col-12 col-md-12 col-lg-12 col-xl-6 justify-content-between menu-nav show-menu ${showMenu ? "show-menu" : "hide-menu"}`}>
					<a onClick={() => clickMenu("/barbo/quem_somos")} className={active === "/barbo/quem_somos" ? 'active mr-2' : 'mr-2'}
						href="/barbo/quem_somos">
						quem somos
					</a>
					<a onClick={() => clickMenu("/barbo/empreendimentos")} className={active === "/barbo/empreendimentos" ? 'active mr-2' : 'mr-2'}
						href="/barbo/empreendimentos">
						empreendimentos
					</a>
					<a onClick={() => clickMenu("/barbo/blog")} className={active === "/barbo/blog" ? 'active mr-2' : 'mr-2'}
						href="/barbo/blog">
						blog
					</a>
					<a onClick={() => clickMenu("/barbo/fale_conosco")} className={active === "/barbo/fale_conosco" ? 'active mr-2' : 'mr-2'}
						href="/barbo/fale_conosco">
						fale conosco
					</a>
					<div className="espaco d-flex">
						|
					</div>
					<a onClick={() => clickMenu("/barbo/portal_corretor")} className={active === "/barbo/portal_corretor" ? 'active' : ''}
						href="/barbo/portal_corretor">
						portal do corretor
					</a>
				</div>
			</div>
		</Content>
	);
};

export default MenuSite;
