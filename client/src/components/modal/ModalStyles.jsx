import styled from 'styled-components';

const ModalStyles = styled.div`
  position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(20px);
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 4rem 0;
    display: ${(props) => props.open ? 'block' : 'none'};
    .modal-exit {
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 10px;
      height: 10px;
      background: rgb(255, 0, 76);
      outline: none;
      border: 0;
      border-radius: 10rem;
      padding: 0.5rem;
      cursor: pointer;
      &:active {
        filter: brightness(0.8);
      }
    }
    .modal-body {
      position: relative;
      max-width: 1000px;
      background: white;
      margin: 0 auto;
      border-radius: 1rem;
      p, h2 {
        color: black;
      }
    }
  }
`;

export default ModalStyles;