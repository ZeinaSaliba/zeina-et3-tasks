import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({

  containerButton:{
    flexDirection:"row",
    width:wp('40%'),
    display:"flex",
    justifyContent:"space-around",
  },
  goNext:{
    height:hp('3%'),
    marginTop:hp('2%'),
    display:"flex",
    justifyContent:'center',
    alignItems:"flex-end",
    width:wp('90%'),
    backgroundColor:"#d5d5d5"
  },
});
