export function toList(w: string[], conjunction: string) {
    const wLength = w.length;
    
    switch (wLength) {
        case 1: 
            return w[0];
        case 2: 
            return `${w[0]} ${conjunction} ${w[1]}`;
        default: 
            return `${w.slice(0, wLength - 1).join(", ")}, ${conjunction} ${w[wLength - 1]}`;
    }
}