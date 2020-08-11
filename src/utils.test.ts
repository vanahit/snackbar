import {createCSSClass} from "./utils";


test('to get string of classes', () => {
    expect(createCSSClass(['class1', 'class2 '], {"class4 ": false, "class5 ": true})).toBe("class1 class2 class5");
    expect(createCSSClass(['class1', 'class2 '], {"class4 ": false, "class5 ": undefined})).toBe("class1 class2");
});

