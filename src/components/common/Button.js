import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 16px;
  background: rebeccapurple;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  ${props => props.block ? 'display: block; width: 100%;' : ''}

  &:hover,
  &:focus {
    background: indigo;
  }
`;