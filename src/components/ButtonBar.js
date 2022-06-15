import styles from "./ButtonBar.module.css";
import {get_rand_heights, swap_elems, bubble_sort} from "../algorithms/common.js"

function sort_comp(a, b) {
    return a < b ? false : true;
}

function do_sort(list, ascending=true) {
    if(ascending) {
        // DANGER1: react danger zone, the return value of list.sort() has the same reference as the original array.
        // So will not cause a re-render unless ... is used to get a copy.
        return [...list.sort(sort_comp)];
    } else {
        return [...list.sort(sort_comp).reverse()];
    }
}

export default function ButtonBar(props) {
    return (
        <nav>
            <div className={styles.ButtonBar}>
                <button className={styles.Button} onClick={() => {
                    props.SetHeights(get_rand_heights(props.nbars));
                    }}>Regenerate Data</button>
                {/* TODO: stop the button from being pressed if the algortihm is already running */}
                <button className={styles.Button} onClick={() => {
                    bubble_sort(props.heights, props.SetHeights, props.SetActive);
                }}>Run Algorithm</button>
                <button className={styles.Button}>(Bubble Sort)</button>
            </div>
        </nav>
    );
}