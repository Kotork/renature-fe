import React, { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom'

// CONFIG
import logging from "../../config/logging";

// INTERFACES
import IPage from "../../interfaces/page";

// COMPONENTS
import { Menu } from "../../components";

// STYLES
import { Container, Left, Header, Informations, Title, IconLocation, IconLeaf, IconTree, IconEuro, About, Owners, Partners } from "./styles";

// IMAGES
import LogoRyanair from '../../assets/images/ryanair.png'
import LogoGeota from '../../assets/images/geota.png'
import LogoMonchique from '../../assets/images/monchiquemunicipio.jpg'
import LogoTurismoAlgarve from '../../assets/images/turismoAlgarve.jpg'
import LogoIcnf from '../../assets/images/icnf.png'

document.title = 'Dashboard';

const ProjectLayout: React.FC<IPage> = props => {
  const [page, setPage] = useState(window.location.pathname.substring(9))

  console.log(page)

  return (
    <Container>
      <Menu/>

      <Left>
        <Header>
          <h1>projeto</h1>
          <h2>renature monchique</h2>
        </Header>

        <Informations>
          <Title>Informações</Title>
          <a href="/project/location"><IconLocation active={ page === 'location' }/></a>
          <a href="/project/overview"><IconLeaf active={ page === 'overview' }/></a>
          <a href="/project/restauration"><IconTree active={ page === 'restauration' }/></a>
          <a href="/project/finantials"><IconEuro active={ page === 'finantials' }/></a>
        </Informations>

        <About>
          <Title>Sobre</Title>
          <p>
          A Serra de Monchique foi afetada pelo maior incêndio florestal da Europa em 2018. Quase 28.000ha foram queimados, afetando não apenas a comunidade local, mas também os habitats naturais e espécies desta área.
          </p>

          <p>
          O Renature Monchique, criado em 2019, é um projeto que pretende restaurar parte dos principais habitats da Rede Natura 2000 afetados pelo incêndio, apoiando o bem-estar local e mitigando os impactos futuros das alterações climáticas, ajudando ao mesmo tempo a comunidade local recuperar do desastre causado pelo incêndio.
          </p>
        </About>

        <Owners>
          <div>
            <Title>Financiado por</Title>
            <img src={LogoRyanair} alt="" />
          </div>

          <div>
            <Title>Coordenado por</Title>
            <img src={LogoGeota} alt="" />
          </div>
        </Owners>

        <Partners>
          <img src={LogoMonchique} alt="" />
          <img src={LogoTurismoAlgarve} alt="" />
          <img src={LogoIcnf} alt="" />
        </Partners>

      </Left>

      <Outlet />
    </Container>
  )
}

export default ProjectLayout;