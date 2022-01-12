import React from 'react';
import styles from './styles.css';

export const IconPresenter = ({
  iconName,
  height = 20,
  width = 20,
  ...props,
}) => (
  <svg
    height={ height }
    width={ width }
    { ...props }
  >
    <use href={`icons.svg#${ iconName }`} />
  </svg>
);

export const IconContainer = ({
  presenter,
  onClick,
  className = '',
  ...props,
}) => {
  if (onClick) className += ` ${ styles.clickable }`;
  return presenter({ onClick, className, ...props });
};

export const iconFactory = iconName => props => (
  <IconContainer
    presenter={ presenterProps => <IconPresenter { ...presenterProps } /> }
    { ...{ iconName, ...props } }
  />
);

export const TrashCanIcon = iconFactory('trash-can');
export const ChevronRightIcon = iconFactory('chevron-right');
export const SearchIcon = iconFactory('search');
export const SettingsIcon = iconFactory('settings');
