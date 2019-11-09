import styled from 'styled-components';

const colors = {
  black: '#333',
  offWhite: '#F9F9F9',

  // main copy
  darkPurple: '#2F1D68',

  // titles, sub-titles, icons, tags
  purple: '#5524CB',

  // highlights
  yellow: '#FAE3A7',

  // links
  orange: '#E95F48',

  // graphics
  blue: '#6ef',
  pink: 'palevioletred'
};

// "medium" is default prop so must come last in conditionals
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  align-content: center;

  border: 2px solid palevioletred;
  border-radius: 32% 0;
  &:hover {
    background: pink;
    color: ${props => (props.primary ? 'purple' : colors.pink)};
    border-radius: 50% 0;
  }
`;

export default Button;
