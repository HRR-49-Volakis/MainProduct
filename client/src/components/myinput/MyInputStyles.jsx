import styled from 'styled-components';

const InputStyles = styled.div`
  display: flex;
  width: 60%;
  margin 2% 0;
  border: 1px #D3D3D3 solid;
  border-radius 0.4rem;
  align-items: center;
  &:focus-within {
    border: 1px black solid;
  }
  .icon {
    height: ${props => props.dimensions.height};
    width: ${props => props.dimensions.width};
  }
  input {
    width: 100%;
    padding: 8px;
    border-width: 0px;
    border: none;
    border-radius 0.4rem;
    &:focus {
      outline: none !important;
    }
  }
`;

export default InputStyles;