// cleaner way to implement?
export function get_rand_heights(n) {
    let arr1 = Array(n);
    arr1.fill(0);
    let arr2 = arr1.map((e, i) => {return   90*Math.random()});
    return arr2;
}

function sort_comp(a, b) {
    return a < b ? false : true;
}

export function do_sort(list, ascending=true) {
    if(ascending) {
        // DANGER1: react danger zone, the return value of list.sort() has the same reference as the original array.
        // So will not cause a re-render unless ... is used to get a copy.
        return [...list.sort(sort_comp)];
    } else {
        return [...list.sort(sort_comp).reverse()];
    }
}
