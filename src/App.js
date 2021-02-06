import './App.css';
import ContainerFirst from './containers/container-first/ContainerFirst';
import ContainerSecond from './containers/container-second/ContainerSecond';

function App() {
    return (
        <div className="App">
            <ContainerFirst />
            <hr />
            <ContainerSecond />
        </div>
    );
}

export default App;
