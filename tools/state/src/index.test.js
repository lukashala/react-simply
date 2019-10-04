import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StateContext, StateProvider, getState } from './index';

test('StateContext', () => {
  // INFO: do we need to expose StateContext at all?
  expect(StateContext).toHaveProperty('Consumer');
  expect(StateContext).toHaveProperty('Provider');
});

test('StateProvider & getState', () => {
  const EN = 'Hello, World!';
  const FR = 'Bonjour le monde!';
  const TRANSLATE = 'translate';

  function Wrapper() {
    const [state, dispatch] = getState();
    return (
      <div data-testid="wrapper">
        <h1 data-testid="h1">{state.message}</h1>
        <button
          data-testid="button"
          onClick={() =>
            dispatch({
              type: TRANSLATE,
              message: FR
            })
          }
        />
      </div>
    );
  }

  function reducer(state, action) {
    switch (action.type) {
      case TRANSLATE:
        return { message: action.message };
      default:
        throw new Error();
    }
  }

  const { getByTestId, getByText } = render(
    <StateProvider initialState={{ message: EN }} reducer={reducer}>
      <Wrapper />
    </StateProvider>
  );

  expect(getByText(EN)).toBeDefined();
  fireEvent.click(getByTestId('button'));
  expect(getByText(FR)).toBeDefined();
});
