export interface ListItem {
  title: string;
  description: string;
}

export const generateRandArray = (length: number): ListItem[] => (new Array(length)
  .fill(null)
  .map((_, index) => ({
    title: `${index}. ${Math.random()}`,
    description: `${Math.random()}-${Math.random()}-${Math.random()}`
})));
