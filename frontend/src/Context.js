import React from 'react';

const Context = React.createContext({
 user: null,
 setAuthenticatedUser: () => {},
});
export default Context;

export function withContext(Component) {
  return props => (
      <Context.Consumer>
      {context => (
        <Component
          {...context}
          {...props}
        />
      )}
    </Context.Consumer>
  );
}
