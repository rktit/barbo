import React, { useEffect, useState } from "react";
import Content from "./style";

import { useDispatch } from "react-redux";
import * as Actions from 'store/actions';

import Fade from "react-reveal/Fade";
import ScrollableAnchor from "react-scrollable-anchor";

import ico_insta from 'images/icons/icon_instagram.png';
import ico_face from 'images/icons/icon_facebook.png';
import ico_youtube from 'images/icons/icon_youtube.png';
import logo from 'images/logo/logo-ls.png';

let limit_scroll = 450;
let limit_scroll_header = 250;


function FooterLs(props) {
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
				<div className='box col-10 p-0'>
					<div className='offset-1 p-0 content'>
						<div className="row p-0 text-white">
							<Fade left>
								<div className="col-4">
									<div className="logo-footer">
										<a href='#sobre'><img src={logo} className="logo" /></a>
									</div>
									<div className="conteudo pt-3 pb-4">
										<span className="texto">
											<strong>Barbo Rio Claro Empreendimentos Ltda</strong><br />
											Rua 09 Cj, 500, Cidade Jardim<br />
											Rio Claro | SP | Cep: 13501-100 <br />
										</span>
									</div>
									<div className='texto'>
										<a target="_blank" href='https://www.google.com/maps/place/Lass+M%C3%A1quinas+www.lojalass.com.br/@-23.0004794,-47.71865,15z/data=!4m5!3m4!1s0x0:0xd5489ef0fe597e29!8m2!3d-23.0004794!4d-47.71865'>
											Como chegar
										</a>
									</div>
									<div className='texto pt-4 row infos'>
										<a target="_blank" href="https://api.whatsapp.com/send?phone=5519996965525&text=Gostaria de falar com um consultor?">
											<strong>Whatsapp</strong>: +55 (19) 9.9696-5525
										</a>
									</div>
									<div className='texto p-0 row infos'>
										<div className='col-11 p-0'>
											+55(19) 3597-5552 / 3597-5553
										</div>
									</div>
									<div className='texto col-12 p-0 row infos'>
										<div className='col-11 p-0'><a
											href='mailto: contato@barbo.com.br'>contato@barbo.com.br</a>
										</div>
									</div>
									<div className='d-flex'>
										<div className='d-flex grid'>
											<Fade right><div className='conteudo col-4'><a href='https://www.instagram.com/barbo/' target="_blank"><img src={ico_insta} alt='Instagram' className='icone_midia' /></a></div></Fade>
											<Fade right><div className='conteudo col-4'><a href='https://pt-br.facebook.com/barbo/' target="_blank"><img src={ico_face} alt='Facebook' className='icone_midia' /></a></div></Fade>
											<Fade right><div className='conteudo col-4'><a href='https://www.youtube.com/channel/UCZBSlIsy4JyqkdrdG8cPRaw' target="_blank"><img src={ico_youtube} alt='YouTube' className='icone_midia' /></a></div></Fade>
										</div>
									</div>
								</div>
							</Fade>
							<div className='col-4 p-0 info'>
								<Fade>
									<div className='titulo'>Quem somos</div>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/sobre")} className={active === "/sobre" ? 'active ' : ''}
											href="/sobre">
											Incorporadora
										</a>
									</div>
								</Fade>
								<Fade>
									<div className='titulo'>Cidades</div>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/empreendimentos")} href="/empreendimentos" id="btn-trab">Piracicaba</a>
									</div>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/empreendimentos")} href="/empreendimentos" id="btn-trab">Rio Claro</a>
									</div>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/empreendimentos")} href="/empreendimentos" id="btn-trab">Americana</a>
									</div>
								</Fade>
							</div>
							<div className='col-4 p-0 info'>
								<Fade>
									<div className='titulo'>Empreendimentos</div>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/trabalhe-conosco")} href="/trabalhe-conosco" id="btn-trab">Lançamentos</a>
									</div>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/trabalhe-conosco")} href="/trabalhe-conosco" id="btn-trab">Em Obras</a>
									</div>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/trabalhe-conosco")} href="/trabalhe-conosco" id="btn-trab">Fase Final de Obras</a>
									</div>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/trabalhe-conosco")} href="/trabalhe-conosco" id="btn-trab">Prontos para Morar</a>
									</div>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/trabalhe-conosco")} href="/trabalhe-conosco" id="btn-trab">Breve Lançamentos</a>
									</div>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/trabalhe-conosco")} href="/trabalhe-conosco" id="btn-trab">Outros Lançamentos</a>
									</div>
								</Fade>
							</div>
							<div className="flex line"></div>
							<div className='col-10 py-4 copyright'>
								Desenvolvido por ÉPICA CREATIVE + Rocket IT
							</div>
						</div>
					</div>
				</div>
			</Content>
		</ScrollableAnchor>
	);
}

export default FooterLs;
