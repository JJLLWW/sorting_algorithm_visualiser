import './App.css';

import Board from './Board.js'
import AlgVis from './AlgVis.js';

// this will listen to all keypresses, even if they are in a form which ideally
// should handle them instead. Not a great idea.
document.addEventListener('keypress', (e) => {
    console.log(e.key, " pressed.");
    if(e.key == "r") {
        
    }
})

// do props have to be strings?
function App() {
    let nbars = 6;
    return (
        <div className="App">
        <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <Board width="3" height="3"/>
            <AlgVis nbars={nbars}/>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
    );
}

export default App;
