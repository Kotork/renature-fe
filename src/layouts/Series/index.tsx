import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom'
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// CONFIG
import logging from "../../config/logging";

// INTERFACES
import IPage from "../../interfaces/page";

// COMPONENTS
import { Menu } from "../../components";

// STYLES
import { Container, Header } from "./styles";

document.title = 'Serie';

const SerieLayout: React.FC<IPage> = props => {
  let navigate = useNavigate();
  const [season, setSeason] = React.useState('1');

  const handleChange = (event: SelectChangeEvent) => {
    setSeason(event.target.value);
  };

  useEffect(() => {
    season == '1' ? navigate('/series/season-1') : navigate('/series/season-2')
  }, [season])

  return (
    <Container>
      <Menu/>

      <Header className="AQUI">
        <h1>A Série</h1>
        <p>
          O projeto Renature Monchique pretende restaurar os principais habitats da rede Natura 2000, contribuir para o bem-estar da comunidade e mitigar os futuros impactos das alterações climáticas no território de Monchique, área afetada pelo maior incêndio da Europa ocorrido em 2018.
          Apresentamos duas temporadas de uma websérie sobre o projeto.
        </p>

        <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
          <Select
            id="seasonSelect"
            value={season}
            label="Temporada"
            onChange={ (event: SelectChangeEvent) => setSeason(event.target.value) }
          >
            <MenuItem value={1}>Temporada 1</MenuItem>
            <MenuItem value={2}>Temporada 2</MenuItem>
          </Select>
        </FormControl>
      </Header>

      <Outlet />
    </Container>
  )
}

export default SerieLayout;