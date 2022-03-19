import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    fontSize: 14,
    iconSize: 11
  },
  large: {
    fontSize: 18,
    iconSize: 16
  }
}
const S = {
  Wrapper: styled.div`
    border-bottom: solid 1px black;
    width: ${p => p.width}px;
    display: flex;
    gap: 12px;
  `,
  Input: styled.input`
    color: ${COLORS.gray700};
    font-size: ${p => sizes[p.size].fontSize}px;
    font-weight: 700;
    border: none;

    &::placeholder {
      color: ${COLORS.gray500};
      font-weight: 400;
    }
  `,
  IconWrapper: styled.div`
    margin-bottom: -2px;
  `,
}

const IconInput = ({
                     label,
                     icon,
                     width = 250,
                     size,
                     placeholder,
                   }) =>
  <S.Wrapper width={width}>
    <Icon id={icon} size={sizes[size].iconSize}/>
    <S.Input size={size} placeholder={placeholder}/>
  </S.Wrapper>;

export default IconInput;
