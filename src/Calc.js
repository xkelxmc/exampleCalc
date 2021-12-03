import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Buttons} from './Buttons';
//Ошибка
export const Calc = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [currentAction, setCurrentAction] = useState(null);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const onClickNumber = n => () => {
    let newString = String(currentNumber);
    if (n === ',') {
      console.log('todo!', n);
    } else {
      newString += n;
    }
    const newCurrentNumber = Number(newString);
    setCurrentNumber(newCurrentNumber);
  };

  const calcNumbers = (num1, num2) => {
    if (currentAction === 'sum') {
      return num1 + num2;
    } else if (currentAction === 'minus') {
      return num1 - num2;
    } else {
      return num2;
    }
  };

  const onAction = action => () => {
    setCurrentAction(action);
    const result = calcNumbers(a, currentNumber);
    console.log({action, a, currentNumber, result});
    if (action === 'sum' || action === 'minus') {
      setA(result);
      setCurrentNumber(0);
    }
    if (action === 'result') {
      setCurrentNumber(result);
      setA(0);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <Buttons onClickNumber={onClickNumber} onAction={onAction} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000000', paddingHorizontal: 16},
  resultContainer: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  resultText: {fontSize: 72, color: '#ffffff'},
});
