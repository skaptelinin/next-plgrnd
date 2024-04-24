import { type ChangeEvent, type FC } from 'react';

import { type FieldProps } from './FieldProps';
import labelStyles from './Label.module.css';

export const UsernameField: FC<FieldProps<string>> = ({ value, onChange }) => {
  const changeUsername = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <label className={labelStyles.label}>
      Username
      <input value={value} onChange={changeUsername}/>
    </label>
  );
};
