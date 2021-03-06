import React, { ReactElement } from "react";
import styled, { ThemeProvider } from "styled-components";
import * as Examples from "./components";
import b from "json-beautify";

const components = Object.entries(Examples);

function Contents() {
  return (
    <Wrapper>
      <Grid>
        {components.map(([name, Component], index) => (
          <Container key={index}>
            <Title>
              {index + 1} - {name}
            </Title>
            <Component key={name} />
          </Container>
        ))}
      </Grid>
    </Wrapper>
  );
}

const Code = styled.pre`
  display: block;
  background-color: #0003;
  padding: 1rem;
  font-size: 0.7rem;
  border-radius: 0.25rem;
  word-wrap: break-word;
  overflow: default;
  text-overflow: default;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 70rem;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 0.5rem;
    gap: 0.5rem;
  }
`;

const StyledImage = styled.div`
  display: flex;
  width: inherit;
  height: 200px;
  justify-content: center;
  & > img {
    height: inherit;
  }
`;

const Title = styled.h4`
  margin-bottom: 0.4rem;
`;

const Grid = styled.div`
  display: grid;
  padding: 1rem;
  background-color: #eee;
  border-radius: 0.7rem;
  gap: 1rem;
  animation: ease 200ms;
  @media (max-width: 600px) {
    padding: 0.5rem;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
`;

const Container = styled.div`
  border-radius: 0.2rem;
  background-color: #ccc;
  padding: 1rem;
`;

export function App() {
  return (
    <AppProvider>
      <Contents />
    </AppProvider>
  );
}

function AppProvider({ children }: { children?: ReactElement }) {
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>;
}
