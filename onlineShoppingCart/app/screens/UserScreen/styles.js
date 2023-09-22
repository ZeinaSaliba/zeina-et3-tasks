import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
  },
  container: {
    marginTop: hp('2%'),
    backgroundColor: 'white',
    height: hp('90%'),
    width: wp('90%'),
    borderRadius: wp('2%'),
  },
  image: {
    height: hp('10%'),
    width: wp('20%'),
  },
});
