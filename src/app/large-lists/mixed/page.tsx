import { sleep } from '@/shared/utils/sleep';

import { UseClientList } from '../_widgets/UseClientList/UseClientList';
import { generateRandArray, LIST_LENGTH } from '../_shared';

export const revalidate = 5;

const MixedList = async () => {
  await sleep(10);
  const list = generateRandArray(LIST_LENGTH);

  return (
    <UseClientList items={list} />
  );
};

export default MixedList;
