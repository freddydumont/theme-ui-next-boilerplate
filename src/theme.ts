import { swiss, deep } from '@theme-ui/presets';

export default {
  ...swiss,
  useCustomProperties: true,
  useColorSchemeMediaQuery: true,
  colors: {
    ...swiss.colors,
    modes: {
      dark: {
        ...deep.colors,
      },
    },
  },
  layout: {
    container: {
      maxWidth: 1024,
      mx: 'auto',
      py: 3,
      px: 4,
    },
  },
  buttons: {
    primary: {
      cursor: 'pointer',
    },
  },
};
