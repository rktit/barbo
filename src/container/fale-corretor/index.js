import React, { useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import { Form, Col, Row, Button, Modal } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import * as Actions from 'store/actions';
import { Services_Emails } from "service";

import logo from "images/logo/logo-portal.png";


function Corretor(props) {

	const _modal = useSelector(({ modal }) => modal.corretor);
	const dispatch = useDispatch();

	const [fields, setFields] = useState({
		input_nome: '',
		input_whats: '',
		input_email: '',
		input_cidade: '',
		input_uf: '',
		input_permissao: '',
		check_validacao: false,
	});

	function handleChange(e) {
		e.preventDefault();
		console.log('e.target', e.target)
		console.log(e.target.name, e.target.value);
		setFields({
			...fields,
			[e.target.name]: e.target.name !== 'arquivo' ? e.target.value : e.target.file
		});
	}

	function handleFile(file) {
		//alert(file);
		setFields({
			...fields,
			arquivo: file,
		});
	}

	function handleCheck() {
		setFields({
			...fields,
			check_validacao: !fields.check_validacao
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();

		if (fields.input_nome.length < 2 ||
			fields.input_email.length < 5 ||
			fields.input_whats < 8 ||
			fields.input_cidade.length < 2 ||
			fields.input_uf.length < 1) {

			dispatch(Actions.open_alert('warning', 'Preencha os campos corretamente'));
			//alert('Preencha os campos corretamente');
			return false;
		}

		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const valid_email = re.test(fields.input_email);

		if (!valid_email) {
			//alert('Insira um e-mail válido');
			dispatch(Actions.open_alert('warning', 'Insira um e-mail válido'));
			return false;
		}

		const data = await new FormData()

		data.append('nome', fields.input_nome);
		data.append('celular', fields.input_whats);
		data.append('email', fields.input_email);
		data.append('uf', fields.input_uf);
		data.append('cidade', fields.input_cidade);
		data.append('permissao', fields.input_permissao);


		dispatch(Actions.toggle_modal('load'));

		const result = await Services_Emails.sendEmail(data, 'true');
		dispatch(Actions.close_modal('load'));
		if (result.error) {
			//alert('Houve um problema, tente novamente!');
			dispatch(Actions.open_alert('danger', 'Erro ao enviar o e-mail, por favor, tente novamente!'));
		} else {
			//alert('SUCESSO!!!!!');
			dispatch(Actions.open_alert('success', 'Proposta enviada com SUCESSO!'));
			setFields({
				input_nome: '',
				input_whats: '',
				input_email: '',
				input_uf: '',
				input_cidade: '',
				input_permissao: '',
			});
		}
	}


	return (
		<ScrollableAnchor id="">
			<Content className="row">
				<Modal
					{...props}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Body className="p-0">

						<div className="boxCatalogo ">
							<div className="formCatalogo">
								<Col className="">
									<img className="logo" src={logo} width="30%" />
								</Col>
									<div className="formTitle">
										Deixe seus dados, e nossa equipe<br />de atendimento entrará em contato:
									</div>
								<Form
									className="form col-12 p-0 col-md-12 p-md-4"
									action='/api/sendOrcamento'
									method="POST"
									enctype="multipart/form-data"
									name='form'
									id={'form'}
								>
									<Form.Group controlId="exampleForm.ControlInput1">
										<Form.Control className="input" value={fields.input_nome} name="input_nome" onChange={handleChange} type="text" placeholder="Nome Completo" />
									</Form.Group>
									<Form.Group controlId="formGridEmail">
										<Form.Control value={fields.input_email} name="input_email" className="input" onChange={handleChange} type="email" placeholder="E-mail" />
									</Form.Group>
									<Form.Row>
										<div class="col-4">
											<Form.Group controlId="formGridWhats">
												<Form.Control value={fields.input_whats} name="input_whats" className="input" onChange={handleChange} type="text" placeholder="DDD" />
											</Form.Group>
										</div>
										<div className="col-8">
											<Form.Group controlId="formGridWhats">
												<Form.Control value={fields.input_whats} name="input_whats" className="input" onChange={handleChange} type="text" placeholder="Telefone" />
											</Form.Group>
										</div>
									</Form.Row>
									<Form.Row>
										<div class="col-4">
											<Form.Group controlId="formGridUF">
												<Form.Control value={fields.input_uf} name="input_uf" className="input" onChange={handleChange} type="text" placeholder="UF" />
											</Form.Group>
										</div>
										<div className="col-8">
											<Form.Group controlId="formGridCidade">
												<Form.Control value={fields.input_cidade} name="input_cidade" className="input" onChange={handleChange} type="text" placeholder="Cidade" />
											</Form.Group>
										</div>
									</Form.Row>

									<Form.Row>
										<Form.Group controlId="row formGridAceite">
											<Form.Control value={fields.input_permissao} name="input_permissao" className="input" onChange={handleChange} type="checkbox" />
										</Form.Group>
										<div className="mx-2 col-10">
											Afirmo que li e que concordo o Termo de Consentimento para Tratamento de Dados Pessoais.
										</div>
									</Form.Row>
									<Form.Group className="boxBtn" as={Row}>
										<Col md={{ span: 10 }}>

											<Button href="" onClick={(handleSubmit) => dispatch(Actions.toggle_modal(''))} className="btnEnviar" type="submit">ENVIAR</Button>
										</Col>
									</Form.Group>
								</Form>
							</div>
						</div>
					</Modal.Body>
				</Modal>
			</Content>
		</ScrollableAnchor>

	);
}

export default Corretor;