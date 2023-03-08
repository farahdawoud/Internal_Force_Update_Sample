import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import ButtonStyles from './Button.styles';
import {Text} from 'react-native';

type ButtonComponent = {
  backgroundColor?: string;
  title: string;
  titleStyle?: any;
  viewStyle?: ViewStyle;
  onPress?: any;
};

const Button = ({
  backgroundColor,
  title,
  titleStyle,
  viewStyle,
  onPress,
}: ButtonComponent): JSX.Element => {
  const style = {
    ...ButtonStyles.buttonContainer,
    backgroundColor: backgroundColor,
    ...viewStyle,
  };
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
