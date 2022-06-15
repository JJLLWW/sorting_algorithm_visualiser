import { swap_elems, timer } from "./common";

// TODO: might be an idea to record which bars each pass has swapped.
// color change logic for active bars here as will be different for different algorithms.
export async function bubble_sort(list, setlist, setActive, desc=false) {
    let delay = 10;
    let nswaps = 0;
    let sz = list.length;
    do {
        nswaps = 0;    
        for(let i=0; i<sz-1; i++) {
            await timer(delay);
            let active = Array(sz).fill(0);
            [active[i], active[i+1]] = [1, 1];
            setActive(active);
            if(!desc && list[i] > list[i+1]) {
                swap_elems(i, i+1, list, setlist);
                nswaps++;
            } else if(desc && list [i] < list[i+1]) {
                swap_elems(i, i+1, list, setlist);
                nswaps++;
            }
        }
    } while(nswaps > 0);
    setActive(Array(sz).fill(false));
}