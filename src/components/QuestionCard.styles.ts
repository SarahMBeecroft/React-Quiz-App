import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #3402b3;
  padding: 35px;
  margin: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1.4rem;
    color: #4b4b4b;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    width: 100%;
    height: 55px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #3cb88b, #00b372)' // Correct
        : !correct && userClicked
        ? 'linear-gradient(90deg, #f36e7c, #f83f52)' // Incorrect
        : 'linear-gradient(90deg, #644ace, #3f1ad6)'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
