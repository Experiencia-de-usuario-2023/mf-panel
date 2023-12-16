import React from 'react';

import Avatar from '@atlaskit/avatar';

import Comment, { CommentAuthor, CommentTime } from '@atlaskit/comment';
//import sampleAvatar from '../images/avatar_400x400.jpg';

import { Box,Flex, xcss } from '@atlaskit/primitives';
import { media } from '@atlaskit/primitives/responsive';
import Card from '../card/Card.tsx';


const boxStyle = xcss({

    padding: 'space.300',
    position:'relative',
    display: 'flex',
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
 

  });

const ProyectList = () => {
  return (
    <Box xcss={boxStyle}>
        <Card fecha='21-10-2023' data1={10} data2={10} name = {"Scrum"}/>
        <Card fecha='25-09-2023' data1={15} data2={1} name = {"Visor Sercotec"}/>
        <Card fecha='01-11-2023' data1={7} data2={11} name = {"Gestión Pacientes"} />
        <Card fecha='21-03-2023' data1={17} data2={6} name = {"Complex River"}/>
        <Card fecha='21-10-2023' data1={12} data2={14} name = {"Indicador Potabilidad"}/>
    </Box>
  );
};

export default ProyectList;