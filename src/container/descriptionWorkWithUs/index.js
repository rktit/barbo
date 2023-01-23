import React from "react";
import Content from "./style";
import Fade from "react-reveal/Fade";

import ScrollableAnchor from "react-scrollable-anchor";

function DescriptionWorkWithUs() {
    return (
        <ScrollableAnchor id="">
            <Fade top>
                <Content className="col-12 row">
                    <div className="textos col-10 col-md-7">
                        <span>Na nossa cultura de trabalho, temos como essência a valorização e cooperação com a nossa gente. Acreditamos que ao se dedicar aos nossos colaboradores, conseguimos trazer ainda mais qualidade aos dias do nosso negócio, que refletem aos nossos produtos.</span><br/><br/>
                        <span>Se você chegou até aqui, com toda certeza a nossa empresa chamou sua atenção, e agora chegou a nossa vez de te conhecer.</span><br/><br/>
                        <span>Preencha o formulário abaixo com seus dados e aguarde o retorno de nossa equipe de Recursos Humanos:</span>
                    </div>
                </Content>
            </Fade>
            
        </ScrollableAnchor>
    );
}

export default DescriptionWorkWithUs;
