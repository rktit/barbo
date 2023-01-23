import React, {useState} from 'react';

import {Button, Modal, Spinner} from 'react-bootstrap'

import {useDispatch, useSelector} from "react-redux";
import * as Actions from 'store/actions';

export default function ModalPage() {
		
		const _modal = useSelector(({modal}) => modal.load);
		const dispatch = useDispatch()
		
		return (
				<>
						<Modal
								show={_modal}
								size="sm"
								onHide={() => dispatch(Actions.close_modal('load'))}
								backdrop="static"
								keyboard={false}
								centered
						>
								<Modal.Header className="topo-modal">
										<Modal.Title className='row col-12 justify-content-center'>AGUARDE!</Modal.Title>
								</Modal.Header>
								<Modal.Body>
										<div className='row col-12 justify-content-center'>
										<Spinner animation="border" role="status">
												<span className="sr-only">Loading...</span>
										</Spinner>
										</div>
								</Modal.Body>
						</Modal>
				</>
		);
}
