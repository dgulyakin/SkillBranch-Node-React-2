export default function checkFIOParam(str) {
    if (str) {
        const re = new RegExp('([^0-9]*)', 'i');
        // console.log(str == str.match(re)[0]);
        return str == str.match(re)[0];
    };
    return false;
}