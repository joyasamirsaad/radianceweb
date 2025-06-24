import ProductCard from "./ProductCard";

type Product = {
  imageSrc: string;
  altText: string;
  name: string;
  description: string;
  price: string;
};

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="product px-0 sm:container sm:mx-auto sm:px-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
