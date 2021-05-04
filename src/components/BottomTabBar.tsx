import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  Octicons,
  Entypo,
  MaterialIcons,
  FontAwesome,
} from '@expo/vector-icons';

import { Navigation } from '../interfaces';
import ColorPalette from '../constants/ColorPalette';

const BottomTabBar = ({ navigation }: { navigation: Navigation }) => {
  const [activeTab, setActiveTab] = useState<string>('HomeScreen');

  const TabButton = ({
    title,
    screen,
    Icon,
    iconName,
  }: {
    title: string;
    screen: string;
    Icon: JSX.Element;
    iconName: string;
  }) => {
    return (
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => onPressHandle(screen)}
      >
        <Icon
          name={iconName}
          size={24}
          color={
            activeTab === screen ? ColorPalette.cyberGrape : 'rgba(0,0,0,0.4)'
          }
        />
        <Text
          style={{
            fontSize: 10,
            color:
              activeTab === screen
                ? ColorPalette.cyberGrape
                : 'rgba(0,0,0,0.4)',
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const onPressHandle = (tab: string) => {
    navigation.navigate(tab);
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <TabButton
        title="Home"
        screen="HomeScreen"
        Icon={Entypo}
        iconName="home"
      />

      <TabButton
        title="My Sits"
        screen="MySitsScreen"
        Icon={FontAwesome}
        iconName="calendar"
      />

      <TabButton
        title="Sitters"
        screen="SittersScreenNav"
        Icon={MaterialIcons}
        iconName="baby-changing-station"
      />

      <TabButton
        title="Messages"
        screen="MessagesScreen"
        Icon={Entypo}
        iconName="message"
      />

      <TabButton
        title="Profile"
        screen="ProfileScreen"
        Icon={Octicons}
        iconName="person"
      />
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  button: {
    alignItems: 'center',
  },
});
