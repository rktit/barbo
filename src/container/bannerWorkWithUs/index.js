import React from "react";
import {Content} from "./style";

import { Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import banner_trabalheConosco from "images/banner/BannerTrabalheConosco.jpg";
import background_trabalheConosco from "images/background/BackgroundBanner.jpg";
import ScrollableAnchor from "react-scrollable-anchor";

function BannerWorkWithUs() {
    return (
        <ScrollableAnchor id="trabalhe-conosco">
            <Content className="contentItens col-12 p-0">
                <div className="col-md-8 textos">
                    <div>Somos a Barbo Empreendimentos!</div>
                    <div><strong>Vamos levar o AGRO <br />ainda mais adiante?</strong></div>
                </div>            
            </Content>
        </ScrollableAnchor>
        
    );
}

export default BannerWorkWithUs;
