//Import Libraris
import ReactDOM from 'react-dom';

//Import CSS
import 'bootswatch/dist/darkly/bootstrap.min.css';
import './components/Counter/counter.css';

//Import Components
import Counter from '../src/components/Counter/counter';

//Import Store
import store from './store';
import { Provider } from 'react-redux' 

const App = () => {
  return ( 
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))