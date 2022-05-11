import {ICategory} from "../../store/types/_app/categories";


export const getRandomCategories = (categories: ICategory[]): ICategory[] => {
    const length = Math.floor(Math.random() * categories.length + 1);
    let rand: number, res: ICategory[] = [];

    for(let i = 0; i < length; ++i) {
        rand = Math.floor(Math.random() * categories.length);
        if(!res.includes(categories[rand]) && categories[rand]?.data) {
            res.push(categories[rand]);
        }
    }

    return res;
}