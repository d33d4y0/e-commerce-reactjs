import { MdOutlineStarHalf, MdOutlineStarOutline, MdOutlineStar   } from "react-icons/md";

type ProductCardProps = {
  name: string;
  price: number;
  rating: number;
  image: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, rating }) => {

  const renderRating = (rating: number) => {
    const ratingArray = [1,2,3,4,5];
    return ratingArray.map((ratingItem) => {
      if (ratingItem <= rating) {
        return <MdOutlineStar key={ratingItem} className="inline" />;
      } else if (ratingItem === Math.ceil(rating) && !Number.isInteger(rating)) {
        return <MdOutlineStarHalf key={ratingItem} className="inline" />;
      } else {
        return <MdOutlineStarOutline key={ratingItem} className="inline" />;
      }
    });
  }

  return (
    <div className="flex flex-col">
      <div className="static">
        <img
          className="h-[349px] w-[262px] object-cover"
          src={image}
          alt="Product Image"
        />
      </div>
      <div className="">
        {renderRating(rating)}
        <p className="">{name}</p>
        <p className="">{`$${price}`}</p>
      </div>
    </div>
  );
};
export default ProductCard;
