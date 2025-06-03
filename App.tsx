import 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components/native';
import Toast from 'react-native-toast-message';
import Routes from './src/routes';
import light from './src/styles/themes/light';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Routes />
      <Toast />
    </ThemeProvider>
  );
}