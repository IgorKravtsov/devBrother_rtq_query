

export interface CategoriesState {
    categories: ICategory[];
    activeCategories: string[] | null;
}

export interface ICategory {
    id: string
    data: string | null
}