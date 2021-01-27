import React from "react";

const ProductDetail = ({ title, price, description, category, image }) => {
  return (
    <div class="d-flex justify-content-around">
      <div class="p-2">
        <img src={image} className="modeal-img" />
      </div>
      <div class="p-2">
        <h6>
          <strong>{title}</strong>
        </h6>
        <p>
          <strong>Price:</strong> ${price}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Description:</strong>
        </p>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
