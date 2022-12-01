import React from 'react';

export enum ButtonSizeEnum {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

const styles = {
  xs: 'rounded px-2.5 py-1.5 text-xs',
  sm: 'rounded-md px-3 py-2 text-sm leading-4',
  md: 'rounded-md px-4 py-2 text-sm',
  lg: 'rounded-md px-4 py-2 text-base',
  xl: 'rounded-md px-6 py-3 text-base',
};

type ButtonProps = {
  text: string;
  onClick: () => void;
  size?: ButtonSizeEnum;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  size = ButtonSizeEnum.md,
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className={`${styles[size]} inline-flex items-center border border-transparent bg-indigo-600 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    >
      {text}
    </button>
  );
};
