import React from "react";
import Cv from "../components/Cv";
import Illustration from "../components/Illustration";
import Card from "../components/Card";
import Projet from "../components/Projet";
import Web from "../components/Web";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Cv />
      <Illustration />
      <Card />
      <Projet />
      <Web />
      <h1>Welcome</h1>
    </div>
  );
};
{/*mettre une image gif /non gif ou du js (petite anim)*/}
export default Home;