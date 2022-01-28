import styled from 'styled-components';

export const Project = styled.a`
  grid-area: project;
  background-image: url('images/project.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  :hover{
		opacity: 0.8;
    cursor: pointer;

    h2 {
      display: block;
    }
	}
`

export const Series = styled.a`
  grid-area: series;
  background-image: url('images/series.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  :hover{
		opacity: 0.8;
    cursor: pointer;

    h2 {
      display: block;
    }
	}
`

export const Volunteer = styled.a`
  grid-area: volunteer;
  background-image: url('images/volunteer.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  :hover{
		opacity: 0.8;
    cursor: pointer;

    h2 {
      display: block;
    }
	}
`

export const Header2 = styled.h2`
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  font-size: 26px;
  display: none;
`