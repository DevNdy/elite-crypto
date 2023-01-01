import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { AiFillQuestionCircle } from "react-icons/ai";

type QuestionProps = {
  question: string;
};

const ModalQuestion = ({ question }: QuestionProps) => {
  return (
    <ModalQuestionStyled>
      <AiFillQuestionCircle className="icon" />
      <h3>{question}</h3>
    </ModalQuestionStyled>
  );
};

const ModalQuestionStyled = styled.div`
  height: 40px;
  padding-right: 15px;
  margin: 20px 15px;
  background-color: ${theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  .icon {
    font-size: 25px;
    margin: 0 10px 0 15px;
    color: ${theme.colors.blackLight};
  }

  h3 {
    margin: 0;
    font-weight: 400;
  }

  &:hover {
    background-color: ${theme.colors.secondaryColor};
  }
`;

export default ModalQuestion;
