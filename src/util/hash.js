export function hash(string, repeat) {
    string = string.repeat(repeat);
    let strLength = string.length;
    let hashNum = 5381;

    for(let i = 0; i < strLength; i++) {
        hashNum = ((hashNum << 5) + hashNum);
    }
    
    return hashNum;
}