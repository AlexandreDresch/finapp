import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.main,
    width: '90%',
    height: 45,
    borderRadius: 8,
    marginTop: 10
  },
  buttonText: {
    fontSize: 20,
    color: theme.colors.text_secondary
  }
});