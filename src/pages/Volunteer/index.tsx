import React from "react";
import { Button } from '@mui/material';

// INTERFACES
import IPage from "../../interfaces/page";

//STYLES
import { Volunteer } from "./styles";

const VolunteerPage: React.FC<IPage> = props => {
  return (
    <Volunteer>
      <h2>Ajuda-nos a dar uma nova vida a Monchique</h2>

      <p>
        Os voluntários do projeto Renature Monchique fazem uma enorme diferença na reconstrução desta serra e no apoio aos demais residentes e comerciantes desta zona
      </p>

      <p>
        Podem faltar recursos técnicos ou financeiros, mas o maior contributo que nos podes dar é a tua contribuição, para que possamos continuar a lutar por uma boa causa.
      </p>

      <p>
        Junte-te a nós!
      </p>

      <h3>Porquê ajudar</h3>
      <div>
        <span>- Contribuis para a proteção do ambiente;</span>
        <span>- Adquires novos conhecimentos;</span>
        <span>- Trabalhas em equipa;</span>
        <span>- Fazes novas amizades;</span>
        <span>- Ajudas os outros;</span>
        <span>- Tens novas experiências</span>
        <span>- E muito mais</span>
      </div>

      <Button type="button" variant='contained' fullWidth color='success'>Quero ser voluntário</Button>
    </Volunteer>
  )
}

export default VolunteerPage