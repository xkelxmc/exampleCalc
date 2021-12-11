import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Buttons} from './Buttons';
import {useCalc} from './useCalc';

export const Calc = () => {
  const {isError, currentNumber, onClickNumber, onAction} = useCalc();

  const viewNumber = !isError ? currentNumber : 'Ошибка';

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{viewNumber}</Text>
      </View>
      <Buttons
        onClickNumber={onClickNumber}
        onAction={onAction}
        isError={isError}
      />
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
