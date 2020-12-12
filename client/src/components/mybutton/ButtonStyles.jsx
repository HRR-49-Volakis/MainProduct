import styled from 'styled-components';

const ButtonStyles = styled.div`
  display: flex;
  width: 60.2%;
  cursor: pointer;
  margin 2% 0;
  padding: 1.4% 0;
  align-items: center;
  justify-content: center;
  border: 1px #D3D3D3 solid;
  background-color: ${props => props.background};
  color: ${props => props.color};
  border-radius 0.4rem;
  align-items: center;
  &:hover {
    background-color: ${props => props.hover}
  }
`;

export default ButtonStyles;