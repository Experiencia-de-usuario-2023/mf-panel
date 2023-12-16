import React, { useState } from 'react';
import './cicloLayout.css';

import { InlineEditableTextfield } from '@atlaskit/inline-edit';

const InlineEditableTextfieldDefault = (props) => {
  const [editValue, setEditValue] = useState('');

  const validate = (value: string) => {
    if (value.length <= 6) {
      return 'Please enter a value greater than 6 characters';
    }
    return undefined;
  };

  return (
    <div
      className='mtnegativo'

    >
      <InlineEditableTextfield
        defaultValue={editValue}
        onConfirm={(value) => setEditValue(value)}
        placeholder={props.titulo}

      />
    </div>
  );
};
export default InlineEditableTextfieldDefault;