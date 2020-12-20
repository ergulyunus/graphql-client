import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_COMPANIES = gql`
  query getCompanies {
    companies {
      id
      name
    }
  }
`;

class CompanyList extends Component {
  render() {
    return (
      <Query query={GET_COMPANIES}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>loading</div>;
          }
          if (error) {
            return <div>Error: {error.toString()}</div>;
          }
          return (
            <ul>
              {data.companies.map((c) => {
                return <div key={c.id}>{c.name}</div>;
              })}
            </ul>
          );
        }}
      </Query>
    );
  }
}

export default CompanyList;
