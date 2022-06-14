// cleaner way to implement?
export function get_rand_heights(n) {
    let arr1 = Array(n);
    arr1.fill(0);
    let arr2 = arr1.map((e, i) => {return   90*Math.random()});
    return arr2;
}