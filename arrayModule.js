export function findMax(arr) {
    if (arr.length === 0) {
        return null; 
    }
    
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
}

export function reverseArray(arr) {
    const reversed = []; 
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]); 
    }
    return reversed; 
}

