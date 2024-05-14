import { type FC } from 'react';

import { type SignupData } from '../../../../_features/useFormData';
import styles from './Preview.module.css';

export const Preview: FC<SignupData> = ({
  shouldSubscribe,
  username,
  gender,
}) => (
  <pre className={styles.preview}>
    &quot;username&quot;: &quot;{username}&quot;,
    <br/>
    &quot;gender&quot;: &quot;{gender}&quot;,
    <br/>
    &quot;shouldSubscribe&quot;: {String(shouldSubscribe)}
  </pre>
);
