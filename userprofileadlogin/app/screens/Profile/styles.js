import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp('5%'),
  },
  profileImage: {
    width: hp('40%'),
    height: hp('40%'),
    borderRadius: hp('20%'),
    marginBottom: hp('5%'),
  },
  name: {
    fontSize: hp('5%'),
    fontWeight: 'bold',
  },
  description: {
    fontSize: hp('3%'),
  },
});
