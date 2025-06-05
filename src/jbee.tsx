import React from "react";
import { Box, Text } from "ink";

export const Jbee = () => {
  return (
    <Box margin={1} padding={2} flexDirection="column">
      <Box marginBottom={1} alignItems="center">
        <Text color="cyan">Hello, </Text>
        <Text color="cyanBright">I'm </Text>
        <Text backgroundColor="blue" color="white" bold>
          {' Jbee '}
        </Text>
        <Text> 🐝</Text>
      </Box>
      <Box marginBottom={1}>
        <Text color="yellow">Front-End Engineer</Text>
        <Text color="magenta"> or </Text>
        <Text color="green">Product Developer</Text>
      </Box>
      <Box flexDirection="column" marginBottom={1}>
        <Text>
          <Text backgroundColor="whiteBright" color="black">
            {"  "}
            GitHub{" "}
          </Text>
          <Text underline> https://github.com/jbee37142</Text>
        </Text>
        <Text>
          <Text backgroundColor="whiteBright" color="black">
            {"    "}
            Blog{" "}
          </Text>
          <Text underline> https://jbee.io</Text>
        </Text>
        <Text>
          <Text backgroundColor="whiteBright" color="black">
            {" "}
            Twitter{" "}
          </Text>
          <Text underline> https://twitter.com/jbee37142</Text>
        </Text>
      </Box>
      <Text color="gray">Out of box, pay it forward 👋</Text>
    </Box>
  );
};
