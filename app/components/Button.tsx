import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button({ children, ...props }: Props) {
  return (
    <button
      className="bg-secondary/75 hover:bg-secondary disabled:bg-secondary/25 disabled:pointer-events-none disabled:cursor-not-allowed text-white rounded-md px-4 py-2"
      {...props}
    >
      {children}
    </button>
  );
}
