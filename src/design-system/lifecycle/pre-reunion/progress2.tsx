import React from 'react';

import { ProgressTracker, Stages } from '@atlaskit/progress-tracker';

const items: Stages = [
    {
        id: 'creacion-1',
        label: 'Creación',
        percentageComplete: 100,
        status: 'visited',
        href: '/creacion',
      },
  {
    id: 'pre-reunion-2',
    label: 'Pre-Reunión',
    percentageComplete: 0,
    status: 'current',
    href: '#',
  },
  {
    id: 'en-reunion-3',
    label: 'En Reunión',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  },
  {
    id: 'post-reunion-4',
    label: 'Post-Reunión',
    percentageComplete: 0,
    status: 'unvisited',
    href: '#',
  }
];

export default () => <ProgressTracker items={items} />;