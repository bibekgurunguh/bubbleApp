import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

const ToggleSwitch = ({
  title,
  activeByDefault,
}: {
  title: string;
  activeByDefault: boolean;
}) => {
  const [isActive, setActive] = useState<boolean>(activeByDefault);
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Switch value={isActive} onValueChange={() => setActive(!isActive)} />
    </View>
  );
};

ToggleSwitch.defaultProps = {
  activeByDefault: false,
};

export default ToggleSwitch;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
  titleText: {
    fontWeight: 'bold',
  },
});
