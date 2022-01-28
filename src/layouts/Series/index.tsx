import React, { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom'
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
  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <Menu/>

      <Header>
        <h1>A Série</h1>
        <p>
          O projeto Renature Monchique pretende restaurar os principais habitats da rede Natura 2000, contribuir para o bem-estar da comunidade e mitigar os futuros impactos das alterações climáticas no território de Monchique, área afetada pelo maior incêndio da Europa ocorrido em 2018.
          Apresentamos duas temporadas de uma websérie sobre o projeto.
        </p>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Header>

      <Outlet />
    </Container>
  )
}

export default SerieLayout;