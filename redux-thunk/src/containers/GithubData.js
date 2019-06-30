import React from "react";
import { connect } from "react-redux";

function GithubData({ data }) {
  if (!data) {
    return <div>No Data</div>;
  }
  return (
    <div>
      <div>Name: {data.name}</div>
      <br />
      <div>Repos: {data.public_repos}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  null
)(GithubData);
