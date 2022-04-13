import { useNavigate } from "react-router-dom";
import {
  Body,
  BackgroundImage,
  CategoryItemContainer,
} from "./category-item.styles";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const handleGoToCategory = () => navigate(route);
  return (
    <CategoryItemContainer onClick={handleGoToCategory}>
      <BackgroundImage bgImage={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
