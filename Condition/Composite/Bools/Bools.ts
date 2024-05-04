export function and(bools: Array<boolean>): boolean {
    for (const bool of bools)
        if (!bool)
            return false;
    return true;
}

export function or(bools: Array<boolean>): boolean {
    for (const bool of bools)
        if (bool)
            return true;
    return false;
}

export function xor(bools: Array<boolean>): boolean {
    let count = 0;
    for (const bool of bools)
        if (bool)
            count++;
    return count === 1;
}

export function nand(bools: Array<boolean>): boolean {
    for (const bool of bools)
        if (bool)
            return false;
    return true;
}