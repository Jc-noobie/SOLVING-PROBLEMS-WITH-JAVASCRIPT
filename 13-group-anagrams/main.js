const strs = ["act","pots","tops","cat","stop","hat"]; 

function groupAnagrams(strings) {
    let str = new Map() ;

    for(const string of strings) {
        const key = string.split('').sort().join('') ;
        if(!str.has(key)) {
            str.set( key, []) ;
        }
        str.get(key).push(string) ;
    }
    return Array.from(str.values()) ;
}
let result = groupAnagrams(strs).reverse() ;
console.log(result) ;