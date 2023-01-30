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
		<ScrollableAnchor id="contatos">
			<Content className="row">
				<div className='box col-12 p-0'>
					<div className='col-12 offset-1 p-0 content'>
						<div className="col-12 row p-0 text-white">
							<Fade left>
								<div className="logo-footer col-12 col-md-4 p-0">
									<a href='#sobre'><img src={logo} className="logo" /></a>
									<div className='col-12 p-0 info'>
										<div className='titulo'>Barbo Rio Claro Empreendiemtnos Ltda</div>
										<Fade>
											<div className='conteudo col-12 p-0 row infos'>
												<div className='col-11 p-0 text-left'>
													Rua 09 Cj, 500, Cidade Jardim <br />
													Rio Claro|SP|Cep: 13501-100
												</div>
											</div>
										</Fade>
										<Fade>
											<div className='col-12 col-md-6 p-0 info'>
												<a target="_blank" href='https://www.google.com/maps/place/Barbo+Empreendimentos/@-22.425263,-47.5618185,17z/data=!3m1!4b1!4m6!3m5!1s0x94c7dba75cdfb1ff:0x1aa0d91b03209f5f!8m2!3d-22.425268!4d-47.5596298!16s%2Fg%2F11j21cf130'>
													<div className='titulo'>Como chegar</div>
												</a>
											</div>
										</Fade>
										<Fade>
											<div className="conteudo col-12 p-0">
												<a target="_blank" href="https://api.whatsapp.com/send?phone=5519996965525&text=Gostaria de falar com um consultor?">
													<strong>Whatsapp:</strong> +55 (19) 9.9696-5525
												</a>
											</div>
										</Fade>
										<Fade>
											<div className='conteudo col-12 p-0'>
												<div className='col-11 p-0 text-left'>
													<strong>Fones:</strong> +55 (19) 3597-5552 / 3597-5553
												</div>
											</div>
										</Fade>
										<Fade>
											<div className='conteudo col-12 p-0'>
												<div className='col-11 p-0 text-left'><a
													href='mailto: contato@barbo.com.br'>contato@barbo.com.br</a>
												</div>
											</div>
										</Fade>
										<Fade>
											<div className='icones col-12 info'>
												<div className='col-8 col-md-12 row'>
													<Fade right>
														<div className='conteudo col-4 col-md-1'>
															<a href='https://www.instagram.com/barboempreendimentos/' target="_blank">
																<img src={ico_insta} alt='Instagram' className='icone_midia' />
															</a>
														</div>
													</Fade>
													<Fade right>
														<div className='conteudo col-4 col-md-1'>
															<a href='https://pt-br.facebook.com/barboempreendimentos/' target="_blank">
																<img src={ico_face} alt='Facebook' className='icone_midia' />
															</a>
														</div>
													</Fade>
												</div>
											</div>
										</Fade>
									</div>
								</div>

							</Fade>
							<div className='col-12 col-md-2 p-0'>
								<div className='col-12 col-md-7 p-0 info'>
									<div className='titulo'>Quem somos</div>
									<Fade>
										<div className='conteudo'>
											<a onClick={() => clickMenu("ls#pos_vendas")} className={active === "ls#pos_vendas" ? 'active ' : ''}
												href="ls#pos_vendas">
												Incorporadora
											</a>
										</div>
									</Fade>
								</div>
								<div className='col-12 col-md-10 p-0 info'>
									<Fade>
										<div className='conteudo'>
											<a href="#politica-privacidade" onClick={() => dispatch(Actions.toggle_modal('politica'))}>Políticas de Privacidade</a>
										</div>
									</Fade>
								</div>

								<div className='col-12 col-md-4 p-0 info'>
									<div className='titulo'>Cidades</div>
									<Fade>
										<div className='conteudo'>
											<a onClick={() => clickMenu("ls#pos_vendas")} className={active === "ls#pos_vendas" ? 'active ' : ''}
												href="ls#pos_vendas">
												Piracicaba
											</a>
										</div>
									</Fade>
									<Fade>
										<div className='conteudo'>
											<a onClick={() => clickMenu("ls#pos_vendas")} className={active === "ls#pos_vendas" ? 'active ' : ''}
												href="ls#pos_vendas">
												Rio Claro
											</a>
										</div>
									</Fade>
									<Fade>
										<div className='conteudo'>
											<a onClick={() => clickMenu("ls#pos_vendas")} className={active === "ls#pos_vendas" ? 'active ' : ''}
												href="ls#pos_vendas">
												Americana
											</a>
										</div>
									</Fade>
								</div>
							</div>

							<div className='col-12 col-md-2 p-0 info'>
								<div className='titulo'>Empreendimentos</div>
								<Fade>
									<	div className='conteudo'>
										<a onClick={() => clickMenu("ls#pos_vendas")} className={active === "ls#pos_vendas" ? 'active ' : ''}
											href="ls#pos_vendas">
											Loteamento
										</a>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/barbo/fale_conosco")} href="/barbo/fale_conosco" id="btn-trab">
											Residencial
										</a>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/barbo/fale_conosco")} href="/barbo/fale_conosco" id="btn-trab">
											Corporativo
										</a>
									</div>
								</Fade>
							</div>

							<div className='col-12 col-md-2 p-0 info'>
								<div className='titulo'>Fale Conosco</div>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/barbo/fale_conosco")} href="/barbo/fale_conosco" id="btn-trab">
											Compramos seu Terreno
										</a>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/barbo/fale_conosco")} href="/barbo/fale_conosco" id="btn-trab">
											Sou Vizinho(a) de uma Obra
										</a>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/barbo/fale_conosco")} href="/barbo/fale_conosco" id="btn-trab">
											Fornecedor
										</a>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/barbo/fale_conosco")} href="/barbo/fale_conosco" id="btn-trab">
											Canal de Denúncias ou Sugestões
										</a>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/barbo/fale_conosco")} href="/barbo/fale_conosco" id="btn-trab">Outros Assuntos</a>
									</div>
								</Fade>
							</div>

							<div className='col-12 col-md-2 p-0 info'>
								<div className='titulo'>Central</div>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/barbo")} href="/barbo" id="btn-trab">Perguntas Frequentes</a>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/barbo/portal_corretor")} href="/barbo/portal_corretor" id="btn-trab">Portal do Corretor</a>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/site/trabalhe-conosco")} href="/site/trabalhe-conosco" id="btn-trab">Trabalhe Conosco</a>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/barbo")} href="/barbo" id="btn-trab">Portal do Cliente</a>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/barbo/blog")} href="/barbo/blog" id="btn-trab">Blog</a>
									</div>

								</Fade>
							</div>
						</div>
						<div className='col-12 p-0 line copyright'>
							Desenvolvido por Huma Creativa
						</div>
					</div>
				</div>
			</Content>
		</ScrollableAnchor>
	);
}

export default Footer;
