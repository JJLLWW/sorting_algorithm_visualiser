// TODO, be able to support an arbitray number of bars determined by some state

// style attribute, can be used alongside CSS styles (should have the height be a state)
import { useEffect, useState } from "react";
import { get_rand_heights } from "../lib/Helpers";

import ButtonBar from "./ButtonBar";

import styles from "./AlgVis.module.css";

function Bar(props) {
    useEffect(() => { console.log("child rendered"); });
    return (
        <div className={styles.alg_bar} style={{height: String(props.height) + "%"}}></div>
    );
}

function render_bars(nbars, heights) {
    let bars = []
    for(let i=0; i<nbars; i++) {
        bars.push(<Bar key={i} idx={i} height={heights[i]}/>);
    }
    return bars;
}

// have the number of bars and value of the heights be state.
function AlgVis(props) {
    useEffect(() => { console.log("parent rendered"); });
    const [heights, SetHeights] = useState(get_rand_heights(props.nbars));
    const [nbars, SetNbars] = useState(props.nbars);
    return (
        <div className={styles.alg_vis}>            
            <ButtonBar SetHeights={SetHeights} nbars={nbars} heights={heights}></ButtonBar>
            <div className={styles.alg_win}>
                {render_bars(nbars, heights)}
            </div>
        </div>
    );
}

export default AlgVis;