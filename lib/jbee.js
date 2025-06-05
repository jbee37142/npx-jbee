"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jbee = void 0;
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
exports.Jbee = function () {
    return (react_1.default.createElement(ink_1.Box, { margin: 1, padding: 2, flexDirection: "column" },
        react_1.default.createElement(ink_1.Box, { marginBottom: 1, alignItems: "center" },
            react_1.default.createElement(ink_1.Color, { cyan: true }, "Hello, "),
            react_1.default.createElement(ink_1.Color, { cyanBright: true }, "I'm "),
            react_1.default.createElement(ink_1.Color, { bgBlue: true, white: true },
                react_1.default.createElement(ink_1.Text, { bold: true }, " Jbee ")),
            react_1.default.createElement(ink_1.Text, null, " \uD83D\uDC1D")),
        react_1.default.createElement(ink_1.Box, { marginBottom: 1 },
            react_1.default.createElement(ink_1.Color, { yellow: true }, "Front-End Engineer"),
            react_1.default.createElement(ink_1.Color, { magenta: true }, " or "),
            react_1.default.createElement(ink_1.Color, { green: true }, "Product Developer")),
        react_1.default.createElement(ink_1.Box, { flexDirection: "column", marginBottom: 1 },
            react_1.default.createElement(ink_1.Text, null,
                react_1.default.createElement(ink_1.Color, { bgWhiteBright: true, black: true },
                    "  ",
                    "GitHub",
                    " "),
                react_1.default.createElement(ink_1.Text, { underline: true }, " https://github.com/jbee37142")),
            react_1.default.createElement(ink_1.Text, null,
                react_1.default.createElement(ink_1.Color, { bgWhiteBright: true, black: true },
                    "    ",
                    "Blog",
                    " "),
                react_1.default.createElement(ink_1.Text, { underline: true }, " https://jbee.io")),
            react_1.default.createElement(ink_1.Text, null,
                react_1.default.createElement(ink_1.Color, { bgWhiteBright: true, black: true },
                    " ",
                    "Twitter",
                    " "),
                react_1.default.createElement(ink_1.Text, { underline: true }, " https://twitter.com/jbee37142"))),
        react_1.default.createElement(ink_1.Color, { gray: true }, "Out of box, pay it forward \uD83D\uDC4B")));
};
