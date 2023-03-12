import React, { useEffect, useState } from "react";
import { Content } from "./style";
import { useDispatch } from "react-redux";
import * as Actions from 'store/actions';

import { Formulario } from "container";

import casa from "images/contato/casa.png";
import cliente from "images/contato/cliente.png";
import terreno from "images/contato/terreno.png";
import vizinho from "images/contato/vizinho.png";
import fornecedor from "images/contato/fornecedor.png";
import assessoria from "images/contato/assessoria.png";
import assuntos from "images/contato/assuntos.png";

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


					{/* <a onClick={() => { abreModal(props.title) }} className={active === "#" ? 'active mr-0' : 'mr-3'}>
						Quero Comprar um Imóvel
					</a> */}


					<div className="d-flex flex-column align-items-center">
						<div className="title text-center">
							Fale Conosco
						</div>
						<div className="d-flex icones-empreendimentos my-5">
							<div className="icones">
								<a onClick={() => { abreModal(props.title) }} className="icones-text">
									<img className="" src={casa} alt="Quero comprar um imóvel" />
									Quero comprar um imóvel
								</a>
							</div>
							<div className="icones">
								<a onClick={() => { abreModal(props.title) }} className="icones-text">
									<img className="" src={cliente} alt="Já sou Cliente" />
									Já sou Cliente
								</a>
							</div>
							<div className="icones pr-2">
								<a onClick={() => { abreModal(props.title) }} className="icones-text">
									<img className="" src={terreno} alt="Compramos seu Terreno" />
									Compramos seu Terreno
								</a>
							</div>
							<div className="icones">
								<a onClick={() => { abreModal(props.title) }} className="icones-text">
									<img className="" src={vizinho} alt="Sou Vizinho(a) de Obra" />
									Sou Vizinho(a) de Obra
								</a>
							</div>
						</div>
						<div className="d-flex">
							<div className="d-flex icones-empreendimentos my-0 my-d-5">
								<div className="icones pr-2">
									<a onClick={() => { abreModal(props.title) }} className="icones-text">
										<img className="" src={fornecedor} alt="Fornecedor" />
										Fornecedor
									</a>
								</div>
								<div className="icones">
									<a onClick={() => { abreModal(props.title) }} className="icones-text">
										<img className="" src={assessoria} alt="Assessoria de Imprensa" />
										Assessoria de Imprensa
									</a>
								</div>
								<div className="icones">
									<a onClick={() => { abreModal(props.title) }} className="icones-text">
										<img className="" src={assuntos} alt="Outros Assuntos" />
										Outros Assuntos
									</a>
								</div>
							</div>
						</div>
					</div>


					<div className="flex line"></div>
					<div className="texto text-center">
						Dúvidas? <br />
						Entre em contato com nossa Central
						de Relacionamentos.<p />
					</div>
					<div className="texto text-center">
						Whatsapp (19) 99696.5525<br />
						Contato (19) 3597.5552 | 3597.5553<br />
						contato@barbo.com.br<br />
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
