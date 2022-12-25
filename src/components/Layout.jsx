import React from "react";

const Layout = () => {
  return (
    <div id="container">
      <video src="" autoPlay={true} id="videoElm" playsInline></video>
      <div className="box-content">
        <h1>facial recognition</h1>
        <div className="line"></div>
        <p>
          Hold the phone straight in front of your face and smile. We love to
          see you happy!
        </p>
      </div>
    </div>
  );
};

export default Layout;
