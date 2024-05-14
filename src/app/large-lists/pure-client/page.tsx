'use client'
import { type FC, useEffect, useState, useTransition } from 'react';

import { LargeList } from '../_widgets/LargeList/LargeList';
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
      : <LargeList listType="pureClient" items={list} />
  );
};

export default ClientList;
