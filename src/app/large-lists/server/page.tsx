import { headers } from 'next/headers';

import { sleep } from '@/shared/utils/sleep';

import { LargeList } from '../_widgets/LargeList/LargeList';
import { generateRandArray, LIST_LENGTH } from '../_shared';

const ServerList = async () => {
  console.log('headers are', headers());
  await sleep(10);
  const list = generateRandArray(LIST_LENGTH);

  return (
    <LargeList listType="server" items={list} />
  );
};

export default ServerList;
