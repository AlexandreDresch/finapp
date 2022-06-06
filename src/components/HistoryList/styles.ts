import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    padding: 10,
  },
  type: {
    flexDirection: 'row'
  },
  typeText: {
    color: theme.colors.text_secondary,
    fontSize: 16,
    marginLeft: 5
  },
  balance: {
    fontSize: 22,
    fontWeight: '700'
  }
});