import { type SFC } from '@/shared/types';
import { suspendable } from '@/shared/ui/suspendable';
import { sleep } from '@/shared/utils/sleep';

import styles from './RecursiveComponent.module.css';

export interface Tree {
  title: string;
  delay: number;
  children?: Tree[];
}

export const RecursiveComponent: SFC<{ tree: Tree }> = suspendable(async ({ tree }) => {
  const { delay, children, title } = tree;
  await sleep(delay);

  return (
    <div className={styles['recursive-comp']}>
      <h2>
        {title}
      </h2>
      {children?.map((tree, index) => (
        <RecursiveComponent key={index} tree={tree} />
      ))}
    </div>
  );
});
