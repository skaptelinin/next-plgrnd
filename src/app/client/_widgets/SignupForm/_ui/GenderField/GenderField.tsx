import { type ChangeEvent, type FC } from 'react';

import { type Gender } from '../../../../_features';
import { type FieldProps } from '../FieldProps';
import labelStyles from '../Label.module.css';
import styles from './GenderField.module.css';

export const GenderField: FC<FieldProps<Gender>> = ({ value, onChange }) => {
  const changeGender = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value as Gender);
  };

  return (
    <fieldset className={styles['field-group']}>
      Gender
      <label className={labelStyles.label}>
        Male
        <input
          type="radio"
          value="male"
          name="gender"
          checked={value === 'male'}
          onChange={changeGender}
        />
      </label>
      <label className={labelStyles.label}>
        Female
        <input
          type="radio"
          value="female"
          name="gender"
          checked={value === 'female'}
          onChange={changeGender}
        />
      </label>
      <label className={labelStyles.label}>
        None
        <input
          type="radio"
          value="none"
          name="gender"
          checked={value === 'none'}
          onChange={changeGender}
        />
      </label>
    </fieldset>
  );
};
