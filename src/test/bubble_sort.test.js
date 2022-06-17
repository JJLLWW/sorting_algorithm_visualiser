import "jest";
import { bubble_sort } from "../algorithms/bubble_sort";

// is hardcoding acceptable in a unit test?
let lists = [
    [5,3,1],
    [2,1,1,1,1],
    [1,2,3,4,5,6,7],
    [0.3, 0.6, 0.5]
]

function IsInc(list) {
    const sz = list.length;
    if(sz === 1) {
        return true;
    }
    for(let i=0; i<sz-1; i++) {
        if(list[i] > list[i+1]) {
            return false;
        }
    }
    return true;
}

test("bubble sort sorts lists", async () => {
    for(let list of lists) {
        // is there some way to automatically stub the last two arguments
        await bubble_sort(list, ()=>{}, ()=>{}, false, true);
        expect(IsInc(list)).toBe(true);
    }
    let list = [5, 3, 1];
})