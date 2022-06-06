import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background_primary
  },
  dataContainer: {
    marginLeft: 15,
    marginBottom: 25
  },
  greetings: {
    fontSize: 18,
    fontStyle: 'italic'
  },
  balance: {
    marginTop: 5,
    fontSize: 30,
    fontWeight: 'bold'
  },
  title: {
    marginLeft: 15,
    marginBottom: 10
  },
  list: {
    paddingTop: 15,
    backgroundColor: theme.colors.background_secondary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginHorizontal: 8
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
});