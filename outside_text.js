import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

//had to make it a function with arrow function 
const OutsideText = () => {
  return(
    <Text>
      I'm from the outside!
    </Text>
  );
};
export default OutsideText;
