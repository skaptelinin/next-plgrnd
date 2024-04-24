import { type ChangeEvent, type FC } from 'react';

import { type FieldProps } from './FieldProps';
import labelStyles from './Label.module.css';

export const SubscriptionField: FC<FieldProps<boolean>> = ({ value, onChange }) => {
  const changeSubscription = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.checked);
  };

  return (
    <label className={labelStyles.label}>
      I want receive super annoying daily letters on my mailbox
      <input type="checkbox" checked={value} onChange={changeSubscription}/>
    </label>
  );
};
