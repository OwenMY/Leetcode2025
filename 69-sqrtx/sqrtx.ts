/*

how do we know if num is closes square root?

create product by mutiplying num by itself
if less than num cool
if greater than num set to end


main(x)
if x is 0 or 1, return x

create result at -Infinity
create start at 1
create end as x

while start is less than end
    get mid by adding start + end divided by 2 floored
    get product by multiplying mid

    if product is less than x
        set result to Max between result and mid
        set start to mid + 1
    otherise
        set end to mid - 1

return result

*/


function mySqrt(x: number): number {
    if (!x || x === 1) return x;

    let result = -Infinity;
    let start = 1;
    let end = x;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const product = mid * mid;

        if (product === x) return mid;

        if (product < x) {
            result = Math.max(result, mid);
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return result;
};