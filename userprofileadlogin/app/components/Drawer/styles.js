import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  image: {
    height: hp('8.5%'),
    width: wp('17%'),
    borderRadius: wp('10%'),
    borderWidth: 1,
    borderColor: '#7401B8',
  },
});
