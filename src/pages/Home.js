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
      <div className="box_me">
        <h1 class="title_me">
          Hello je suis Raphaël.
        </h1>
        <h1> Designer/Déveloper.</h1>
          <br></br>
           <p className="descrip_me">
              Passionné par L'art & le dev, 
              je crée de mignons petits sites <br></br> ainsi que des designs dans
              un style cartoon/doodle. 
           </p>
      </div>
      <div className="background_Nessie_duck">

      </div>
    </div>
  );
};
{/*mettre une image gif /non gif ou du js (petite anim)*/}
export default Home;