import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from './Button';
import {Actions} from './constants';

export const Buttons = ({onAction, onClickNumber, isError}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button onPress={onAction(Actions.CLEAR)} type={'default'}>
          AC
        </Button>
        <Button
          onPress={onAction(Actions.NEGATION)}
          type={'default'}
          disabled={isError}>
          ±
        </Button>
        <Button
          onPress={onAction(Actions.PERCENT)}
          type={'default'}
          disabled={isError}>
          %
        </Button>
        <Button
          onPress={onAction(Actions.DIVIDE)}
          type={'action'}
          disabled={isError}>
          ÷
        </Button>
      </View>
      <View style={styles.row}>
        <Button onPress={onClickNumber('7')} type={'number'} disabled={isError}>
          7
        </Button>
        <Button onPress={onClickNumber('8')} type={'number'} disabled={isError}>
          8
        </Button>
        <Button onPress={onClickNumber('9')} type={'number'} disabled={isError}>
          9
        </Button>
        <Button
          onPress={onAction(Actions.MULTIPLY)}
          type={'action'}
          disabled={isError}>
          ×
        </Button>
      </View>
      <View style={styles.row}>
        <Button onPress={onClickNumber('4')} type={'number'} disabled={isError}>
          4
        </Button>
        <Button onPress={onClickNumber('5')} type={'number'} disabled={isError}>
          5
        </Button>
        <Button onPress={onClickNumber('6')} type={'number'} disabled={isError}>
          6
        </Button>
        <Button
          onPress={onAction(Actions.MINUS)}
          type={'action'}
          disabled={isError}>
          -
        </Button>
      </View>
      <View style={styles.row}>
        <Button onPress={onClickNumber('1')} type={'number'} disabled={isError}>
          1
        </Button>
        <Button onPress={onClickNumber('2')} type={'number'} disabled={isError}>
          2
        </Button>
        <Button onPress={onClickNumber('3')} type={'number'} disabled={isError}>
          3
        </Button>
        <Button
          onPress={onAction(Actions.SUM)}
          type={'action'}
          disabled={isError}>
          +
        </Button>
      </View>
      <View style={styles.row}>
        <Button
          onPress={onClickNumber('0')}
          type={'numberBig'}
          disabled={isError}>
          0
        </Button>
        <Button onPress={onClickNumber(',')} type={'number'} disabled={isError}>
          ,
        </Button>
        <Button
          onPress={onAction(Actions.RESULT)}
          type={'action'}
          disabled={isError}>
          =
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
