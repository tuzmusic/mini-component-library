import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const S = {
  Wrapper: styled.div`
    border-bottom: solid 1px black;
    width: ${p => p.width}px;
    display: flex;
    gap: 12px;
  `,
  Input: styled.input`
    color: ${COLORS.gray700};
    font-size: 14px;
    font-weight: 700;
    border: none;
    
    &::placeholder {
      color: ${COLORS.gray500};
      font-weight: 400;
    }
  `,
}

const IconInput = ({
                     label,
                     icon,
                     width = 250,
                     size,
                     placeholder,
                   }) => {
  return <S.Wrapper width={width}>
    <Icon id={icon}/>
    <S.Input placeholder="Search..."/>
  </S.Wrapper>;
};

export default IconInput;
