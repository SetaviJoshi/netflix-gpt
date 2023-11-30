
import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import AppSore from './utils/AppStore';

function App() {
  return (
   <Provider store={AppSore}><Body/></Provider>
  );
}

export default App;
