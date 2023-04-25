import React, { useEffect, useState } from "react";
import Content from "../style";
import { Divider } from "semantic-ui-react";
import { Modal, Button, Form, Row } from "react-bootstrap";
import Select from "react-select";

import * as Service from "../../../service/adm.service";

//import {System_Service} from "service";

import * as Fa from "react-icons/fa";

const Enterprise = () => {
  const [allEnterprise, setEnterprise] = useState(null);
  const [selected, setSelected] = useState(null);

  const [show, setShow] = useState(false);
  const [modalImg, setmodalImg] = useState(false);

  const [id, setId] = useState("");

  const [name, setName] = useState("");
  const [nameResume, setNameResume] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionResume, setDescriptionResume] = useState("");
  const [details, setDetails] = useState("");
  const [type, setType] = useState("");
  const [suite, setSuite] = useState("");
  const [privateArea, setPrivateArea] = useState("");
  const [dorms, setDorms] = useState("");
  const [parkingSpaces, setParkingSpace] = useState("");
  const [city, setCity] = useState("");
  const [localization, setLocalization] = useState("");
  const [main, setMain] = useState("");
  const [link, setLink] = useState("");

  const [file, setfile] = useState(null);
  const [fileCategory, setFileCategory] = useState(0);
  const [fileMain, setFileMain] = useState(false);

  let imagemNotFound = require("../../../images/notFound.jpg");

  const imageType = [
    { value: "0", label: "Sem categoria" },
    { value: "1", label: "Área comum" },
    { value: "2", label: "Decorado" },
    { value: "3", label: "Aérea" },
    { value: "4", label: "Planta" },
  ];

  useEffect(() => {
    getEnterprise();
  }, []);

  const getEnterprise = async () => {
    const result = await Service.getAllEnterprises();
    console.log("🚀 ~ file: index.js:25 ~ getEnterprise ~ result", result);
    setEnterprise(result.data);
  };

  function getThumbnail(item) {
    const getImage = item.images.filter((img) => img.status === 1);
    const result = getImage.length > 0 ? getImage[0].link : 0;
    return result;
  }

  function loadImage(link) {
    let imagem = require("../../../images/notFound.jpg");
    return imagem;
  }

  function handleChange(e) {
    setName();
    setNameResume();
    setDescription();
    setDescriptionResume();
    setDetails();
    setType();
    setSuite();
    setPrivateArea();
    setDorms();
    setParkingSpace();
    setCity();
    setLocalization();
    setMain();
    setLink();
  }

  const handleSubmit = async (e) => {
    console.log("===🚀===", e.target.value);
    // if(id !== ""){
    //   const data = {
    //     name: Form.name.value
    //     // "name_resume": "",
    //     // "type": ,
    //     // "resume": ,
    //     // "description": ,
    //     // "details": ,
    //     // "suite": ,
    //     // "private_area": ,
    //     // "dorms": ,
    //     // "parking_spaces": ,
    //     // "localization":
    // }
    //   //const result = await Service.updateEnterprise(id, data);
    //   console.log("🚀 ~ file: index.js:28 ~ handleSubmit ~ result", data);
    //   resetFields();

    //   //alert("Empresa alterada com sucesso!");
    // }else{

    //   const data = {
    //     name: Form.enterpriseName.value
    //     // "name_resume": "",
    //     // "type": ,
    //     // "resume": ,
    //     // "description": ,
    //     // "details": ,
    //     // "suite": ,
    //     // "private_area": ,
    //     // "dorms": ,
    //     // "parking_spaces": ,
    //     // "localization":
    // }
    //   //const result = await Service.createEnterprise(data);
    //   console.log("🚀 ~ file: index.js:28 ~ handleSubmit ~ result", data);
    //   //alert("Empresa cadastrada com sucesso!");
    //   //resetFields();
    // }
  };

  const editEnterprise = async (id) => {
    const result = await Service.getEnterpriseForId(id);

    setId(id);
    setName(result.enterprise.name);
    setNameResume(result.enterprise.name_resume);
    setDescription(result.enterprise.description);
    setDescriptionResume(result.enterprise.resume);
    setDetails(result.enterprise.details);
    setType(result.enterprise.type);
    setSuite(result.enterprise.suite);
    setPrivateArea(result.enterprise.private_area);
    setDorms(result.enterprise.dorms);
    setParkingSpace(result.enterprise.parking_space);
    setCity(result.enterprise.city);
    setLocalization(result.enterprise.localization);
    setMain(result.enterprise.main);
    setLink(result.enterprise.link);
  };

  const modalImages = async (id) => {
    const result = await Service.getEnterpriseForId(id);
    setSelected(result);
    console.log("🚀 ~ file: index.js:130 ~ modalImages ~ result:", result);
    setmodalImg(true);
  };

  const closeModalImages = async () => {
    setmodalImg(false);
    setSelected(null);
  };

  const handleClose = () => {
    setId("");
    setShow(false);
  };
  const handleShow = (id) => {
    console.log("Show " + id);
    setId(id);
    setShow(true);
  };

  const handleFile = (e) => {
    setfile(e.target.files[0]);
    console.log("File " + e)
  }

  const deleteEnterprise = async (id) => {
    console.log("deleteEnterprise", id);
    //const result = await Service.deleteEnterprise(id);
    //console.log("🚀 ~ file: index.js:28 ~ deleteEnterprise ~ result", result);

    resetFields();
    await handleClose();
    getEnterprise();
    alert("Empresa excluída com sucesso!");
  };

  const resetFields = () => {
    setName("name");
    setNameResume("");
    setDescription("");
    setDescriptionResume("");
    setDetails("");
    setType("");
    setSuite("");
    setPrivateArea("");
    setDorms("");
    setParkingSpace("");
    setCity("");
    setLocalization("");
    setMain("");
    setLink("");
    setId("");
  };

  return (
    <Content className="row col-12 row admin justify-content-between">
      <div className=" bg-white rounded col-6">
        <div className="col-9">
          <h4>Empreendimentos Cadastrados</h4>
          {allEnterprise && allEnterprise.length != null ? (
            allEnterprise.map((item, index) => {
              console.log("Item", item)
              return (
                <div
                  className="row justify-content-between register p-3"
                  key={index}
                >
                  <div className="mt-2 col-20">
                  
                  <bold>{item.enterprise.name}</bold>
                  </div>
                  <div className="row col-auto align-items-start">
                    <Button
                      className="btn-dark "
                      type="button"
                      onClick={() => editEnterprise(item.enterprise.id)}
                    >
                      <Fa.FaEdit size={18} color="#FFF" />
                    </Button>
                    <Button
                      className="btn-dark ml-2"
                      type="button"
                      onClick={() => modalImages(item.enterprise.id)}
                    >
                      <Fa.FaRegImage size={18} color="#FFF" />
                    </Button>
                    <Button
                      className="btn-danger ml-2"
                      type="button"
                      onClick={() => handleShow(item.enterprise.id)}
                    >
                      <Fa.FaTimes size={18} color="#FFF" />
                    </Button>
                    <Divider/>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Não Possui Empreendimentos Cadastrados</div>
          )}
        </div>
      </div>

      <div className="shadow bg-white rounded col-6">
        <Form className="form col-12 p-0 p-md-4" onSubmit={handleSubmit}>
          <h4>Novo Empreendimento</h4>
          <Form.Group controlId="form">
            {"Nome do Empreendimento (Completo)"}
            <Form.Control
              className="input"
              value={name}
              name="enterpriseName"
              onChange={handleChange}
              type="text"
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="form">
            {"Nome do Empreendimento (Resumido)"}
            <Form.Control
              value={nameResume}
              name="enterpriseNameResume"
              className="input"
              onChange={handleChange}
              type="text"
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="form">
            {"Descrição (Resumido)"}
            <Form.Control
              value={descriptionResume}
              name="descriptionResume"
              className="input"
              onChange={handleChange}
              type="text"
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="form">
            {"Descrição (Completa)"}
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              name="description"
              className="input"
              onChange={handleChange}
              type="text"
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="form">
            {"Detalhes (Itens devem ser divididos por virgula ',')"}
            <Form.Control
              as="textarea"
              rows={3}
              value={details}
              name="details"
              className="input"
              onChange={handleChange}
              type="text"
              placeholder=""
              required
            />
          </Form.Group>
          <div className="d-flex align-content-start flex-wrap">
            <Form.Row>
              <div class="col-12 col-md-5">
                <Form.Group controlId="form">
                  {"Tipo"}
                  <Form.Control
                    value={type}
                    name="type"
                    className="input"
                    onChange={handleChange}
                    type="text"
                    placeholder=""
                    required
                  />
                </Form.Group>
              </div>
              <div class="col-12 col-md-3 row align-items-start">
                <Form.Group controlId="form">
                  {"Suites"}
                  <Form.Control
                    value={suite}
                    name="suite"
                    className="input"
                    onChange={handleChange}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </div>
              <div class="col-12 col-md-3 row align-items-start">
                <Form.Group controlId="form">
                  {"Area privativa"}
                  <Form.Control
                    value={privateArea}
                    name="private_area"
                    className="input"
                    onChange={handleChange}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </div>
              <div class="col-12 col-md-3 row align-items-start">
                <Form.Group controlId="form">
                  {"Dormitórios"}
                  <Form.Control
                    value={dorms}
                    name="dorms"
                    className="input"
                    onChange={handleChange}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </div>
              <div class="col-12 col-md-3 row align-items-start">
                <Form.Group controlId="form">
                  {"Vagas de garagem"}
                  <Form.Control
                    value={parkingSpaces}
                    name="parking_space"
                    className="input"
                    onChange={handleChange}
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </div>
              <div class="col-12 col-md-3 row align-items-start">
                <Form.Group controlId="form">
                  {"Cidade"}
                  <Form.Control
                    value={city}
                    name="city"
                    className="input"
                    onChange={handleChange}
                    type="text"
                    placeholder=""
                    required
                  />
                </Form.Group>
              </div>
            </Form.Row>
          </div>
          <Form.Group controlId="form">
            {"Localização"}
            <Form.Control
              value={localization}
              name="localization"
              className="input"
              onChange={handleChange}
              type="text"
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Group controlId="form">
            {"Link"}
            <Form.Control
              value={link}
              name="localization"
              className="input"
              onChange={handleChange}
              type="text"
              placeholder=""
              required
            />
          </Form.Group>
          <Form.Check
            inline
            label="Exibir no Banner"
            name="main"
            type={'checkbox'}
            checked={main}
          />
          <Form.Group className="boxBotao mt-5" as={Row}>
            <Button className="btn-dark" type="submit" onClick={handleSubmit}>
              {id !== "" ? <strong>SALVAR</strong> : <strong>ADICIONAR</strong>}
            </Button>

            <Button
              className="btn-secondary ml-3"
              type="button"
              onClick={resetFields}
            >
              <strong>CANCELAR</strong>
            </Button>
          </Form.Group>
        </Form>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseja realmente excluir o empreendimento ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => deleteEnterprise(id)}>
            Sim
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Não
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalImg} onHide={closeModalImages}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selected && selected.enterprise && selected.enterprise.name
              ? selected.enterprise.name_resume
              : "Imagens"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.File
            id="arquivo"
            name="arquivo"
            label="Selecionar nova Imagem"
            data-browse="▼"
            className="inputFile"
            onChange={e => handleFile(e.target.files)}
            custom
          />
          <Form.Group controlId="formImage">
            <div className="mt-2 col-20">
              <Select options={imageType} value={0} label={`Categoria`} />
            </div>
            <div className="mt-2 col-20">
              <Form.Check
                type="checkbox"
                label={`Principal`}
                id={`disabled-default`}
                checked={false}
              />
            </div>
          </Form.Group>
          <div className="d-flex bd-highlight mb-3">
            <div className="mr-auto p-2 bd-highlight mt-2">
              <strong>Imagem carregada:</strong>
            </div>
            <div className="p-2 bd-highlight">
              <Button
                className="btn-info mt-2"
                type="button"
                onClick={() => {
                  //setDataModal([{image: fields.images}])
                  //setModalShow(true)
                }}
              >
                Enviar
              </Button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {selected && selected.images && selected.images.length != null ? (
            selected.images.map((item, index) => {
              console.log(
                "🚀 ~ file: index.js:448 ~ selected.images.map ~ item:",
                item
              );
              return (
                <div className="d-flex align-items-start mr-5" key={index}>
                  <div className="ml-2 mt-0 col-20">
                    <img src={imagemNotFound} alt="Thumbnail" />
                  </div>

                  <div className="row col-auto align-items-start mt-3">
                    <Form.Group controlId="formImage">
                    {imageType[item.type].label}
                      <div className="mt-2 col-20">
                        {item.status === 1 ? <strong>Principal</strong> : ""}
                      </div>
                    </Form.Group>
                    <Button
                      className="btn-danger ml-4"
                      type="button"
                      //onClick={() => handleShow(item.enterprise[0].id)}
                    >
                      <Fa.FaTimes size={18} color="#FFF" />
                    </Button>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Não Possui Imagens</div>
          )}
        </Modal.Footer>
      </Modal>
    </Content>
  );
};

export default Enterprise;
