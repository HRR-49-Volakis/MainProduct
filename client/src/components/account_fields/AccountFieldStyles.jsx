import styled from 'styled-components';

const AccountFieldsStyles = styled.div`
  height: 420px;
  border-radius: 1rem;
  header {
    display: flex;
    align-items: center;
    background-color: rgb(17, 30, 108);
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    h2 {
      margin-left: 2%;
      color: white !important;
    }
  }
  .mainContent {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 50px;
    justify-items: center;
    margin: 0 auto;
    padding-top: 2%;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`;

export default AccountFieldsStyles;