import React from "react";
import { Text } from "react-native-paper";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { styled } from "styled-components/native";

const StyledText = styled(Text)`
  background-color: #ff7f7f;
  color: #ffffff;
  padding-left: 10px;
`;

function AppError(props: AppErrorPropsI) {
  const { children } = props;

  return <StyledText variant="labelSmall">{children}</StyledText>;
}

export interface AppErrorPropsI {
  children: React.ReactNode;
}

export default AppError;
