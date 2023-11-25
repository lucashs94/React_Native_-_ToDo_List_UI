import { StatusBar } from 'react-native';
import { Tasks } from './src/screens/Tasks';

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'}/>
      <Tasks />
    </>
  );
}
