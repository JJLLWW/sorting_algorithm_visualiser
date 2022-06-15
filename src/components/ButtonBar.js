import styles from "./ButtonBar.module.css";
import {get_rand_heights} from "../algorithms/common.js"
import {bubble_sort} from "../algorithms/bubble_sort"
import {quick_sort} from "../algorithms/quick_sort"

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
                <button onClick={()=>{
                    quick_sort(props.heights, 0, props.nbars-1, props.SetHeights, props.SetActive)
                }}>Test</button>
            </div>
        </nav>
    );
}