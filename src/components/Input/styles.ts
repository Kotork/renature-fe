import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  >p{
      margin: 0;
      padding: 0;
      padding-left: 10px;
      font-size: 16px;
      font-weight: 600;
  }
`;

export const ContentInput = styled.input`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: none;
  padding-left: 10px;
  font-size: 16px;
`;
