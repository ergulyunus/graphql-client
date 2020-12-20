import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import CompanyList from './CompanyList'

const client = new ApolloClient({ uri: "http://localhost:5000/graphql" });

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
         <CompanyList/>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
