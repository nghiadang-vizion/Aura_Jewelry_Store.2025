import { CButton } from "@coreui/react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="text-center product_card_wrapper">
      <div className="product_card_img">
        <img src={image} alt={name} className="w-100 mb-3" />
      </div>
      <p className="fw-medium m-0 mt-2">{name}</p>
      <p className="text-secondary">{price}đ</p>
      <CButton className="main_btn">Add to cart</CButton>
    </div>
  );
};
export default ProductCard;
