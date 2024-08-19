import { GlobalStyle } from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

const Providers = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
