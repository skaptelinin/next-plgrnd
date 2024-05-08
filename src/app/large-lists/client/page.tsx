'use client'
import { type FC, useEffect, useState, useTransition } from 'react';

import { List } from '../_features';
import { generateRandArray, LIST_LENGTH, type ListItem } from '../_shared';

const ClientList: FC = () => {
  const [list, setList] = useState<ListItem[]>([]);
  const [isPending, setTransition] = useTransition();

  useEffect(() => {
    setTransition(() => {
      setList(generateRandArray(LIST_LENGTH));
    })
  }, []);

  return (
    isPending
      ? <p>Rendering...</p>
      : <List listType="client" items={list} />
  );
};

export default ClientList;
