import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Cadastro from './containers/Cadastro/Cadastro'
import Login from './containers/Login/Login'
import Autenticacao from './containers/Autenticacao/Autenticacao'
import Dashboard from './containers/Dashboard/Dashboard'
//import Teste from './components/teste/teste'
import SelecionarTecnico from './containers/SelecionarTecnico/SelecionarTecnico'
import CadastrarPropriedade from './containers/CadastrarPropriedade/CadastrarPropriedade'
import Logout from './containers/Logout/Logout'
import CadastrarInfoPropriedade from './containers/CadastrarInfoPropriedade/CadastrarInfoPropriedade'
import InfoPropriedade from './containers/InfoPropriedade.js/InfoPropriedade'
import PropriedadesCadastradas from './containers/PropriedadesCadastradas.js/PropriedadesCadastradas'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/cadastro" component={Cadastro} />
      <Route exact path="/auth/:token" component={Autenticacao} />
      <Route path="/menu" component={Dashboard} />
      <Route exact path="/menu" component={PropriedadesCadastradas} />
      <Route exact path="/menu/cadastrar-propriedade/cadastrar-proprietario" component={Cadastro} />
      <Route
        exact
        path="/menu/cadastrar-propriedade/:id_proprietario/selecionar-tecnicos"
        component={SelecionarTecnico}
      />
      <Route
        exact
        path="/menu/cadastrar-propriedade/:id_proprietario/tecnicos/dados-propriedade"
        component={CadastrarPropriedade}
      />
      <Route
        exact
        path="/menu/cadastrar-propriedade/dados-propriedade/:id_propriedade_tecnico"
        component={CadastrarInfoPropriedade}
      />
      <Route
        exact
        path="/menu/cadastrar-propriedade/inventario-recursos/:id_propriedade_tecnico"
        component={InfoPropriedade}
      />
      <Route exact path="/menu/dados-propriedade/:id_propriedade_tecnico" component={CadastrarInfoPropriedade} />
      <Route exact path="/menu/cadastrar-adm" component={Cadastro} />
      <Route exact path="/menu/cadastrar-tecnico" component={Cadastro} />
      <Route exact path="/menu/teste" component={InfoPropriedade} />
      <Route exact path="/menu/sair" component={Logout} />
    </BrowserRouter>
  )
}
