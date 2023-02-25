import React, { useState } from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import { Form, Col, Row, Button, Modal } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import * as Actions from 'store/actions';
import { Services_Emails } from "service";

import logo from "images/logo/logo-portal.png";


function Financiamento(props) {

	const _modal = useSelector(({ modal }) => modal.financiamento);
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
		data.append('sobrenome', fields.input_sobrenome);
		data.append('email', fields.input_email);
		data.append('celular', fields.input_whats);
		data.append('entrada', fields.input_entrada);
		data.append('garantia', fields.input_garantia);
		data.append('renda', fields.input_renda);



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
				input_sobrenome: '',
				input_email: '',
				input_whats: '',
				input_entrada: '',
				input_garantia: '',
				input_renda: '',
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
									Faça a sua simulação
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
										<Form.Control className="input" value={fields.input_nome} name="input_nome" onChange={handleChange} type="text" placeholder="Nome: " />
									</Form.Group>

									<Form.Group controlId="exampleForm.ControlInput1">
										<Form.Control className="input" value={fields.input_sobrenome} name="input_sobrenome" onChange={handleChange} type="text" placeholder="Sobrenome:" />
									</Form.Group>

									<Form.Group controlId="formGridEmail">
										<Form.Control value={fields.input_email} name="input_email" className="input" onChange={handleChange} type="email" placeholder="E-mail:" />
									</Form.Group>

									<Form.Group controlId="formGridWhats">
										<Form.Control value={fields.input_whats} name="input_whats" className="input" onChange={handleChange} type="text" placeholder="Telefone:" />
									</Form.Group>

									<Form.Group controlId="formGridEntrada">
										<Form.Control value={fields.input_entrada} name="input_entrada" className="input" onChange={handleChange} type="text" placeholder="Valor de entrada:" />
									</Form.Group>

									<Form.Group controlId="formGridGarantia">
										<Form.Control value={fields.input_garantia} name="input_garantia" className="input" onChange={handleChange} type="text" placeholder="Valor de fundo de garantia:" />
									</Form.Group>

									<Form.Group controlId="formGridRenda">
										<Form.Control value={fields.input_renda} name="input_renda" className="input" onChange={handleChange} type="text" placeholder="Renda mensal:" />
									</Form.Group>

									<Form.Group className="boxBtn" as={Row}>
										<Col md={{ span: 10 }}>
											<div className="filtro__item">
												<label for="form-search-filter-phase" className="filtro__label form-label"></label>
												<select name="fase" id="form-search-filter-phase" className="filtro__select form-select form-search-filter-phase">
													<option value="">
														Selecione o empreendimento desejado:
													</option>
													<option value="residencial">Las Rocas</option>
													<option value="residencial">Higienópolis</option>
													<option value="residencial">Front Lake</option>
													<option value="residencial">infinity</option>
													<option value="corporativo">Office Tower</option>
													<option value="residencial">Villa Real</option>
													<option value="residencial">Morada do Porto</option>
													<option value="loteamento">Quinta do Vale</option>
												</select>
											</div>
											<Button href="" onClick={(handleSubmit) => dispatch(Actions.toggle_modal(''))} className="btnEnviar mt-2" type="submit">
												ENVIAR
											</Button>
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

export default Financiamento;
