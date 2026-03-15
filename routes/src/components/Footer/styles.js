import styled from 'styled-components';

export const Container = styled.footer`
  background: #111;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 10px;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;