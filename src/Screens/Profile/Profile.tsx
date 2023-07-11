import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.ProfileContainer}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  ProfileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
