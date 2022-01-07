import React from "react";

//<img src={require('../../assets/img/jtw.jpg').default}/>
const Home = () => {
  return (
    <div class="jumbotron">
      <img src={require('../assets/img/gametradez.gif').default}/>
      <div class="centered">GameTradez!</div>
    </div>
  );
};

export default Home;