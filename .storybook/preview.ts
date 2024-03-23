import type { Preview } from "@storybook/react";
import '../src/assets/css/nucleo-icons.css';
import '../src/assets/css/nucleo-svg.css';
import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
