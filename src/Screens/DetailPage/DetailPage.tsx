import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DetailPage = () => {
  return (
    <View style={styles.DetailPageContainer}>
      <Text>DetailPage</Text>
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  DetailPageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
