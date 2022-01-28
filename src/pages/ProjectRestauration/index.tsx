import React from "react"

// INTERFACES
import IPage from "../../interfaces/page";

//STYLES
import { Info } from "./styles";

// IMAGES
import burnedArea from '../../assets/images/areaQueimada.png'

const ProjectRestaurationPage: React.FC<IPage> = props => {
  return (
    <Info>
      <h2>Restauração</h2>

      <div>
        <img src={burnedArea} alt="" />
      </div>

      <p>
        A restauração ecológica é um processo físico e social.
      </p>

      <p>
        Sendo um processo social requer a cooperação e capacidade de várias pessoas como os donos dos terrenos, da comunidade e das autoridades locais.
      </p>

      <p>
        A nível físico há uma intervenção direta no terreno nas áreas afetadas pelo fogo através de atividades relacionadas com a marcação de vias de acessos, estabilização de áreas erodidas, remoção de plantas invasoras, marcação dos locais de plantação e, por fim, a plantação em si.  Nem todas as áreas necessitaram de intervenção, seleção que foi fundamental para maximizar o impacto das intervenções.
      </p>

      <p>
        A restauração ecológica é um processo de médio a longo prazo, uma vez que poderá levar entre 15 a 20 anos até ser concluída.
      </p>
    </Info>
  )
}

export default ProjectRestaurationPage