import React, { Component } from "react";
import { ThemeProvider, injectGlobal } from "styled-components";

import Header from "../Header";
import Meta from "../Meta";
import { theme, StyledPage, Inner } from "./styles";

class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
