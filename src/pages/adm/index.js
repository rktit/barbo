import React, {useEffect} from "react";
import Content from "./style";
import Fade from "react-reveal/Fade";
import Enterprise from "./enterprise";
import MenuAdm from "../../container/menuAdm";
import ScrollableAnchor from "react-scrollable-anchor";
import {Alerts} from "../../components";

const AdmPage = () => {

    useEffect(() => {
        
    }, [])

    return (
        <ScrollableAnchor id="">
            <div>
                <Alerts/>
                <MenuAdm/>
                <Fade>
                    <Content className="row col-12 row admin justify-content-between">
                    <Enterprise/>
                    </Content>
                </Fade>
            </div>
        </ScrollableAnchor>
      );
  };
  
  export default AdmPage;