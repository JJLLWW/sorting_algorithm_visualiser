const timer = ms => new Promise(res => setTimeout(res, ms))

// inefficient, but we do want to single step through the algorithm.
// cleaner way to implement?
export function get_rand_heights(n) {
    let arr1 = Array(n);
    arr1.fill(0);
    let arr2 = arr1.map((e, i) => {return   90*Math.random()});
    return arr2;
}

export function swap_elems(i, j, list, setList) {
    let tmp = list[j];
    list[j] = list[i];
    list[i] = tmp;
    setList([...list]);
}

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
            let active = Array(sz).fill(false);
            [active[i], active[i+1]] = [true, true];
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