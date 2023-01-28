import React, { useEffect, useState } from "react";
import Content from "./style";

import { useDispatch } from "react-redux";
import * as Actions from 'store/actions';

import Fade from "react-reveal/Fade";
import ScrollableAnchor from "react-scrollable-anchor";

import ico_insta from 'images/icons/icon_instagram.png';
import ico_face from 'images/icons/icon_facebook.png';
import ico_youtube from 'images/icons/icon_youtube.png';
import logo from 'images/logo/Barbo-Logo.png';

let limit_scroll = 450;
let limit_scroll_header = 250;


function Footer(props) {
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
		<ScrollableAnchor id="footer">
			<Content className="row">
				<div className='box col-11'>
					<div className='offset-1 p-0 content'>
						<div className="row p-0 text-white">
							<Fade left>
								<div className="col-3">
									<div className="logo-footer">
										<a href='#quem_somos'><img src={logo} className="logo" /></a>
									</div>
									<div className="conteudo py-3">
										<span className="texto">
											<strong>Barbo Rio Claro Empreendimentos Ltda</strong><br />
											Rua 09 Cj, 500, Cidade Jardim<br />
											Rio Claro | SP | Cep: 13501-100 <br />
										</span>
									</div>
									<div className='texto pb-3 infos'>
										<a target="_blank" href='https://www.google.com/maps/place/Barbo+Empreendimentos/@-22.425263,-47.5618185,17z/data=!3m1!4b1!4m6!3m5!1s0x94c7dba75cdfb1ff:0x1aa0d91b03209f5f!8m2!3d-22.425268!4d-47.5596298!16s%2Fg%2F11j21cf130'>
											Como chegar
										</a>
									</div>
									<div className='texto'>
										<a target="_blank" href="https://api.whatsapp.com/send?phone=5519996965525&text=Gostaria de falar com um consultor?">
											<strong>Whatsapp</strong>: +55 (19) 9.9696-5525
										</a>
									</div>
									<div className='texto'>
										<strong>Fones</strong>: +55(19) 3597-5552 / 3597-5553
									</div>
									<div className='texto'><a
										href='mailto: contato@barbo.com.br'>Contato@barbo.Com.Br</a>
									</div>
									<div className='d-flex'>
										<div className='d-flex grid'>
											<Fade right><div className='conteudo col-2'><a href='https://www.instagram.com/barboempreendimentos/' target="_blank"><img src={ico_insta} alt='Instagram' className='icone_midia' /></a></div></Fade>
											<Fade right><div className='conteudo col-2 pl-3'><a href='https://pt-br.facebook.com/barboempreendimentos/' target="_blank"><img src={ico_face} alt='Facebook' className='icone_midia' /></a></div></Fade>
											{/* <Fade right><div className='conteudo col-2'><a href='https://www.youtube.com/channel/UCZBSlIsy4JyqkdrdG8cPRaw' target="_blank"><img src={ico_youtube} alt='YouTube' className='icone_midia' /></a></div></Fade> */}
										</div>
									</div>
								</div>
							</Fade>
							<div className='col-2 p-0 info'>
								<Fade>
									<div className='titulo'><strong>Quem somos</strong></div>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/quem_somos")} className={active === "/quem_somos" ? 'active ' : ''}
											href="/quem_somos">
											Incorporadora
										</a>
									</div>
								</Fade>
								<Fade>
									<div className='contexto py-3 infos'>
										<a href="#politica-privacidade" onClick={() => dispatch(Actions.toggle_modal('politica'))}>
											<strong>Política de Privacidade</strong>
										</a>
									</div>
								</Fade>
								<Fade>
									<div className='titulo'><strong>Cidades</strong></div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/empreendimentos")} href="/empreendimentos" id="btn-trab">Piracicaba</a>
									</div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/empreendimentos")} href="/empreendimentos" id="btn-trab">Rio Claro</a>
									</div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/empreendimentos")} href="/empreendimentos" id="btn-trab">Americana</a>
									</div>
								</Fade>
							</div>
							<div className='col-2 p-0 info'>
								<Fade>
									<div className='titulo'><strong>Empreendimentos</strong></div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/empreendimentos")} href="/empreendimentos" id="btn-trab">Loteamento</a>
									</div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/empreendimentos")} href="/empreendimentos" id="btn-trab">Residencial</a>
									</div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/empreendimentos")} href="/empreendimentos" id="btn-trab">Corporativo</a>
									</div>
								</Fade>
							</div>
							<div className='col-2 p-0 info pr-2'>
								<Fade>
									<div className='titulo'><strong>Fale conosco</strong></div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/fale-conosco")} href="/fale-conosco" id="btn-trab">Compramos seu Terreno</a>
									</div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/fale-conosco")} href="/fale-conosco" id="btn-trab">Sou Vizinho(a) de uma Obra</a>
									</div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/fale-conosco")} href="/fale-conosco" id="btn-trab">Fornecedor</a>
									</div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/fale-conosco")} href="/fale-conosco" id="btn-trab">Canal de Denúncias ou Sugestões</a>
									</div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/fale-conosco")} href="/fale-conosco" id="btn-trab">Outros Assuntos</a>
									</div>
								</Fade>
							</div>
							<div className='col-2 p-0 info'>
								<Fade>
									<div className='titulo'><strong>Central</strong></div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/fale-conosco")} href="/fale-conosco" id="btn-trab">Perguntas Frequentes</a>
									</div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/portal_corretor")} href="/portal_corretor" id="btn-trab">Portal do Corretor</a>
									</div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/trabalhe-conosco")} href="/trabalhe-conosco" id="btn-trab">Trabalhe Conosnco</a>
									</div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/trabalhe-conosco")} href="/trabalhe-conosco" id="btn-trab">Portal do Cliente</a>
									</div>
									<div className='contexto'>
										<a onClick={() => clickMenu("/blog")} href="/blog" id="btn-trab">Blog</a>
									</div>
								</Fade>
							</div>
							<div className="flex line"></div>
							<div className='col-10 py-4 copyright'>
								Desenvolvido por HUMA CRIATIVO
							</div>
						</div>
					</div>
				</div>
			</Content>
		</ScrollableAnchor>
	);
}

export default Footer;
