import React, { useEffect } from "react";
import Creacion from "./Creacion";
import EnReunion from "./EnReunion";
import PostReunion from "./PostReunion";
import PreReunion from "./PreReunion";

const Panel = ({ estado }) => {
  useEffect(() => {
    console.log("Estado desde el hijo: ", estado);
  }, [estado]);

  const components = [
    <Creacion />,
    <PreReunion />,
    <EnReunion />,
    <PostReunion />,
  ];
  return <div>{components[estado]}</div>;
};

export default Panel;
