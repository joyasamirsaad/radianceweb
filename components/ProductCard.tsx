"use client";
import Image from "next/image";
import React from "react";
import {
  Button,
  /*Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,*/
} from "@material-tailwind/react"; //from "@/components/material-tailwind-client";
//import Container from "./Container";
import ModalBox from "./ModalBox";

type ProductCardProps = {
  imageSrc: string;
  altText: string;
  name: string;
  description: string;
  details: string[];
  price: string;
};

export default function ProductCard({ imageSrc, altText, name, description, details, price }: ProductCardProps) {
  const [size, setSize] = React.useState<string | null>(null);
  const handleOpen = (value:string | null) => setSize(value);

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
          <Button className="btn" onClick={() => handleOpen("md")} variant="gradient" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Discover</Button>
          <ModalBox size={size} handleOpenAction={handleOpen} mtitle={name} mdescription={details} price={price} mimgSrc={imageSrc} mimgAlt={altText} mimagePosition="right"></ModalBox>
          {/*<Dialog open={size === "md"} handler={handleOpen} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <DialogHeader placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Its a simple modal.</DialogHeader>
            <DialogBody placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <Container title="Product Details" description={[
                  "Transform your skincare routine with clean, effective formulas designed for real results. At Radiance, we combine the power of nature with cutting-edge science to create products that work for every skin type and concern.",
                  "Where healthy skin meets effortless beauty.",
                  "Unlock your most confident skin today..."
              ]}
              imgSrc="/homepage.jpg"
              imgAlt="Beautiful glowing skin"
              imagePosition="left"
            />
            </DialogBody>
            <DialogFooter className="flex items-center justify-center" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <Button className="btn" variant="gradient" onClick={()=>handleOpen(null)} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <span>Cancel</span>
              </Button>
              <Button className="btn" variant="gradient" color="green" onClick={()=>handleOpen(null)} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <span>Add to card</span>
              </Button>
            </DialogFooter>
          </Dialog>*/}
        </div>
      </div>
    </div>
  );
}
