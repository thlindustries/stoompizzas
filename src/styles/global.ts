import { createGlobalStyle } from 'styled-components';
import pizzaBg from '../assets/pizzabg.jpg';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    font-family: 'Archivo';

    display:flex;
    justify-content: center;
    align-items: center;
    padding: 32px;


    background-image: url(${pizzaBg});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }

  html,body{
    height: 100%;
    margin: 0px;
  }


`;
