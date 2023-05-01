import React from "react";
import ContainerTicket from "../containers/ContainerTable";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { styled } from "styled-components/native";

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

function PageTicket() {
  return (
    <StyledView>
      <ContainerTicket />
    </StyledView>
  );
}

export default PageTicket;
