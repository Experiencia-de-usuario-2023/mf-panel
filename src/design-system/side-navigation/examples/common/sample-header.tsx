/** @jsx jsx */
import { jsx } from '@emotion/react';

import Icon from '@atlaskit/icon';
import { CustomItemComponentProps } from '@atlaskit/menu';

import { Header } from '@atlaskit/side-navigation';

import SampleIcon from './sample-logo.tsx';

const Container = ({ children, ...props }: CustomItemComponentProps) => {
  return (
    <div
      
      {...props}
    >
      {children}
    </div>
  );
};

const ExampleHeader = () => {
  return (
    <Header
      component={Container}
      description="Next-gen service desk"
      iconBefore={<Icon label="" glyph={SampleIcon} size="medium" />}
    >
      NXTGen Industries
    </Header>
  );
};

export default ExampleHeader;
