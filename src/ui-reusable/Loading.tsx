import React from "react";
import { ColorRing } from "react-loader-spinner";
import styled from "styled-components";

type LoadingProps = {
  heightSize: string;
  widthSize: string;
};

const Loading = ({ heightSize, widthSize }: LoadingProps) => {
  return (
    <LoadingStyled>
      <ColorRing
        visible={true}
        height={heightSize}
        width={widthSize}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#247378", "#247378", "#262730", "#247378", "#262730"]}
      />
    </LoadingStyled>
  );
};

const LoadingStyled = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default Loading;
