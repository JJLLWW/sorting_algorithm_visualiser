import './App.css';

import AlgVis from './AlgVis.js';

function App() {
    let nbars = 6;
    return (
        <div className="App">
            <header className="App-header">
                <AlgVis nbars={nbars}/>
            </header>
        </div>
    );
}

export default App;
