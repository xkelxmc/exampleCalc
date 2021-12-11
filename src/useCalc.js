import {useCallback, useMemo, useState} from 'react';
import {Actions} from './constants';

const calcNumbersResult = {
  [Actions.SUM]: (num1, num2) => num1 + num2,
  [Actions.MINUS]: (num1, num2) => num1 - num2,
  [Actions.MULTIPLY]: (num1, num2) => num1 * num2,
  [Actions.DIVIDE]: (num1, num2) => num1 / num2,
};

const defaultState = {
  currentNumber: 0,
  currentAction: null,
  a: 0,
};

export const useCalc = () => {
  const [state, setState] = useState({...defaultState});

  const isError = useMemo(() => {
    return !Number.isFinite(state.currentNumber);
  }, [state.currentNumber]);

  const onClickNumber = n => () => {
    if (isError) {
      return;
    }
    let newString = String(state.currentNumber);
    if (n === ',') {
      console.log('todo!', n);
    } else {
      newString += n;
    }
    const newCurrentNumber = Number(newString);
    setState(prevState => ({...prevState, currentNumber: newCurrentNumber}));
  };

  const calcNumbers = useCallback(
    (num1, num2) => {
      if (calcNumbersResult[state.currentAction]) {
        return calcNumbersResult[state.currentAction](num1, num2);
      }
      return num2;
    },
    [state.currentAction],
  );

  const clearAll = () => {
    setState({
      ...defaultState,
    });
  };

  const onAction = useCallback(
    action => () => {
      if (action === Actions.CLEAR) {
        clearAll();
        return;
      }
      if (isError) {
        return;
      }

      const result = calcNumbers(state.a, state.currentNumber);

      if (
        [Actions.SUM, Actions.MINUS, Actions.MULTIPLY, Actions.DIVIDE].includes(
          action,
        )
      ) {
        setState({
          currentAction: action,
          a: result,
          currentNumber: 0,
        });
        return;
      }

      if (action === Actions.RESULT) {
        setState({
          currentAction: action,
          currentNumber: result,
          a: 0,
        });
        return;
      }

      if (action === Actions.NEGATION) {
        setState(prev => ({
          currentAction: action,
          currentNumber: prev.currentNumber * -1,
          a: 0,
        }));
        return;
      }

      if (action === Actions.PERCENT) {
        setState({
          currentAction: action,
          currentNumber: result / 100,
          a: 0,
        });
      }
    },
    [state, isError, calcNumbers],
  );

  return {isError, currentNumber: state.currentNumber, onClickNumber, onAction};
};
