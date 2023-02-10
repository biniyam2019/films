import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Moviedetail from "../../../component/Moviedetail";
function Movielist(props) {
   console.log(props)

  return <Moviedetail data={props}/>;
}

export default Movielist;


export async function getServerSideProps(context) { 
  const res = await fetch(`https://api.themoviedb.org/3/movie/${context.params.id}?api_key=0d85cdde92f3a280249c50e046a631b1&language=en-US`);
  const data = await res.json()
  // console.log(data);
  return {
    props: {
      data,
    },
  };
}
