import {Routes, store} from '../Config';
import {Provider} from "react-redux";
import './App.scss';

const App = () => {
    return(
        <Provider store={store}>
            <Routes />
        </Provider>
    )
};

export default App;
