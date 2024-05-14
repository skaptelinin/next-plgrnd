'use client'
import { type FC } from 'react';

import { LargeList } from '../LargeList/LargeList';
import { type ListItem } from '../../_shared';

export const UseClientList: FC<{ items: ListItem[] }> = ({ items }) => (
  <LargeList items={items} listType="useClient" />
);
