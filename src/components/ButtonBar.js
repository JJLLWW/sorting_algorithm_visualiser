import styles from "./ButtonBar.module.css";
import { get_rand_heights } from "../algorithms/common.js"
import { bubble_sort } from "../algorithms/bubble_sort"
import { quick_sort } from "../algorithms/quick_sort"
import { gnome_sort } from "../algorithms/gnome_sort";
import { shell_sort } from "../algorithms/shell_sort";
import { selection_sort } from "../algorithms/selection_sort";
import { useState } from "react";

// is this a smart idea?
const algnames = new Map([
    [0, "Bubble Sort"], 
    [1, "Quick Sort"],
    [2, "Gnome Sort"],
    [3, "Shell Sort"],
    [4, "Selection Sort"]
]);

function switch_alg(cur_alg, SetAlg) {
    let nalgs = algnames.size;
    SetAlg((cur_alg+1)%nalgs);
}

export default function ButtonBar(props) {
    let [alg, SetAlg] = useState(0);
    return (
        <nav>
            <div className={styles.ButtonBar}>
                <button className={styles.Button} onClick={() => {
                    props.SetHeights(get_rand_heights(props.nbars));
                    }}>Regenerate Data</button>
                {/* TODO: stop the button from being pressed if the algortihm is already running */}
                <button className={styles.Button} onClick={() => {
                    // bubble_sort(props.heights, props.SetHeights, props.SetActive);
                    switch(alg) {
                        case 0:
                            bubble_sort(props.heights, props.SetHeights, props.SetActive);
                            break;
                        case 1:
                            quick_sort(props.heights, 0, props.nbars-1, props.SetHeights, props.SetActive, true);
                            break;
                        case 2:
                            gnome_sort(props.heights, props.SetHeights, props.SetActive);
                            break;
                        case 3:
                            shell_sort(props.heights, props.SetHeights, props.SetActive);
                            break;
                        case 4:
                            selection_sort(props.heights, props.SetHeights, props.SetActive);
                            break;
                    }
                }}>Run Algorithm</button>
                <button className={styles.Button} onClick={() => {switch_alg(alg, SetAlg)}}>{algnames.get(alg)}</button>
                <button onClick={()=>{
                    selection_sort(props.heights, props.SetHeights, props.SetActive);
                }}>Test</button>
            </div>
        </nav>
    );
}