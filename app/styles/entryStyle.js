import {StyleSheet, Platform} from 'react-native';
import theme from './theme.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  text_header: {
    marginTop: 10,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_MEDIUM,
    textAlign: 'center',
  },
  text_sub_header: {
    marginTop: 20,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 30,
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
    marginBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    marginBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    marginLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  backbutton: {
    backgroundColor: '#F85F6A',
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },
  lead: {color: '#989EB1', fontSize: 16},
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
  btn: {
    alignItems: 'center',
    marginBottom: 30,
  },
  btnGradient: {
    width: '100%',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffff',
  },
  backButton: {
    backgroundColor: '#F85F6A',
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },
});
