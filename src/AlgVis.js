// style attribute, can be used alongside CSS styles (should have the height be a state)
import { useState } from "react";

// cleaner way to implement?
function get_rand_heights(n) {
    let arr1 = Array(n);
    arr1.fill(0);
    let arr2 = arr1.map((e, i) => {return   90*Math.random()});
    return arr2;
}

function Bar(props) {
    return (
        <div className="alg_bar" style={{height: String(props.height) + "%"}}></div>
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
    const [heights, SetHeights] = useState(get_rand_heights(props.nbars));
    return (
        <div id="alg_vis">
            <button className="alg_but" id="alg_run">Run Algorithm</button>
            <form onSubmit={(e) => {e.preventDefault();     console.log("hbasdbasjd")}}>
                <input />
            </form>
            <button className="alg_but" id="gen_data" onClick={() => {
                SetHeights(get_rand_heights(props.nbars))
                }}>Regenerate Data</button>
            <div id="alg_win">
                {render_bars(props.nbars, heights)}
            </div>
        </div>
    );
}

export default AlgVis;