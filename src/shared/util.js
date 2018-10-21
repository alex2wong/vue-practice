function deepClone(obj) {
    let cloned = {};
    if (typeof obj !== 'object') return null;
    for(let k in obj){
        if (obj.hasOwnProperty(k) && typeof obj[k] !== 'object') {
            cloned[k] = obj[k];
        } else if (obj[k].constructor.toString().indexOf("Object") > 0) {
            cloned[k] = this.deepClone(obj[k]);
        } else if (Array.isArray(obj[k])) {
            cloned[k] = obj[k].map((ele) => {
                // let ret = null;
                if (typeof ele !== 'object') return ele;
                else return this.deepClone(ele);
            });
            // cloned[k] = [].concat(obj[k]);
        }
    }
    return cloned;
}

export default {
    deepClone,
}
