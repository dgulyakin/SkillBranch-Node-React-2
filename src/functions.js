export default function checkFIOParam(str) {
    if (str) {
        const re = new RegExp('([A-Za-zА-Яа-яЁёІіЇїЄєÓó]*)', 'i');
        // console.log(str == str.match(re)[0]);
        return str == str.match(re)[0];
    };
    return false;
}