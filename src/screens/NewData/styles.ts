import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background_primary
  },
  textInput: {
    height: 50,
    width: '90%',
    backgroundColor: theme.colors.background_secondary,
    marginTop: 30,
    fontSize: 16,
    padding: 5,
    borderRadius: 8
  },
  submitButton: {
    height: 50, 
    width: '90%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.income,
    borderRadius: 8
  },
  submitText: {
    fontSize: 20,
    fontWeight: '800',
    color: theme.colors.text_secondary,
  }
});