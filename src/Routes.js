import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// import isAuthenticated from './auth'

// Pages
import Home_Page from './pages/home'
import Empreendimentos_Page from './pages/empreendimentos'
import QuemSomos_Page from './pages/quem_somos'
import Blog_Page from './pages/blog'
import FaleConosco_Page from './pages/fale_conosco'
import PortalCorretor_Page from './pages/portal_corretor'
import Contatos_Page from './pages/contatos'
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
            {/* <Route path='/barbo/empreendimentos' component={Empreendimentos_Page} /> 
             <Route path='/barbo/quem_somos' component={QuemSomos_Page} />*/}
            {/*<Route path='/barbo/blog' component={Blog_Page} />
            <Route path='/barbo/fale_conosco' component={FaleConosco_Page} />
            <Route path='/barbo/portal_corretor' component={PortalCorretor_Page} />*/}
            <Route path='/barbo/contatos' component={Contatos_Page} />  
           {/* <Route path='/trabalhe-conosco' component={WorkWithUs} /> 
            <Route path='/' component={Home_Page} />*/}
        </Switch>
    </BrowserRouter>
)

export default Routes


