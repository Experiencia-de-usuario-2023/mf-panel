import React from 'react';


import Heading from '@atlaskit/heading';


import Lozenge from '@atlaskit/lozenge';
import { Box, Inline, Stack, xcss } from '@atlaskit/primitives';


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { token } from '@atlaskit/tokens';
import Button from '@atlaskit/button';
import { SimpleTag as Tag } from '@atlaskit/tag';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Realizadas', 'Pendientes'],
    datasets: [
      {
        label: 'Compromisos',
        data: [17, 4],
        backgroundColor: [
          'rgba(255,162, 76, 1)',
          'rgba(150, 150, 150, 0.2)',
        ],

        
      },
    ],
  };

  const datos = (data1,data2) => (
    {
        labels: ['Realizados', 'Pendientes'],
        datasets: [
          {
            label: 'Compromisos',
            data: [data1, data2],
            backgroundColor: [
              'rgba(85,173, 168, 1)',
              'rgba(150, 150, 150, 0.2)',
            ],
    
            
          },
        ],
      }
  );

const containerStyles = xcss({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'elevation.surface.raised',
  padding: 'space.200',
  margin: 'space.200',
  transition: '200ms',
  borderRadius: 'border.radius.200',
  boxShadow: 'elevation.shadow.raised',
  ':hover': {
    backgroundColor: 'elevation.surface.hovered',
  },
  maxWidth:token('space.100', '400px'),

  justifyContent:'center'
  
});



const inlineStyles = xcss({
  display: 'flex',
  alignItems: 'center',

});

const chartStyle = xcss({
    display: 'flex',
    alignItems: 'center',
    
  });

const extraInfoStyles = xcss({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBlock: 'space.050',

});

const descripcionStyle= xcss({
    display: 'flex',
    paddingBlock: 'space.100',
    flexDirection:'column'
  });

   

export default function Card(props) {
  return (
    <Box xcss={containerStyles}>

      <Stack space="space.100">
        <Box as="span">
          <Lozenge appearance="new">Proyecto {props.name} </Lozenge>
        </Box>
        <Inline space="space.300" alignBlock="center">
            <Stack space="space.150" xcss={chartStyle}>
                <Box xcss={chartStyle}>
                    <Doughnut data={datos(props.data1,props.data2)} width={150} height={150} options={{ maintainAspectRatio: false }}/>  
                </Box>
                <Heading level="h300">Compromisos</Heading>
            </Stack>
            <Stack space="space.150" xcss={chartStyle}>
                <Box xcss={chartStyle}>
                    <Doughnut data={data} width={150} height={150} options={{ maintainAspectRatio: false }}/>  
                </Box>
                <Heading level="h300">Reuniones</Heading>
            </Stack> 
        </Inline>
        <Box as="span" xcss={descripcionStyle}>
            <div><b>Inicio:</b> {props.fecha} </div>
            <div><b>Descripción</b></div>
            <div>Dropdown menu items in Modal are not accessible to keyboard/screen readers in Safar</div>  
              
        </Box>
        <Box xcss={extraInfoStyles}>
          <Box xcss={inlineStyles}>
            <Tag text={props.data1 + " Reuniones" } />
            <Tag text={props.data2 + " Compromisos" } /> 
          </Box>
          <Inline space="space.100" alignBlock="center">
            <Button appearance="primary">Ver más </Button>
          </Inline>
        </Box>
      </Stack>
    </Box>
  );
}

