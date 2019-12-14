import { swiss, deep } from '@theme-ui/presets';

export default {
  ...swiss,
  useCustomProperties: true,
  colors: {
    ...swiss.colors,
    modes: {
      dark: {
        ...deep.colors,
      },
    },
  },
};
