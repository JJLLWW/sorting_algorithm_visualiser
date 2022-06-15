// TODO, be able to support an arbitray number of bars determined by some state

// style attribute, can be used alongside CSS styles (should have the height be a state)
import { useEffect, useState } from "react";
import { get_rand_heights } from "../lib/Helpers";

import ButtonBar from "./ButtonBar";

import styles from "./AlgVis.module.css";

function Bar(props) {
    return (
        <div className={props.isactive ? styles.alg_bar_active : styles.alg_bar} style={{height: String(props.height) + "%"}}></div>
    );
}

function render_bars(nbars, heights, active) {
    let bars = []
    for(let i=0; i<nbars; i++) {
        bars.push(<Bar key={i} idx={i} height={heights[i]} isactive={active[i]}/>);
    }
    return bars;
}

// has to be some way to avoid modifying all bars for swapping two elements.
function AlgVis(props) {
    const [heights, SetHeights] = useState(get_rand_heights(props.nbars));
    // may want to implement changing the number of bars later
    const [nbars, SetNbars] = useState(props.nbars);
    const [isactive, SetActive] = useState(Array(props.nbars).fill(false));
    return (
        <div className={styles.alg_vis}>            
            <ButtonBar SetHeights={SetHeights} SetActive={SetActive} nbars={nbars} heights={heights}></ButtonBar>
            <div className={styles.alg_win}>
                {render_bars(nbars, heights, isactive)}
            </div>
        </div>
    );
}

export default AlgVis;