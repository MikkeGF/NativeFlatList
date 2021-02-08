import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, Text } from 'react-native';
import { DATA } from './DATA';
import Row from './Row';





export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Row person={item} />
        )}>
      </FlatList>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
