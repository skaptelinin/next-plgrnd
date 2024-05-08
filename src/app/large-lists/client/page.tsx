'use client'
import { type FC, useEffect, useState } from 'react';

import { List } from '../_features';
import { generateRandArray, LIST_LENGTH, type ListItem } from '../_shared';

const ClientList: FC = () => {
  const [list, setList] = useState<ListItem[]>([]);

  useEffect(() => {
    setList(generateRandArray(LIST_LENGTH));
  }, []);

  return (
    <List listType="client" items={list} />
  );
};

export default ClientList;
