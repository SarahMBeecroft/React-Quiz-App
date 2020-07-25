import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/b99.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 20px;
  }
  h1 {
    font-family: Ranchers;
    background-image: linear-gradient(180deg, #fff, #fff000);
    font-weight: 400;
    letter-spacing: 2px;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-size: 80px;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    cursor: pointer;
    background-color: #fc8d00;
    user-select: none;
    font-size: 1.2rem;
    width: 40%;
    height: 55px;
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
  .start:hover,
  .next:hover {
    background-color: #ffaa3f;
  }
  .start {
    max-width: 200px;
  }
`;
