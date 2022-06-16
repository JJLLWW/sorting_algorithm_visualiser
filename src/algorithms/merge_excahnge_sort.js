import { swap_elems, render_two_red, clear_bars } from "./common";

// Can't get this to work.

export async function ME_sort(list, SetList, SetActive) {
    // M1
    const sz = list.length;
    let t = Math.ceil(Math.log2(sz));
    let p = Math.pow(2, t-1);
    while(p > 0) {
        // M2 - should these be re-intialised every loop?
        let [q, r, d] = [Math.pow(2, t-1), 0, p];
        console.log(q, p, q===p);
        // M5
        do {
            // M3
            for(let i=0; i<sz-d; i++) {
                if((i&p) === r) {
                    // M4
                    if(list[i] > list[i+d]) {
                        swap_elems(i, i+d, list, SetList);
                    }
                }
            }
            // M5
            if(q !== p) {
                d = q-p;
                q=q/2;
                console.log(q);
                r=p;
            }
        } while(q !== p)
        // M6
        p = Math.floor(p/2);
    }
}