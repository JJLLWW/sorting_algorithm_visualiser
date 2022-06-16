export const timer = ms => new Promise(res => setTimeout(res, ms))

// inefficient, but we do want to single step through the algorithm.
// cleaner way to implement?
export function get_rand_heights(n) {
    let arr1 = Array(n);
    arr1.fill(0);
    let arr2 = arr1.map((e, i) => {return 90*Math.random()});
    return arr2;
}

export function swap_elems(i, j, list, setList) {
    let tmp = list[j];
    list[j] = list[i];
    list[i] = tmp;
    setList([...list]);
}

export function render_two_red(i, j, sz, setActive) {
    let active = Array(sz).fill(0);
    [active[i], active[j]] = [1, 1];
    setActive(active);
}

export function render_two_yellow(i, j, sz, setActive) {
    let active = Array(sz).fill(0);
    [active[i], active[j]] = [2, 2];
    setActive(active);  
}

export function clear_bars(sz, setActive) {
    let active = Array(sz).fill(0);
    setActive(active);
}