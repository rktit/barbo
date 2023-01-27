import React from "react";
import Content from "./style";

function BannerHome() {

    return (
        <Content className="col-12 row">
            <div className="welcome col-3 offset-1">
                <div className="box-texto">
                    <div className="title">Nome do </div>
                    <div className="title1">Empreendimento</div>
                    <p className="text">
                        São Paulo | Vila Mariano <br />
                        Área privativa de 253 m² <br />
                        2 suítes
                    </p>
                    <a href="/barbo/empreendimentos" className="btn1 shadow mb-4 d-flex align-items-center justify-content-center">
                        Ver mais
                    </a>
                </div>
            </div>
        </Content>
    );
}

export default BannerHome;
