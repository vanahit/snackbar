

export const createCSSClass = (staticClass: string[], dynamicClass: object) => {
    let result = staticClass.join(' ').trimEnd();
    if (!dynamicClass) return result;
    Object.entries(dynamicClass).forEach(([key, value]: [string, boolean]) => {
        if (value) result += ` ${key}`;
    });
    return result.trim();
};



