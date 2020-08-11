
type DynamicClass = {[propName: string]: string | boolean | undefined} | undefined

export const createCSSClass = (staticClass: Array<string | undefined>, dynamicClass: DynamicClass) => {
    let result = staticClass.join(' ').trimEnd();
    if (!dynamicClass) return result;
    Object.entries(dynamicClass).forEach(([key, value]) => {
        if (value) result += ` ${key}`;
    });
    return result.trim();
};



