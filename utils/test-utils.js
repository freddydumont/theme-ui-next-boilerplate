import { render } from '@testing-library/react';
import { ThemeProvider, ColorMode } from 'theme-ui';
import theme from '../src/theme';

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorMode />
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
