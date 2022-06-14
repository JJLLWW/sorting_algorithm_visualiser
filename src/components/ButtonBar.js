import styles from "./ButtonBar.module.css";

// cleaner way to implement?
function get_rand_heights(n) {
    let arr1 = Array(n);
    arr1.fill(0);
    let arr2 = arr1.map((e, i) => {return   90*Math.random()});
    return arr2;
}

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
                {/* should the buttons be components in their own right? */}
                <button className={styles.Button} onClick={() => {
                    props.SetHeights(get_rand_heights(props.nbars));
                    }}>Regenerate Data</button>
                <button className={styles.Button} onClick={() => {
                    props.SetHeights(do_sort(props.heights));
                }
                }>Run Algorithm</button>
            </div>
        </nav>
    );
}