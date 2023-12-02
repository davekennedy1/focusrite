export const indexOfNextEmptyLine = (arr: string[]) => {
    return arr.findIndex(line => line.trim().length === 0) > 0 ? 
        arr.findIndex(line => line.trim().length === 0) 
        : arr.length
}