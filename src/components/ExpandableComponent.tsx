import React, { ReactPropTypes, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';

const Expandable = ({
  title,
  activeByDefault,
  children,
}: {
  title: string;
  activeByDefault: boolean;
  children: JSX.Element;
}) => {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  LayoutAnimation.configureNext({
    duration: 700,
    create: { type: 'linear', property: 'opacity' },
    update: { type: 'spring', springDamping: 0.7 },
    delete: { type: 'linear', property: 'opacity', duration: 100 },
  });

  const [isActive, setActive] = useState<boolean>(activeByDefault);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.titleButton}
        activeOpacity={0.7}
        onPress={() => setActive(!isActive)}
      >
        <Text style={styles.title}>{title}</Text>
        <View
          style={[
            styles.arrow,
            { transform: [{ rotateZ: isActive ? '135deg' : '-45deg' }] },
          ]}
        />
      </TouchableOpacity>
      {isActive && children}
    </View>
  );
};

Expandable.defaultProps = {
  activeByDefault: false,
};

export default Expandable;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: 'white',
  },
  titleButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrow: {
    height: 10,
    width: 10,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
});
