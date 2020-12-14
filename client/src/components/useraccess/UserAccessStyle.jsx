import styled from 'styled-components';

const UserAccessStyles = styled.div`
  display: flex;
  height: 460px;
  border-radius: 1rem;
  .right {
    flex: 1;
    position: relative;
  }
  .header {
    margin 0 5%;
  }
  .cover {
    display: flex;
    color: white !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1000;
    height: 100%;
    width: 100%;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: rgba(17, 30, 108, 0.6);
  }
  .myH2 {
    color: white !important;
    letter-spacing: 0.2rem;
  }
  .myText {
    text-align: center;
    margin: 0 10%;
    margin-bottom: 4%;
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
  .img {
    position: absolute;
    width: 100%;
    height: 100%;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  .myButton {
    display: cursor;
    text-align: center;
    border-radius: 50px;
    font-weight: 800;
    width: 18%;
    padding: 1.6%;
    border: 1px white solid;
  }
  .logo {
    max-height: 80px;
    max-width: 80px;
  }
  .left {
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
  }
  .myInputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .innerLeft {
    margin: auto;
    width: 100%;
  }
  .media {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 6%;
  }
  .social {
    width: 35px;
    height: 35px;
    margin: 0 4%;
  }
`;

export default UserAccessStyles;