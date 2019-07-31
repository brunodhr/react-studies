import React from "react";

import API from "utils/api";
import Button from "components/Button";
// import { Container } from './styles';

const Home = () => {
  let axiosConfig = {
    headers: {
      accept: "application/json",
      authorization: "Basic ZGVtbzozIzJTdFpUJDVFcm5HWVpV"
    }
  };

  const handlePeoples = async event => {
    event.preventDefault();

    const places = await API.get("base/destinations", axiosConfig);

    console.log(places.data);
  };
  return (
    <>
      <div>Home Page</div>
      <Button onClick={handlePeoples} content="Pegar locais" />
    </>
  );
};

export default Home;
