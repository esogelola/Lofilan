import {StyleSheet, Platform} from 'react-native';
import theme from './theme.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 25,
  },
  image: {
    width: 160,
    height: 182,
    resizeMode: 'contain',
    marginBottom: 25,
  },
  largeTitle: {
    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 32,
    color: '#000000',
  },
  container2: {
    flex: 3,
    marginHorizontal: 20,
  },
  lead: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    color: '#989EB1',
    marginTop: 0,
    padding: 5,
  },
  smallOrange: {
    fontFamily: 'Asap',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#F85F6A',
    marginTop: 0,
    padding: 5,
    textDecorationLine: 'underline',
  },

  primary: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#F85F6A',
  },
  secondary: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#989EB1',
  },
  underLine: {
    textDecorationLine: 'underline',
  },
  textCenter: {
    textAlign: 'center',
  },
  center: {
    alignSelf: 'center',
  },
  btn: {
    margin: 25,
  },
  mbt0: {
    marginTop: 0,
  },
  mb1: {
    marginBottom: 5,
  },
  backbutton: {
    backgroundColor: '#F85F6A',
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
