import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {Gap} from '../../components';
import {COLORS} from '../../config/colors';
import {DIMENSIONS} from '../../config/dimensions';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <Gap height={25} />
      <Text style={styles.text}>Dromedia</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: DIMENSIONS.width,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 32,
    color: 'white',
  },
});
