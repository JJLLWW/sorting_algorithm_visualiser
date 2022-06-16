import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import { swap_elems, timer, clear_bars } from "./common";

// function clear_bars(active, setActive) {
//     active.fill(0);
//     setActive(active);
// }

function qs_render_step(active, i, pivot_idx, j, bot, top, setActive) {
    active.fill(2, bot, top);
    active.fill(0,top, active.length);
    [active[i], active[pivot_idx], active[j]] = [1, 1, 1];
    setActive(active);
}

async function do_partition(list, bot, top, setlist, setActive) {
    let [i, j] = [bot-1, top+1];
    const pivot_idx = Math.floor((i+j)/2);
    const pivot = list[pivot_idx];
    while(true) {
        await timer(100);
        let active = Array(list.length).fill(0);
        active.fill(2, bot, top);
        [active[i], active[j]] = [1, 1];
        setActive(active);
        do { 
            i++; 
            let active = Array(list.length).fill(0, 0, bot);
            qs_render_step(active, i, pivot_idx, j, bot, top, setActive);
        } while(list[i] < pivot);
        do { 
            j--;
            let active = Array(list.length).fill(0, 0, bot);
            qs_render_step(active, i, pivot_idx, j, bot, top, setActive);
        } while(list[j] > pivot);
        if(i>=j) { break; }
        swap_elems(i, j, list, setlist);
    }
    await timer(10);
    return j;
}

// don't use a seperate color for the pivot
export async function quick_sort(list, bot, top, setlist, setActive, root=false) {  
    if(bot < top) {
        let pt = await do_partition(list, bot, top, setlist, setActive);
        await timer(100);
        await quick_sort(list, bot, pt, setlist, setActive);
        await timer(100);
        await quick_sort(list, pt+1, top, setlist, setActive);
    }
    if(root) {
        clear_bars(list.length, setActive);
    }
}