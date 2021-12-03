import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from './Button';

export const Buttons = ({onAction, onClickNumber}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button onPress={() => {}} type={'default'}>
          AC
        </Button>
        <Button onPress={() => {}} type={'default'}>
          ±
        </Button>
        <Button onPress={() => {}} type={'default'}>
          %
        </Button>
        <Button onPress={onAction('/')} type={'action'}>
          ÷
        </Button>
      </View>
      <View style={styles.row}>
        <Button onPress={onClickNumber('7')} type={'number'}>
          7
        </Button>
        <Button onPress={onClickNumber('8')} type={'number'}>
          8
        </Button>
        <Button onPress={onClickNumber('9')} type={'number'}>
          9
        </Button>
        <Button onPress={onAction('x')} type={'action'}>
          ×
        </Button>
      </View>
      <View style={styles.row}>
        <Button onPress={onClickNumber('4')} type={'number'}>
          4
        </Button>
        <Button onPress={onClickNumber('5')} type={'number'}>
          5
        </Button>
        <Button onPress={onClickNumber('6')} type={'number'}>
          6
        </Button>
        <Button onPress={onAction('minus')} type={'action'}>
          -
        </Button>
      </View>
      <View style={styles.row}>
        <Button onPress={onClickNumber('1')} type={'number'}>
          1
        </Button>
        <Button onPress={onClickNumber('2')} type={'number'}>
          2
        </Button>
        <Button onPress={onClickNumber('3')} type={'number'}>
          3
        </Button>
        <Button onPress={onAction('sum')} type={'action'}>
          +
        </Button>
      </View>
      <View style={styles.row}>
        <Button onPress={onClickNumber('0')} type={'numberBig'}>
          0
        </Button>
        <Button onPress={onClickNumber(',')} type={'number'}>
          ,
        </Button>
        <Button onPress={onAction('result')} type={'action'}>
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
