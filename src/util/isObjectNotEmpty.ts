
export const isObjectNotEmpty = (obj: object, key: string) => {
    return Object.keys(obj).includes(key);
}