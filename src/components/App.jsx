import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import React, { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';

export class App extends Component {
  render() {
    return (
      <Layout>
        <Phonebook />
        <GlobalStyle />
      </Layout>
    );
  }
}
