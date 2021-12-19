import React from "react";

function Footer(){
const dateConst = new Date();
const year = dateConst.getFullYear();

  return (<footer>
    <p>copyright @ {year}</p>
    </footer>
  );
}

export default Footer;
