import { sleep } from '@/shared/utils/sleep';

import { LargeList } from '../_widgets/LargeList/LargeList';
import { generateRandArray, LIST_LENGTH } from '../_shared';

export const revalidate = 0;

const ServerList = async () => {
  await sleep(10);
  const list = generateRandArray(LIST_LENGTH);

  return (
    <LargeList listType="server" items={list} />
  );
};

export default ServerList;
