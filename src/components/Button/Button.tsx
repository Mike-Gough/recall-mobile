import React, { ReactNode } from 'react';
import { GestureResponderEvent, TouchableHighlight, Text, View } from 'react-native';

import style from './Button.style';

type Props = {
  onPress?: (event: GestureResponderEvent) => void;
  children: ReactNode;
};

const Button = ({ onPress, children }: Props) => (
  <TouchableHighlight onPress={onPress}>
    <View style={style.container}>
      <Text>{children}</Text>
    </View>
  </TouchableHighlight>
);

export default Button;
