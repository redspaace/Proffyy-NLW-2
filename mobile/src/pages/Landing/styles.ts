import { StyleSheet } from 'react-native';
import theme from '../../themes/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.purple,
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain'
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#e0e0e0',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between'
  },

  button: {
    height: 150,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
  },

  buttonPrimary: {
    backgroundColor: '#6449a6'
  },

  buttonSecondary: {
    backgroundColor: '#279c5b'
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#e0e0e0',
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },

});

export default styles;