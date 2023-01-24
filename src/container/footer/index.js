import React, { useEffect, useState } from "react";
import Content from "./style";

import { useDispatch } from "react-redux";
import * as Actions from 'store/actions';

import Fade from "react-reveal/Fade";
import ScrollableAnchor from "react-scrollable-anchor";

import ico_insta from 'images/icons/icon_instagram.png';
import ico_face from 'images/icons/icon_facebook.png';
import ico_youtube from 'images/icons/icon_youtube.png';
import logo_jacto from 'images/logo/logo-jacto.png';

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
				<div className='box col-12 p-0'>
					<div className='col-10 offset-1 p-0 content'>
						<div className="col-12 row p-0 text-white">
							<Fade left>
								<div className="logo-footer col-12 col-md-4 p-0">
									<a href='#sobre'><img src={logo_jacto} className="logo" /></a>
									<div className="nome-logo">Terrazul Tratores</div>
								</div>
							</Fade>
							<div className='col-12 col-md-3 p-0 info'>
								<div className='titulo'>Setores</div>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("jacto#pos_vendas")} className={active === "jacto#pos_vendas" ? 'active ' : ''}
											href="jacto#pos_vendas">
											Pós-Venda
										</a>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("jacto#pecas")} className={active === "jacto#pecas" ? 'active ' : ''}
											href="jacto#pecas">
											Peças
										</a>
									</div>
								</Fade>
								{/* <Fade>
									<div className='conteudo'><a href='#modalidades'>Assistência técnica</a></div>
								</Fade> */}
								<Fade>
									<div className='conteudo'>
										<a href="#politica-privacidade" onClick={() => dispatch(Actions.toggle_modal('politica'))}>Políticas de Privacidade</a>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo'>
										<a onClick={() => clickMenu("/site/trabalhe-conosco")} href="/site/trabalhe-conosco" id="btn-trab">Trabalhe Conosco</a>
									</div>
								</Fade>
							</div>
							<div className='col-12 col-md-4 p-0 info'>
								<div className='titulo'>Contato Matriz</div>
								<Fade>
									<div className='conteudo col-12 p-0 row infos'>

										<div className='col-11 p-0 text-left'>
											<a target="_blank" href='https://www.google.com/maps/place/Lass+M%C3%A1quinas+www.lojalass.com.br/@-23.0004794,-47.71865,15z/data=!4m5!3m4!1s0x0:0xd5489ef0fe597e29!8m2!3d-23.0004794!4d-47.71865'>
												Rua Luís Florian, 101 - Distrito<br /> Industrial - Rod. Cornélio Pires (SP-127)<br />- Km 69 Tietê / SP
											</a>
										</div>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo col-12 p-0 row infos'>
										<div className='col-11 p-0 text-left'>
											(15) 3389-1029
										</div>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo col-12 p-0 row infos'>
										<div className='col-11 p-0 text-left'><a
											href='mailto: contato@terrazultratores.com.br'>contato@terrazultratores.com.br</a>
										</div>
									</div>
								</Fade>
								<Fade>
									<div className='conteudo col-12 p-0 row infos'>
										<div className='titulo'>Contato Filiais</div>
										<div className='col-11 p-0 text-left'>
											<div className='col-12 p-0'>Terrazul Piraju (14) 3351.6046</div>
											<div className='col-12 p-0'>Terrazul Itapetininga (15) 99783.1666</div>
										</div>
									</div></Fade>
							</div>
							<div className='icones col-12 col-md-1 p-0 info'>
								<div className='col-8 col-md-12 p-0 row'>
									<Fade right><div className='conteudo col-4 col-md-12'><a href='https://www.instagram.com/terrazultratores/' target="_blank"><img src={ico_insta} alt='Instagram' className='icone_midia' /></a></div></Fade>
									<Fade right><div className='conteudo col-4 col-md-12'><a href='https://pt-br.facebook.com/terrazultratores/' target="_blank"><img src={ico_face} alt='Facebook' className='icone_midia' /></a></div></Fade>
									<Fade right><div className='conteudo col-4 col-md-12'><a href='https://www.youtube.com/user/JactoAgricola' target="_blank"><img src={ico_youtube} alt='YouTube' className='icone_midia' /></a></div></Fade>
								</div>
							</div>
						</div>
						<div className='col-10 p-0 copyright'>
							2021 - Todos os Direitos Reservados | Desenvolvido por ÉPICA CREATIVE
						</div>
					</div>
				</div>
			</Content>
		</ScrollableAnchor>
	);
}

export default Footer;
