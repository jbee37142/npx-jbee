import React from "react";
import { Color, Box, Text } from "ink";

export const Jbee = () => {
  return (
    <Box margin={1} padding={2} flexDirection="column">
      <Box marginBottom={1} alignItems="center">
        <Color cyan>Hello, </Color>
        <Color cyanBright>I'm </Color>
        <Color bgBlue white>
          <Text bold> Jbee </Text>
        </Color>
        <Text> 🐝</Text>
      </Box>
      <Box marginBottom={1}>
        <Color yellow>Front-End Engineer</Color>
        <Color magenta> or </Color>
        <Color green>Product Developer</Color>
      </Box>
      <Box flexDirection="column" marginBottom={1}>
        <Text>
          <Color bgWhiteBright black>
            {"  "}
            GitHub{" "}
          </Color>
          <Text underline> https://github.com/jbee37142</Text>
        </Text>
        <Text>
          <Color bgWhiteBright black>
            {"    "}
            Blog{" "}
          </Color>
          <Text underline> https://jbee.io</Text>
        </Text>
        <Text>
          <Color bgWhiteBright black>
            {" "}
            Twitter{" "}
          </Color>
          <Text underline> https://twitter.com/jbee37142</Text>
        </Text>
      </Box>
      <Color gray>Out of box, pay it forward 👋</Color>
    </Box>
  );
};
