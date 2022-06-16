import { swap_elems, render_two_red, clear_bars, timer, render_two_yellow } from "./common";

function render_yellow_pres(i, j, r_idx, list, SetActive) {

}

export async function selection_sort(list, SetList, SetActive) {
    const sz = list.length;
    for(let j=sz-1; j>=0; j--) {
        let max_idx=0;
        for(let i=0; i<=j; i++) {
            // await timer(10);
            // render_two_yellow(i, max_idx, sz, SetActive);
            if(list[i] > list[max_idx]) {
                max_idx = i;
            }
        }
        await timer(100);
        render_two_red(max_idx, j, sz, SetActive);
        swap_elems(max_idx, j, list, SetList);
    }
    clear_bars(sz, SetActive);
}