import React from "react";
import Bg from '../assets/bg.jpg'

function Home() {

  const bodyStyle = {
    backgroundImage: "url(" + Bg + ")",
     width: '100%',
      height: '900px',
      // paddingTop : '0px',
      // marginTop: '0px'
  }
    return (
      <div style={bodyStyle}>
        <h2 style={{color:'white', textAlign:'center'}}>Home asdasdasd</h2>
      </div>
    );
  }

  export default Home