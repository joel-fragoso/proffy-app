import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8257e5',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    maxWidth: 160,
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#fff',
    marginVertical: 40,
  },
});

export default styles;
