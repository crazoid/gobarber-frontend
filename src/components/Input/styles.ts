import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;

  display:flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props => props.isFocused && css`
    color: #ff9900;
    border-color: #ff9900;
  `}

  ${props => props.isFilled && css`
    color: #ff9900;
  `}

  ${props => props.isErrored && css`
    border-color: #c53030;
  `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #f4ede8;

      &::placeholder {
        color: #666360;
      }
    }

    svg {
      margin-right: 16px;
    }
`;
