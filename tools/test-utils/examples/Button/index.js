import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 5px 10px;
  background-color: ${props => props.theme.colors.primary.default};
  border: none;
  color: white;
  
  :hover {
    background-color: ${props => props.theme.colors.primary.hover};
  }
`;

export default Button;
