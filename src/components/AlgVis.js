// TODO, be able to support an arbitray number of bars determined by some state

// style attribute, can be used alongside CSS styles (should have the height be a state)
import { useEffect, useState } from "react";
import { get_rand_heights } from "../lib/Helpers";

import ButtonBar from "./ButtonBar";

import styles from "./AlgVis.module.css";

// No built-in enum, for now isactive === 0 => white, isactive === 1 => red, isactive === 2 => pivot

function Bar(props) {
    return (
        <div className={(props.isactive !== 1) ? ((props.isactive === 2) ? styles.alg_bar_pivot : styles.alg_bar) : styles.alg_bar_active } style={{height: String(props.height) + "%"}}></div>
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
    const [isactive, SetActive] = useState(Array(props.nbars).fill(0));
    return (
        <div className={styles.alg_vis}>
            {/* Can this be refactored? */}
            <ButtonBar SetHeights={SetHeights} SetActive={SetActive} nbars={nbars} heights={heights}></ButtonBar>
            <div className={styles.alg_win}>
                {render_bars(nbars, heights, isactive)}
            </div>
        </div>
    );
}

export default AlgVis;