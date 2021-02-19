import {StyleSheet, Platform} from 'react-native';
import theme from '../styles/theme.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    paddingTop: 10,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_HEADER,
  },
  text_footer: {
    color: '#F85F6A',
    fontSize: theme.FONT_SIZE_FOOTER,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  signIn: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lead: {color: '#989EB1', fontSize: 16},
});
