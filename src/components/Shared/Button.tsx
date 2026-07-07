import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from '../icons';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'light' | 'teal';
  size?: 'md' | 'sm';
  /** Trailing icon; defaults to the up-right arrow. Pass null to omit. */
  icon?: ReactNode | null;
}

/** Retro raised button with a hard offset shadow. */
export default function Button({
  children,
  variant = 'light',
  size = 'md',
  icon,
  className,
  ...rest
}: ButtonProps) {
  const trailing = icon === undefined ? <ArrowUpRight width={24} height={24} /> : icon;

  return (
    <button
      className={[styles.btn, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <span>{children}</span>
      {trailing}
    </button>
  );
}
