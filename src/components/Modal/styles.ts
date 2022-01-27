import styled from "styled-components";
import { FaTimes } from 'react-icons/fa'

import { IProps } from './interface';

export const Container = styled.div<IProps>`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	display: ${ props => props.setDisplay};
	position: absolute;
	justify-content: center;
	align-items: center;
`;

export const ModalContent = styled.div`
	width: 30%;
	height: 40%;
	background-color: #fff;
	border-radius: 8px;
`
export const ModalHeader = styled.div`
	width: 100%;
	height: 20%;
	background-color: #c4c4c4;
	border-radius: 8px 8px 0 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
`

export const ModalBody = styled.div`
	width: 100%;
	height: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const ITimes = styled(FaTimes).attrs({
	size: 24
})`
	cursor: pointer;
	:hover{
		opacity: 0.8;
	}
`;