import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
        flex:1, paddingHorizontal:wp('3%')
    },
  view: {
    flexDirection: 'row',
    marginVertical: hp('1'),
    paddingLeft: wp('3%'),
    height: hp('15%'),
    width:wp('40%'),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  imageText: {
    flexDirection: 'row',
    height: hp('10%'),
    alignItems: 'center',
    display: 'flex',
  },
  viewText: {
    display: 'flex',
    height: hp('8%'),
    paddingLeft: wp('4%'),
    paddingBottom: hp('1%'),
    justifyContent: 'space-evenly',
  },
});
