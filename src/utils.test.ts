import {createCSSClass} from "./utils";


test.each([
    [
        ['class1', undefined],
        {"class4 ": false, "class5 ": true},
        "class1 class5"
    ],
    [
        ['class1', 'class2'],
        {"class4 ": undefined, "class5 ": true},
        "class1 class2 class5"
    ],
    [[], undefined, ''],
])('.createCSSClass(%s, %s)', (a, b, expected) => {
    expect(createCSSClass(a, b)).toBe(expected);
});

