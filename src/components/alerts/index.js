import React, {useEffect} from 'react';

import {Alert} from 'react-bootstrap';

import {useDispatch, useSelector} from "react-redux";
import * as Actions from 'store/actions';

import Fade from 'react-reveal';

let timerClose = null;

export default function Alerts() {
		const _modal = useSelector(({modal}) => modal.alert);
		const dispatch = useDispatch()
		
		useEffect(() => {
				if (_modal.show) {
						console.log('_modal', _modal);
						closeModal();
				}
		}, [_modal])
		
		function closeModal(now = false) {
				clearTimeout(timerClose);
				if (!now) {
						timerClose = setTimeout(() =>
										dispatch(Actions.close_alert())
								, 5000)
				} else {
						dispatch(Actions.close_alert());
				}
		}
		
		return (<div className="modal-alert row col-12 justify-content-center">
				{_modal.show &&
				<Fade bottom>
						<Alert variant={_modal.type} onClose={() => closeModal(true)}
						       dismissible>
								{_modal.text}
						</Alert>
				</Fade>
				}
		</div>);
}