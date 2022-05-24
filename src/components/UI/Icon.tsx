import "./Icon.scss";
import React from 'react'
import sprite from "../../images/icons/sprite.svg";
import {IconProps} from '../../models/propTypes';

const Icon: React.FC<{ icon: IconProps }> = (props) => {
  return (
    <svg
      className={props.icon.className}
      fill={props.icon.color}
      width={props.icon.width}
      height={props.icon.height}
    >
      <use
        href={`${sprite}#icon-${props.icon.name}`}
        xlinkHref={`${sprite}#icon-${props.icon.name}`}
      />
    </svg>
  );
};

export default Icon;
