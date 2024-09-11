import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Link, LinkProps as RemixLinkProps } from '@remix-run/react';

interface BaseProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

interface ButtonProps extends BaseProps, DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  href?: never;
}

interface LinkProps extends BaseProps, Omit<RemixLinkProps, 'to'> {
  href: string;
}

type Props = ButtonProps | LinkProps;

export default function Button({ children, ...props }: Props) {
  const { variant, size, className } = props;
  const classes = `
    ${ variant === 'primary' ? `
      bg-secondary/75
      hover:bg-secondary
    ` : `
      border-2
      border-secondary/75
      hover:border-secondary
    `}
    disabled:opacity-25
    disabled:pointer-events-none
    disabled:cursor-not-allowed
    text-white
    rounded-md
    ${ size === 'small' ? 'px-4 py-2' : size === 'medium' ? 'px-6 py-3' : 'px-8 py-4' }
    ${ className }
  `;

  if (props.href) {
    const { href, ...rest } = props as LinkProps;

    return (
      <Link
        to={href}
        className={classes}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { href, ...rest } = props as ButtonProps;

  return (
    <button
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
}
