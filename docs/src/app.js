import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Button, Container } from './../../src';
import theme from './../../src/themes/bulma';

const allExamples = `<Button href="/home" isColor="warning" isMedium isRounded>Warning Medium Link</Button>
<Button isLoading>Loading</Button>`;

const buttonExamples = `<Button>Test</Button>
<Button isColor="primary">Primary</Button>
<Button isColor="link">Link</Button>
<Button isColor="info">Info</Button>
<Button isColor="success">Success</Button>
<Button isColor="danger">Danger</Button>
<Button isColor="warning">Warning</Button>`;

const linkExamples = `<Button href="/home" isColor="link">Home</Button>`;

const loadingExamples = `<Button isLoading>Test</Button>
<Button isColor="primary" isLoading>Primary</Button>
<Button isColor="link" isLoading>Link</Button>
<Button isColor="info" isLoading>Info</Button>
<Button isColor="success" isLoading>Success</Button>
<Button isColor="danger" isLoading>Danger</Button>
<Button isColor="warning" isLoading>Warning</Button>`;

const sizeExamples = `<Button isSmall>Small</Button>
<Button>Normal</Button>
<Button isMedium>Medium</Button>
<Button isLarge>Large</Button>`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="app">
          <header className="app-header">
            <h1>Capsule UI <span role="img" aria-label="Capsule UI">💊</span></h1>
          </header>

          <h1>Button Element</h1>

          <Container>
            <h3>Colors</h3>
            <pre>
              {buttonExamples}
            </pre>
            <p className="box">
              <Button>Test</Button>
              <Button isColor="primary">Primary</Button>
              <Button isColor="link">Link</Button>
              <Button isColor="info">Info</Button>
              <Button isColor="success">Success</Button>
              <Button isColor="danger">Danger</Button>
              <Button isColor="warning">Warning</Button>
            </p>
          </Container>
            
          <Container>
            <h3>Link</h3>
            <pre>
              {linkExamples}
            </pre>
            <p className="box">
              <Button href="/home" isColor="link">Home</Button>
            </p>
          </Container>

          <Container>
            <h3>Sizes</h3>
            <pre>
              {sizeExamples}
            </pre>
            <p className="box">
              <Button isSmall>Small</Button>
              <Button>Normal</Button>
              <Button isMedium>Medium</Button>
              <Button isLarge>Large</Button>
            </p>
          </Container>

          <Container>
            <h3>Outlined</h3>
            <pre>
              something
            </pre>
            <p className="box">
              <Button isOutlined>Small</Button>
            </p>
          </Container>

          <Container>
            <h3>Loading</h3>
            <pre>
              {loadingExamples}
            </pre>
            <p className="box">
              <Button isLoading>loading</Button>
              <Button isColor="primary" isLoading>loading</Button>
              <Button isColor="link" isLoading>loading</Button>
              <Button isColor="info" isLoading>loading</Button>
              <Button isColor="success" isLoading>loading</Button>
              <Button isColor="danger" isLoading>loading</Button>
              <Button isColor="warning" isLoading>loading</Button>
            </p>
          </Container>

          <Container>
            <h3>Disabled</h3>
            <pre>
              {loadingExamples}
            </pre>
            <p className="box">
              <Button disabled>Test</Button>
              <Button isColor="primary" disabled>Primary</Button>
              <Button isColor="danger" disabled>Danger</Button>
              <Button isColor="warning" disabled>Warning</Button>
            </p>
          </Container>

          <Container>
            <h3>Combined examples</h3>
            <pre>
              {allExamples}
            </pre>
            <p className="box">
              <Button href="/home" isColor="warning" isMedium isRounded>Warning Medium Link</Button>
              <Button isSmall isLoading>Loading</Button>
            </p>
          </Container>
          
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
