import { type FC } from 'react';

import { type Gender, type SignupData } from '../../_features';
import { GenderField, Preview, SubscriptionField, UsernameField } from './_ui';
import styles from './SignupForm.module.css';

export const SignupForm: FC<{
  formData: SignupData,
  changeForm: (value: Partial<SignupData>) => void;
}> = ({ formData, changeForm }) => {
  const changeUsername = (username: string): void => {
    changeForm({ username });
  };

  const changeGender = (gender: Gender): void => {
    changeForm({ gender });
  };

  const changeSubscription = (shouldSubscribe: boolean): void => {
    changeForm({ shouldSubscribe });
  };

  return (
    <form className={styles.form}>
      <UsernameField value={formData.username} onChange={changeUsername} />
      <GenderField value={formData.gender} onChange={changeGender} />
      <SubscriptionField value={formData.shouldSubscribe} onChange={changeSubscription} />
      <Preview {...formData} />
    </form>
  );
};
