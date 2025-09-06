import React from "react";
import UrlShortener from "./components/UrlShortener";
import UrlStatistics from "./components/UrlStatistics";
import { CssBaseline, Container } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <UrlShortener />
        <UrlStatistics />
      </Container>
    </>
  );
}

export default App;