


export const getCartFromLocalstorage = (key: string) => {
    const data = localStorage.getItem(key);
    console.log("DATA", data)
    // if(!data) {
    //     localStorage.setItem(key, JSON.stringify([]));
    //     getCartFromLocalstorage(key);
    // }
    return (data && JSON.parse(data)) || [];
}

// const getAnyDataByKey = (key: string, fn: Function) => {
//     const data = localStorage.getItem(key),
//           parsedData = data && JSON.parse(data);
//     fn(parsedData);
// }