import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: wp('8%'),
    marginBottom: hp('5%'),
  },
  input: {
    width: wp('70%'),
    height: hp('6%'),
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
    borderWidth: 1,
    borderColor: '#b0b0b0',
    paddingLeft: wp('3%'),
  },
  loginButton: {
    width: wp('70%'),
    height: hp('6%'),
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: wp('4%'),
  },
});
