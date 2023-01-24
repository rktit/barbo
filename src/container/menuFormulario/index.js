import React, { useEffect, useState } from "react";
import { Content } from "./style";
import { useDispatch } from "react-redux";
import * as Actions from 'store/actions';

import { Formulario } from "container";

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
		<Content className={`d-flex`}>
			<div className="container">
				<div className={`justify-content-between menu-nav ${showMenu ? "show-menu" : "hide-menu"}`}>
					<a onClick={() => clickMenu("#")} className={active === "#" ? 'active mr-3' : 'mr-3'}
						href="#">
						Quero Comprar um Imóvel
					</a>
					<a onClick={() => clickMenu("#")} className={active === "#" ? 'active ' : ''}
						href="#">
						Já sou Cliente
					</a>
					<a onClick={() => clickMenu("#")} className={active === "#" ? 'active ' : ''}
						href="#">
						Compramos seu Terreno
					</a>
					<a onClick={() => clickMenu("#")} className={active === "#" ? 'active ' : ''}
						href="#">
						Sou Vizinho(a) de Obra
					</a>
					<a onClick={() => clickMenu("#")} className={active === "#" ? 'active' : ''}
						href="#">
						Fornecedor
					</a>
					<a onClick={() => clickMenu("#")} className={active === "#" ? 'active' : ''}
						href="#">
						Assessoria de Imprensa
					</a>
					<a onClick={() => clickMenu("#")} className={active === "#" ? 'active' : ''}
						href="#">
						Outros Assuntos
					</a>
					<div className="flex line"></div>
					<div className="texto">
						Dúvidas? <br/>
						Entre em contato com nossa Central<br/>
						<strong>de Relacionamentos.</strong><p/>
					</div>

					<div className="texto">
						Whatsapp +55 (19) 9.9696-5525<br/>
						Fones +55 (19) 3597-5552 / 3597-5553<br/>
						contato@barbo.Com.Br<br/>
					</div>
				</div>
			</div>
			<Formulario />
		</Content>
	);
};

export default MenuSite;
