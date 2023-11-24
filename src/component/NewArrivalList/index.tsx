import ProductCard from "../ProductCard";

type NewArrivalListProps = {
  productList: Product[];
};

const NewArrivalList: React.FC<NewArrivalListProps> = ({ productList }) => {
  const getRandomNumber = (): number => {
    const min = 1;
    const max = 5;
    const step = 0.5;
    const randomValue =
      Math.floor(Math.random() * ((max - min) / step + 1)) * step + min;
    return randomValue;
  };

  return (
    <div className="flex gap-6 overflow-auto">
      {productList.slice(0, 6).map((product) => (
        <ProductCard
          key={product.id}
          price={product.price}
          rating={getRandomNumber()}
          image={product.images[0]}
          name={product.title}
        />
      ))}
    </div>
  );
};

export default NewArrivalList;
