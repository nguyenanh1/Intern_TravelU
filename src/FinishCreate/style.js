import {StyleSheet, Dimensions} from 'react-native';
const full = Dimensions.get("window").width;
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  toolbar: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  icback:{
    flex: 1
  },
  nextstep:{
    width: full,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems:"center",
    justifyContent:"center"
  }
});
export default styles;