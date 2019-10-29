import React from 'react';
import Header from './Header';
import Characters from './Characters';
import Footer from './Footer';

const App = () => (
  <>
    <Header />
    <Characters 
      img="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      name="Rick Sanchez"
      species="human" />
    <Characters 
      img="https://lh3.googleusercontent.com/gwG7uMqjyE1L7gpZseqfi4BPLxuepY53xi3PUF8Xt1wTG726LlJXW81qDVZF4vJzEP1uLc5L-VyQsqD3YIy8jD-_55qUP72ClRZmVcY0n_CYo2_5sPZaIkOnJ6Fy4h3_F0V2djl7KqabUNgN1pYNcE9JmaUzPgSLxeE26OaYNHXQc6eVsY-MHxqNNpe7Ls8yE6XvCXWtwjLcfipcSiiMrX1Geqx15QW7RZrMQh79zkDCjL5jNasu1K74-ugiOvpIhNNN38yiJdnleu1V75Ezirf-8rfMjJAYxQGelTZxA6cUsfxLTVrWHTkBvKSyMlIsJEgZku9TU1EmNtQ-68oEUi3Znnv5v3GxdFxwNFFa2tyo7akLeMZxEAutx4W9igoZdg30QoHIX2yPYudNlT71bXHSyjz0JPgDUNH1liKS8WaQ1AvQinAB1e5tds8a0gWALNsnGNY66Y7ysqGpc9WYD6yqkP8UqQSI_GenKLta9YfgBqfrlHJs3JpLeouA76lR4yGj3PqUuSv2O-vAg9ouY2c3C2QY1-7nMw-W0KJ6EYTRgAdgDTI3MOy8A9C8qHwoU8GjOWQ8-P_yWHjqe-5ntLx1M0_ra5vEWxdslq8BIDEerwvhUm0vLc_sreLB8ndoPqFyKBPU87er5epYfsjudcMoliVnsz60JyYZ4TwxyIZhqQAQQt4ynpU=s300-no"
      name="Dylan Rick"
      species="human" />
    <Characters 
      img="https://rickandmortyapi.com/api/character/avatar/72.jpeg"
      name="Cool Rick"
      species="human" />
    <Characters 
      img="https://rickandmortyapi.com/api/character/avatar/256.jpeg"
      name="Pickle Rick"
      species="human" />
    <Characters 
      img="https://rickandmortyapi.com/api/character/avatar/472.jpeg"
      name="Baby Rick"
      species="human" />
    <Characters 
      img="https://rickandmortyapi.com/api/character/avatar/477.jpeg"
      name="Hairdresser Rick"
      species="human" />
    <Characters 
      img="https://rickandmortyapi.com/api/character/avatar/220.jpeg"
      name="Farmer Rick"
      species="human" />
    <Characters 
      img="https://rickandmortyapi.com/api/character/avatar/328.jpeg"
      name="Slow Rick"
      species="human" />
    <Characters 
      img="https://rickandmortyapi.com/api/character/avatar/345.jpeg"
      name="Teacher Rick"
      species="human" />
    <Characters 
      img="https://rickandmortyapi.com/api/character/avatar/381.jpeg"
      name="Woman Rick"
      species="human" />
    <Footer />
  </>
);

export default App;
