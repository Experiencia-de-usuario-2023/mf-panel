import React, { useState } from 'react';

import { AtlassianNavigation, Search } from '@atlaskit/atlassian-navigation';

  const DefaultSearch = () => {
    const [value, setValue] = useState('');
    const onChange = (event: any) => {
      console.log('search clicked with value: ', event.target.value);
      setValue(event.target.value);
    };

    return (
      <Search
        
        onClick={onChange}
        placeholder="Buscar..."
        tooltip="Buscar"
        label="Buscar"
        value={value}
      />
    );
  }
  export default DefaultSearch;