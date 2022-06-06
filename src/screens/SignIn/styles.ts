import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: theme.colors.background_primary,
  },
  logo: {
    marginBottom: 15,
    width: 250,
    height: 250
  },
  inputArea: {
    flexDirection: 'column',
    width: '100%'
  },
  input: {
    backgroundColor: theme.colors.background_secondary,
    width: '90%',
    marginHorizontal: 20,
    fontSize: 17,
    color: theme.colors.text,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,    
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.main,
    width: '90%',
    height: 45,
    borderRadius: 8,
    marginTop: 10
  },
  submitText: {
    fontSize: 20,
    color: theme.colors.text_secondary
  },
  registerButton: {
    marginTop: 10,
    marginBottom: 9
  },
  registerText: {
    
  }
});