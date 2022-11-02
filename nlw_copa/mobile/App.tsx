import React from 'react'
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <h1>Home</h1>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 24
  }
});
