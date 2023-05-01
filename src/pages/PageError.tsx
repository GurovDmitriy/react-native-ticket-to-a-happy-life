import React from "react";
import { Button, Card, Text } from "react-native-paper";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { styled } from "styled-components/native";

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const StyledCard = styled(Card)`
  width: 100%;
`;

const PageError = (props: { error: Error; resetError: () => void }) => {
  console.error(props.error);

  return (
    <StyledView>
      <Text variant="headlineSmall">Error</Text>
      <StyledCard>
        <Card.Content>
          <Text variant="bodySmall">Something happened!</Text>
          <Text variant="bodySmall">{props.error.toString()}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => props.resetError()}>Try again</Button>
        </Card.Actions>
      </StyledCard>
    </StyledView>
  );
};

export default PageError;
