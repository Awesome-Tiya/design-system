import type { Preview } from '@storybook/react-vite'
import "../src/tokens.css";

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      inlineStories: true,
      source: { type: 'code' },
      iframeHeight: 200
    },
  },
};

export default preview;