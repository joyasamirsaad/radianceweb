import Image from "next/image";

type ProductCardProps = {
  imageSrc: string;
  altText: string;
  name: string;
  description: string;
  price: string;
};

export default function ProductCard({ imageSrc, altText, name, description, price }: ProductCardProps) {
  return (
    <div className="cards">
      <div className="product-images image-hover-effect inline-block overflow-hidden">
        <Image src={imageSrc} alt={altText} width={300} height={300} />
      </div>
      <div className="product-desc">
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{description}</p>
          <p>{price}</p>
          <button className="btn">Discover</button>
        </div>
      </div>
    </div>
  );
}
