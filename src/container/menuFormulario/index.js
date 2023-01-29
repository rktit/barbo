import React, { useEffect, useState } from "react";
import { Content } from "./style";
import { useDispatch } from "react-redux";
import * as Actions from 'store/actions';

import { Formulario } from "container";

let limit_scroll = 450;
let limit_scroll_header = 250;

const MenuFormulario = (props) => {

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
	const [modalShow, setModalShow] = useState(false);
	const [nomeModelo, setNomeModelo] = useState("");

	function abreModal(modelo) {
		setNomeModelo(modelo);
		setModalShow(true);
	}
	// const openContact = () => {
	// 		window.open("https://calendly.com/liber-comercial/agendar-especialista");
	// }

	return (
		<Content className={`d-flex`}>
			<div className="container ">
				<div className={`menu-nav ${showMenu ? "show-menu" : "show-menu"}`}>
					<a onClick={() => { abreModal(props.title) }} className={active === "#" ? 'active mr-3' : 'mr-3'}>
						Quero Comprar um Imóvel
					</a>
					<a onClick={() => { abreModal(props.title) }} className={active === "#" ? 'active mr-3' : 'mr-3'}>
						Já sou Cliente
					</a>
					<a onClick={() => { abreModal(props.title) }} className={active === "#" ? 'active mr-3' : 'mr-3'}>
						Compramos seu Terreno
					</a>
					<a onClick={() => { abreModal(props.title) }} className={active === "#" ? 'active mr-3' : 'mr-3'}>
						Sou Vizinho(a) de Obra
					</a>
					<a onClick={() => { abreModal(props.title) }} className={active === "#" ? 'active mr-3' : 'mr-3'}>
						Fornecedor
					</a>
					<a onClick={() => { abreModal(props.title) }} className={active === "#" ? 'active mr-3' : 'mr-3'}>
						Assessoria de Imprensa
					</a>
					<a onClick={() => { abreModal(props.title) }} className={active === "#" ? 'active mr-3' : 'mr-3'}>
						Outros Assuntos
					</a>
					<div className="flex line"></div>
					<div className="texto text-center">
						Dúvidas? <br />
						Entre em contato com nossa Central<br />
						<strong>de Relacionamentos.</strong><p />
					</div>
					<div className="texto text-center">
						Whatsapp +55 (19) 9.9696-5525<br />
						Fones +55 (19) 3597-5552 / 3597-5553<br />
						contato@barbo.Com.Br<br />
					</div>
				</div>
			</div>
			<Formulario name={nomeModelo}
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
			<Formulario />
		</Content>
	);
};

export default MenuFormulario;
