// TODO, be able to support an arbitray number of bars determined by some state

// style attribute, can be used alongside CSS styles (should have the height be a state)
import { useEffect, useState } from "react";
import { get_rand_heights, do_sort } from "./AlgVisHelpers";
import IntInput from "./IntInput";

function Bar(props) {
    useEffect(() => { console.log("child rendered"); });
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

// doing this for real would be tricky, don't want the bars to be so thin
// the UI looks (even more) terrible. typescript makes this less hacked out.
function validate_nbars(nbars) {
    if(typeof(nbars) != Object) {
        return 69;
    }
}

// have the number of bars and value of the heights be state.
function AlgVis(props) {
    useEffect(() => { console.log("parent rendered"); });
    const [heights, SetHeights] = useState(get_rand_heights(props.nbars));
    const [nbars, SetNbars] = useState(props.nbars);
    return (
        <div id="alg_vis">
            {/* notice this won't yet dynamically resize the array, so can't sort */}
            <IntInput text="Number of bars" InputProc={SetNbars}/>
            <button className="alg_but" id="gen_data" onClick={() => {
                SetHeights(get_rand_heights(nbars))
                }}>Regenerate Data</button>
            <button className="alg_but" id="alg_run" onClick={ () => {
                SetHeights(do_sort(heights));
                console.log(heights);
            }}>Run Algorithm</button>
            <div id="alg_win">
                {render_bars(nbars, heights)}
            </div>
        </div>
    );
}

export default AlgVis;