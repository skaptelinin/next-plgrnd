import { sleep, suspendable } from '@/shared';

import { List } from '../_features';
import { generateRandArray, LIST_LENGTH } from '../_shared';

const ServerList = suspendable(async () => {
  await sleep(0);
  const list = generateRandArray(LIST_LENGTH);

  return (
    <List listType="server" items={list} />
  );
});

export default ServerList;
