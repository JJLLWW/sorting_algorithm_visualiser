// import "./App.css";
import styles from "./App.module.css"

import AlgVis from './AlgVis.js';

function App() {
    let nbars = 50  ;
    return (
        <div className={styles.App}>
            <h1 className={styles.App_title}>Algorithm Visualiser</h1>
            <header className={styles.App_header}>
                <AlgVis nbars={nbars}/>
            </header>
        </div>
    );
}

export default App;
