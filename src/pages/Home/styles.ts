import styled from 'styled-components';

export const Project = styled.div`
  grid-area: project;
  background-image: url('images/project.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover{
		opacity: 0.8;

    h2 {
      display: block;
    }
	}
`

export const Series = styled.div`
  grid-area: series;
  background-image: url('images/series.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover{
		opacity: 0.8;

    h2 {
      display: block;
    }
	}
`

export const Volunteer = styled.div`
  grid-area: volunteer;
  background-image: url('images/volunteer.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover{
		opacity: 0.8;

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