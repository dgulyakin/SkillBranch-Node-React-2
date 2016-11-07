export function checkFIOParam(str) {
    if (str) {
        const re = new RegExp('([A-Za-zА-Яа-яЁёІіЇїЄєÓó\']*)', 'i');
        // console.log(str == str.match(re)[0]);
        return str == str.match(re)[0];
    };
    return false;
};

export function normalizeStr(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
};