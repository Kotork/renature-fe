import React from "react";

// INTERFACES
import IPage from "../../interfaces/page";

//STYLES
import { Info, Images } from "./styles";

// IMAGES
import mapMonchique from '../../assets/images/Monchique_Mapa.png'
import mapPortugal from '../../assets/images/mapaPortugal_Algarve.png'

const ProjectLocationPage: React.FC<IPage> = props => {
  return (
    <Info>
      <h2>Localização</h2>

      <Images>
        <img src={mapPortugal} className="verticalImg" alt="" />
        <img src={mapMonchique} className="horizontalImg" alt="" />
      </Images>

      <div>
        <p>
          O concelho de Monchique pertence ao distrito de Faro. É composto por 16 municípios com uma área total de 4960 km2 e 391.819 (±392 mil) habitantes (população em 2001).
        </p>

        <p>
          A serra de Monchique divide-se, na sua maior altitude, em dois picos bem distintos: a Fóia, mais ocidental com uma altitude de 902, acima do nível do mar; e Picota com uma altitude de 774m.
        </p>

        <p>
          A vegetação natural que cobre a serra constitui um bom indicador do misto de microclimas resultantes das inter-influências dos fatores climáticos, latitude, altitude, proximidade do mar, regimes de vento e orografia. A área de florestas é extensa, abrangendo cerca de 85% da área do concelho. A maior parte do concelho está englobado na Rede Natura 2000. As zonas envolventes da Foz e da Picota estão classificadas como Espaço natural de Grau I com predominância de eucaliptos, sobreiros, pinheiros, medronheiros e matos (esteva e urze).
        </p>
      </div>
    </Info>
  )
}

export default ProjectLocationPage