import React from 'react';
import {Alert, StyleSheet} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';

export type MainStackParamList = {
  Home: undefined;
  Gallery: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

import { BottomSheetSectionList } from "@gorhom/bottom-sheet"
import a from "dayjs"
import b from "i18next"
import c from "react-i18next"
import e from "react-native-calendars"
import f from "react-native-hole-view"
import moment from "moment"

Alert.alert(moment().format('DD/MM/YYYY hh:mm'))

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerTitle: 'MiniApp',
        headerBackTitleVisible: false,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: 'rgba(255,255,255,1)',
      }}>
      <Main.Screen name="Home" component={HomeScreen} />
      <Main.Screen name="Gallery" component={GalleryScreen} />
    </Main.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(79, 55, 139, 1)',
  },
  headerTitle: {
    color: 'rgba(255,255,255,1)',
  },
});

export default MainNavigator;
