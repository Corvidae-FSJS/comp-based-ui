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
      img="https://lh3.googleusercontent.com/tqkmPtxckCr-HtjjIqLATIHHLzRvpdc_2YYXtFihE7ZSAgXEosE2Nbg7DDVmpB9HtScL6m9EnwBQTq51UyiktxATWtD5SAG41dfCJPu7nkxgpvR2nU1saeO937GPUNudpO75vewQWCD19w8PeLigDBZ3IGmyqI49AIRZLgxQXoscjh8f-oug0OOT-AaLTLX8Ic7qgUaKOfS5RuN2JLFr24y2hfMYO4iLyANEPhQWMBmr8KGAEG3JP3ZAnjgPm7qV7SZXQWBgrjIIL-fAkBX44jtI4duMWyN9SrT5P_8MtoIMyTUq4_D1BXq6jHqczzDvQG1NmNfguBFf8CiVf1oQww6JeugusEzhah2OKS8IWnZnKIisObOzuQ0_vCUe3ryM5O3X-NBDdfFxb7HcpBkF7gnfI_vBDfKTnYkoC-3InkA26S78hz7a0TrvjUYpFaUx6xuq8D3wXTsP2DQOKEoWWwWO8N7OEAVszeIkRtq-WHGy8WlIE6TRPLZ9Va4V_9byF6hiQ3G2v07bKG-RredLQ1lYSvqL2TRYRLXovhvwM9FhXAN8I7Q2skYQiXuWdXR2C2iyGwjIDiZjgsCkOAfiDhX_n0gXrzCvRG-f7pwrJr84WkR1cLqWFe4t=s300-no"
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
