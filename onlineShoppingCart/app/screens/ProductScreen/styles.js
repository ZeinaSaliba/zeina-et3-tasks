import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
         paddingHorizontal:wp('3%')
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

  addButton: {
    backgroundColor:"lightgreen",
    width:wp('7%'),
    height:hp('3%'),
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5
  },
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
