import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {authNaviation} from '../../constants/navigations';
import {AuthStackParamList} from '../../navigations/stack/AuthStackNavigator';
import CustomButton from '../../\bcomponents/CustomButton';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNaviation.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/og_image_brandary.jpg')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인 화면으로 이동"
          variant="filled"
          onPress={() => navigation.navigate(authNaviation.LOGIN)}
        />
        <CustomButton
          label="회원가입 화면으로 이동"
          variant="outlined"
          onPress={() => navigation.navigate(authNaviation.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  imageContainer: {
    flex: 1.5,
    height: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
  },
});

export default AuthHomeScreen;
