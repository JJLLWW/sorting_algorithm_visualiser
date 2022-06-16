import { swap_elems, timer, render_two_red, clear_bars } from "./common";

export async function gnome_sort(list, SetList, SetActive) {
    let i = 0;
    let sz = list.length;
    while(i < sz) {
        await timer(10);
        if(i==0 || list[i] >= list[i-1]) {
            if(i != 0) {
                render_two_red(i-1, i, sz, SetActive);
            }
            i++;
        } else {
            swap_elems(i-1, i, list, SetList);
            render_two_red(i-1, i, sz, SetActive);
            i--;
        }
    }
    clear_bars(sz, SetActive);
}