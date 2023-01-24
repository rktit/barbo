import React, {useState, useEffect} from "react";
import Content from "./style";
import ScrollableAnchor from "react-scrollable-anchor";

import Zoom from "react-reveal/Zoom";

import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

import descricao1 from "images/quem_somos/descricao1.png";
import descricao2 from "images/quem_somos/descricao2.png";
import descricao3 from "images/quem_somos/descricao3.png";
import descricao4 from "images/quem_somos/descricao4.png";


function Descricao() {
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth >= 992) {
                setMobile(false);
        } else {
                setMobile(true);
        }
    }, [window.innerWidth]);

return (
    <ScrollableAnchor id="terrazul">
        <Content>
            { isMobile ?  
                <Splide className=" col-12" options={{
                    rewind: true,
                    width: "100%",
                    gap: '1.5rem',
                    perPage: 1,
                    pagination: false
                }}>
                    <SplideSlide >
                        <div className="icones">
                            <img className="image" src={descricao1}/>
                            <span style={{marginTop:"5px"}}>127<br/>apartamentos</span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>  
                        <div className="icones">
                            <img className="image" src={descricao2}/>
                            <span style={{marginTop:"5px"}}>243<br/>Lançamentos<br/>2023</span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="icones">
                            <img className="image" src={descricao3}/>
                            <span style={{marginTop:"5px"}}>185<br/>Empreend.<br/>Em obras</span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>  
                        <div className="icones">
                            <img className="image" src={descricao4}/>
                            <span style={{marginTop:"5px"}}>225<br/>Entregues</span>
                        </div>
                    </SplideSlide>
                </Splide>
            
            :
                <div className="col-10 offset-sm-1">
                    <div className="medalhas row col-12">
                        <Zoom>
                            <div className="icones col-3">
                                <img className="image" src={descricao1}/>
                                <span style={{marginTop:"5px"}}>127<br/>apartamentos</span>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="icones col-3">
                                <img className="image" src={descricao2}/>
                                <span style={{marginTop:"5px"}}>243<br/>Lançamentos<br/>2023</span>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="icones col-3">
                                <img className="image" src={descricao3}/>
                                <span style={{marginTop:"5px"}}>185<br/>Empreend.<br/>Em obras</span>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className="icones col-3">
                                <img className="image" src={descricao4}/>
                                <span style={{marginTop:"5px"}}>225<br/>Entregues</span>
                            </div>
                        </Zoom>
                    </div>
                </div>
            }

        </Content>
    </ScrollableAnchor>
);
}

export default Descricao;
