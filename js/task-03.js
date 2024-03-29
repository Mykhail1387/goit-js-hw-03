'use strict';

const findBestEmployee = function (employees) {
    const keys = Object.keys(employees);

    let name;
    let max = 0;

    for (const key of keys) {
        if (max < employees[key]) {
            max = employees[key];
            name = key;
        }
    }
    return `${name} - ${max}`;
}


console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
);

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
);

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
);