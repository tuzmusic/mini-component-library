import React, { useRef } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    fontSize: 14,
    gap: 8,
    iconSize: 16,
  },
  large: {
    fontSize: 18,
    gap: 12,
    iconSize: 24
  }
}
const S = {
  Wrapper: styled.div`
    display: flex;
    gap: ${p => sizes[p.size].gap}px;
    align-items: center;
    padding: 2px;
    color: ${COLORS.gray700};
    width: ${p => p.width}px;

    :hover {
      color: black;
    }

    :focus-within {
      outline: solid medium Highlight;
      outline-offset: 2px;
    }

    border-bottom: solid 1px currentColor;
  `,
  Input: styled.input`
    color: currentColor;
    font-size: ${p => sizes[p.size].fontSize}px;
    font-weight: 700;
    border: none;

    :focus {
      outline: none;
    }

    &::placeholder {
      color: ${COLORS.gray500};
      font-weight: 400;
    }
  `,
  HiddenLabel: styled.label`
    width: 0;
    visibility: hidden;
  `,
  InputWrapper: styled.div`
    display: flex;
  `,
}

const IconInput = ({
                     label,
                     icon,
                     width = 250,
                     size,
                     placeholder,
                   }) => {

  // if we have multiple inputs they need to have unique ids
  const id = `${label}-${Math.random()}`

  return <S.Wrapper width={width} size={size}>
    <label htmlFor={id}>
      <Icon strokeWidth={2} id={icon} size={sizes[size].iconSize}/>
      <VisuallyHidden>{label}</VisuallyHidden>
    </label>

    <S.Input id={id} size={size} placeholder={placeholder}/>
  </S.Wrapper>;
}

export default IconInput;
