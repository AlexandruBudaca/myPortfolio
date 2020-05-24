import React from "react";
import Logos from "./Logos";

const About = () => {
  return (
    <section>
      <div className="about">
        <img
          className="img-about"
          src="https://steamuserimages-a.akamaihd.net/ugc/852722377424981834/4DA318C949A0452E56C5F68B10636DA4F2071C56/"
          alt="profile"
        />
        <div className="about-content">
          <h1>Who am I?</h1>
          <h2>An actor who plays with technology!</h2>
          <p>
            {" "}
            If you know already that I am an actor, that means that you know the
            story, but what you don't know it's how it ends. I've studied acting
            since I was in the middle school, but also I've always had a sort of
            passion for technology. What had I done in this case? I've combined
            both! So this is how I create my own universe of creation. I've
            found that acting was the best way to feed my soul, but I realise
            that I was also in needing for feeding my brain too. So you can say
            that this was my way through video editing. Along this new skill
            came out new ones, like graphics design and after that, web
            developing. I will stop here? No way, be aware, I will learn
            everything I can!
          </p>
        </div>
      </div>
      <Logos />
    </section>
  );
};

export default About;
