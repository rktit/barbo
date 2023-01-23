import React, {useEffect} from 'react';

import Content from './style';

import {useDispatch, useSelector} from "react-redux";
import * as Actions from 'store/actions';

import * as Icon from 'react-bootstrap-icons'
import * as Cookies from 'utils/cookies'

export default function FlashMessageCookies() {
		
		const flash_message = useSelector(({modal}) => modal.cookies);
		const dispatch = useDispatch()
		
		useEffect(() => {
				// localStorage.clear();
				loadCookies();
		}, [])
		
		const loadCookies = () => {
				const lgpd_cookies = localStorage.getItem('lgpd_cookies');
				if (lgpd_cookies && lgpd_cookies === 'true') {
						dispatch(Actions.close_modal('cookies'));
				}
		}
		
		const closeFlashMessage = (e) => {
				dispatch(Actions.close_modal('cookies'));
				localStorage.setItem('lgpd_cookies', 'true');
		}
		
		return flash_message && <Content className='col-10 text-center'>
				<div>
						<Icon.InfoCircle color='#FFFFFF' size={36} className='mr-3 d-none d-md-block'/>
				</div>
				<div>
						A <strong>Terrazul</strong> utiliza cookies e guarda estatísticas de visitas para melhorar sua
						experiência de navegação, de acordo com a nossa <a href="#politica-privacidade" onClick={() => dispatch(Actions.toggle_modal('politica'))}>Política de Privacidade</a>,
						e ao continuar
						navegando, você concorda com estas condições.
				</div>
				<div className='align-items-stretch'>
						<button onClick={closeFlashMessage} className='ml-3 h-100'>Continuar</button>
				</div>
		</Content>
}
