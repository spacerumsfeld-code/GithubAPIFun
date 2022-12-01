export type ColorType = typeof Colors[keyof typeof Colors];

const Colors = {
  blue: 'bg-blue-500',
  white: 'bg-white-500',
  yellow: 'bg-yellow-500',
  green: 'bg-green-500',
  purple: 'bg-indigo-500',
};

export default Colors;
