import { swap_elems, render_two_red, clear_bars, timer } from "./common";

const gaps = [701, 301, 132, 57, 23, 10, 4, 1]  // Ciura gap sequence

function SS_render_swap(i, j, gap, sz, SetActive) {
    let vals = Array(sz).fill(0);
    for(let k=i; k<sz; k+=gap) {
        vals[k] = 2;
    }
    for(let k=i; k>=0; k-=gap) {
        vals[k] = 2;
    }
    [vals[i], vals[j]] = [1,1];
    SetActive(vals);
}

export async function shell_sort(list, SetList, SetActive) {
    const sz = list.length;
    const used_gaps = gaps.filter((e) => { return (e < sz) ? true : false; });
    for(let gap of used_gaps) {
        for(let i=gap; i<sz; i++) {
            let tmp = list[i];
            let j=0
            for(j=i; j-gap>=0 && list[j-gap] > tmp; j-=gap) {
                await timer(100);
                // render_two_red(j, j-gap, sz, SetActive);
                SS_render_swap(j-gap, j, gap, sz, SetActive);
                list[j] = list[j-gap]; // (!)
                SetList([...list])  ;
            }
            // render_two_red(j, i, sz, SetActive);
            SS_render_swap(j, i, gap, sz, SetActive);
            list[j] = tmp; // (!)
            SetList([...list]);
        }
    }
    clear_bars(sz, SetActive);
}