import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// import isAuthenticated from './auth'

// Pages
import Home_Page from './pages/home'
import Empreendimentos_Page from './pages/empreendimentos'
import FrontLake from './pages/front_lake'
import Higienopolis from './pages/higienopolis'
import Infinity from './pages/infinity'
import LasRocas from './pages/las_rocas'
import MoradaPorto from './pages/morada_porto'
import OfficeTower from './pages/office_tower'
import QuintaVale from './pages/quinta_vale'
import VillaReal from './pages/villa_real'
import QuemSomos_Page from './pages/quem_somos'
import Blog_Page from './pages/blog'
import FaleConosco_Page from './pages/fale_conosco'
import PortalCorretor_Page from './pages/portal_corretor'
import Blog_Interna from './pages/blog_interna'
import WorkWithUs from './pages/work_with_us'
import Error_Page_404 from './pages/error/404'

// Validation Routes per User
// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={props =>
//             isAuthenticated() ? (
//                 <Component {...props} />
//             ) : (
//                     <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//                 )
//         }
//     />
// )

// Call Routes and validate what user can see
const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route path='/barbo/fale_conosco' component={FaleConosco_Page} />
            <Route path='/barbo/portal_corretor' component={PortalCorretor_Page} />
            <Route path='/barbo/blog_interna' component={Blog_Interna} />
           <Route path='/barbo/blog' component={Blog_Page} />*/}
            {/* <Route path='/barbo/front_lake' component={FrontLake} />
            <Route path='/barbo/higienopolis' component={Higienopolis} />
            <Route path='/barbo/infinity' component={Infinity} />
            <Route path='/barbo/las_rocas' component={LasRocas} />
            <Route path='/barbo/morada_porto' component={MoradaPorto} />
            <Route path='/barbo/office_tower' component={OfficeTower} />
            <Route path='/barbo/quinta_vale' component={QuintaVale} />
            <Route path='/barbo/villa_real' component={VillaReal} /> */}

            <Route path='/barbo/empreendimentos' component={Empreendimentos_Page} />
            {/* <Route path='/barbo/quem_somos' component={QuemSomos_Page} /> 
              <Route path='/' component={Home_Page} />

          <Route path='/trabalhe-conosco' component={WorkWithUs} />   */}
        </Switch>
    </BrowserRouter>
)

export default Routes


