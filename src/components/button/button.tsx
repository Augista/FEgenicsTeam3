// components/Button.js
import { ReactNode } from 'react';
import Typography from '../Typography';

interface ButtonProps {
  href: string;
  children: ReactNode;
  size?: 'small' | 'medium' | 'large'; 
  className?: string;
}

export default function Button({ href, children, size = 'medium' }: ButtonProps) {
  // Define classes based on the size prop
  const sizeClasses = {
    small: 'px-6 py-1', // Small button styles
    medium: 'px-8 py-2', // Medium button styles
    large: 'px-10 py-3', // Large button styles
  };

  // Define typography variants based on the size
  const typographyVariant: { [key in 'small' | 'medium' | 'large']: 'bs' | 'bm' | 'bl' } = {
    small: 'bs', // Small button text variant
    medium: 'bm', // Medium button text variant
    large: 'bl',  // Large button text variant
  };

  return (
    <a href={href}>
      <button className={`w-fit bg-button rounded-md ${sizeClasses[size]}`}>
        <Typography as="span" variant={typographyVariant[size]} weight="medium" className="text-white">
          {children}
        </Typography>
      </button>
    </a>
  );
}
