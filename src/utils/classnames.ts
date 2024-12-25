import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

export function cn(...inputs: Parameters<typeof classNames>) {
  return twMerge(classNames(...inputs));
}