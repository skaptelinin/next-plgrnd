import { headers } from 'next/headers';

import { sleep } from '@/shared/utils/sleep';

import { UseClientList } from '../_widgets/UseClientList/UseClientList';
import { generateRandArray, LIST_LENGTH } from '../_shared';

const MixedList = async () => {
  console.log('headers are', headers());
  await sleep(10);
  const list = generateRandArray(LIST_LENGTH);

  return (
    <UseClientList items={list} />
  );
};

export default MixedList;
