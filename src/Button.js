import React from 'react';
import {Pressable, Text, StyleSheet, Dimensions} from 'react-native';

export const Button = ({type, onPress, children, disabled}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        styles[`${type}Button`],
        {opacity: disabled ? 0.5 : pressed ? 0.7 : 1},
      ]}>
      <Text style={[styles.text, styles[`${type}Text`]]}>{children}</Text>
    </Pressable>
  );
};

const window = Dimensions.get('window');
const padding = 16;
const buttonsInRow = 4;
const buttonSize =
  ((window.width || 390) - padding * (2 + buttonsInRow - 1)) / buttonsInRow;

const styles = StyleSheet.create({
  button: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    backgroundColor: '#ff9f0a',
  },
  numberButton: {
    backgroundColor: '#343434',
  },
  numberBigButton: {
    width: buttonSize * 2 + padding,
    alignItems: 'flex-start',
    paddingLeft: (buttonSize - 20) / 2,
    backgroundColor: '#343434',
  },
  defaultButton: {
    backgroundColor: '#a5a5a5',
  },
  text: {
    fontSize: 32,
  },
  actionText: {
    color: '#ffffff',
  },
  numberBigText: {
    color: '#ffffff',
  },
  numberText: {
    color: '#ffffff',
  },
  defaultText: {
    color: '#000000',
  },
});
