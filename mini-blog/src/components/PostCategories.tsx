import { categories } from '../types/IPost';

export interface IPostCategoriesProps {
    selectedCategory: string;
    handleCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const PostCategories = ({selectedCategory, handleCategoryChange}: IPostCategoriesProps) => (
    <div className="blog__section">
    <h2 className="blog__section-title">Posts Categories</h2>
    <select
        className="blog__section-dropdown"
        value={selectedCategory}
        onChange={handleCategoryChange}
    >
        <option value="">All</option>
        {categories.map((category) => (
            <option key={category.tag} value={category.tag}>
                {category.tag}
            </option>
        ))}
    </select>
    </div>
);

