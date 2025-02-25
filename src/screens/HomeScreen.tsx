import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { MainStackNavigationProp } from '../navigation/MainNavigator';
import moment from "moment"


const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  useEffect(() => {
    Alert.alert("moment version" + ' - ' + moment.version)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.label}>MiniApp HomeScreen</Text>
      <Button
        color="rgba(127, 103, 190, 1)"
        title="Navigate to MiniApp GalleryScreen"
        onPress={() => {
          navigation.navigate('Gallery');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
  },
});

export default HomeScreen;
