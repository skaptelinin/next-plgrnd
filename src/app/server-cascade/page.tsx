import { RecursiveComponent, type Tree } from './_widgets';

const COMPONENTS_TREE: Tree = {
  title: 'Root',
  delay: 1_000,
  children: [
    {
      title: 'Folder A',
      delay: 3_000,
    },
    {
      title: 'Folder B',
      delay: 1_000,
    },
    {
      title: 'Folder C',
      delay: 2_000,
      children: [
        {
          title: 'Subfolder A',
          delay: 3_000,
        },
        {
          title: 'Subfolder B',
          delay: 1_000,
        },
        {
          title: 'Subfolder C',
          delay: 2_000,
        },
      ],
    },
  ],
}

const ServerCascade = () => (
  <>
    <h1>Server components cascade</h1>
    <RecursiveComponent tree={COMPONENTS_TREE} />
  </>
);

export default ServerCascade;
