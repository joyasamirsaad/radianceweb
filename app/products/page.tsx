"use client";

import Link from 'next/link';
//import Image from 'next/image';
import Banner from '@/components/Banner';
import ProductList from "@/components/ProductList";
import { productsData } from "@/data/products";
import GridContainer from '@/components/Container';

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react"; //from "@/components/material-tailwind-client";

type IconProps = {
  id: number;
  open: number;
};
function Icon({ id, open }: IconProps) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#3E5C50"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}
export default function Products() {
    const [open, setOpen] = React.useState(0);
    const [alwaysOpen, setAlwaysOpen] = React.useState(true);
    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value:number) => setOpen(open === value ? 0 : value);
    return (
        <>
            <Banner heroImageUrl='/productshero.jpg' bannerText="Transform your routine, transform your confidence." bgColor='#F2F5F0' textColor='#2B2B2B'></Banner>
            <GridContainer title="Our Product Range" description={[
                    "Discover our carefully curated collection of skincare essentials, each formulated with premium ingredients and backed by science. From gentle cleansers to powerful serums, every product is designed to address specific skin concerns while maintaining the health of your skin barrier.",
                    "Clinically-tested formulas for visible results.",
                    "Find your perfect skincare match..."
                ]}
                btnText="Browse All Products" 
                btnLink="#products"
                imgSrc="/products.jpg"
                imgAlt="Radiance skincare products collection"
                imagePosition="left"
            />
            <section id="products" className="desc">
                <div className="container mx-auto px-4">
                    <Accordion open={alwaysOpen} className="border-b-2 border-[#7BA487] mb-2" icon={<Icon id={1} open={alwaysOpen ? 1 : 0} />} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <AccordionHeader onClick={handleAlwaysOpen} className={`${alwaysOpen ? "text-[#3E5C50] font-semibold" : "black"}`} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>New Arrivals</AccordionHeader>
                        <AccordionBody>
                            <ProductList products={productsData} />
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} className="border-b-2 border-[#7BA487] mb-2" icon={<Icon id={2} open={open} />} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <AccordionHeader onClick={() => handleOpen(2)} className={`${open === 2 ? "text-[#3E5C50] font-semibold" : "black"}`} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Other Products</AccordionHeader>
                        <AccordionBody>
                            <ProductList products={productsData} />
                        </AccordionBody>
                    </Accordion>
                </div> 
                
                {/*<h2 className='text-center'>New Arrivals</h2>
                <ProductList products={productsData} />
                <h2 className='text-center'>Other Products</h2>
                <ProductList products={productsData} />*/}
                {/*
                <div className="product  px-0 sm:container sm:mx-auto sm:px-4">
                    <div className="cards">
                        <div className="product-images image-hover-effect inline-block overflow-hidden"><Image src="/faceoil.jpg" alt="Face Oil" width={300} height={300}></Image></div>
                        <div className="product-desc">
                            <div>
                                <p>Face oil</p>
                            </div>
                            <div>
                                <p>Nourishing botanical blend that deeply hydrates and restores your skin&apos;s natural radiance</p>
                                <p>$24.99</p>
                                <button className="btn">Discover</button> 
                            </div>
                        </div>
                    </div>
                    
                    <div className="cards">
                        <div className="product-images"><Image src="/bodycream.jpg" alt="Body Cream" width={300} height={300}></Image></div>
                        <div className="product-desc">
                            <div>
                                <p>Body Cream</p>
                            </div>
                            <div>
                                <p>Rich moisturizing formula that softens and smooths skin for all-day comfort and protection</p>
                                <p>$18.99</p>
                                <button className="btn">Discover</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cards">
                        <div className="product-images"><Image src="/lipbalm.jpg" alt="Lip Balm" width={300} height={300}></Image></div>
                        <div className="product-desc">
                            <div>
                                <p>Lip Balm</p>
                            </div>
                            <div>
                                <p>Hydrating lip treatment with natural oils that heals, protects, and adds subtle shine</p>
                                <p>$8.99</p>
                                <button className="btn">Discover</button>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="product-images"><Image src="/eyemask.jpg" alt="Eye Mask" width={300} height={300}></Image></div>
                        <div className="product-desc">
                            <div>
                                <p>Eye Mask</p>
                            </div>
                            <div>
                                <p>Revitalizing under-eye patches that reduce puffiness, dark circles, and fine lines instantly</p>
                                <p>$12.99</p>
                                <button className="btn">Discover</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product  px-0 sm:container sm:mx-auto sm:px-4">
                    <div className="cards">
                        <div className="product-images"><Image src="/faceoil.jpg" alt="Face Oil" width={300} height={300}></Image></div>
                        <div className="product-desc">
                            <div>
                                <p>Face oil</p>
                            </div>
                            <div>
                                <p>Nourishing botanical blend that deeply hydrates and restores your skin&apos;s natural radiance</p>
                                <p>$24.99</p>
                                <button className="btn">Discover</button> 
                            </div>
                        </div>
                    </div>
                    
                    <div className="cards">
                        <div className="product-images"><Image src="/bodycream.jpg" alt="Body Cream" width={300} height={300}></Image></div>
                        <div className="product-desc">
                            <div>
                                <p>Body Cream</p>
                            </div>
                            <div>
                                <p>Rich moisturizing formula that softens and smooths skin for all-day comfort and protection</p>
                                <p>$18.99</p>
                                <button className="btn">Discover</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cards">
                        <div className="product-images"><Image src="/lipbalm.jpg" alt="Lip Balm" width={300} height={300}></Image></div>
                        <div className="product-desc">
                            <div>
                                <p>Lip Balm</p>
                            </div>
                            <div>
                                <p>Hydrating lip treatment with natural oils that heals, protects, and adds subtle shine</p>
                                <p>$8.99</p>
                                <button className="btn">Discover</button>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="product-images"><Image src="/eyemask.jpg" alt="Eye Mask" width={300} height={300}></Image></div>
                        <div className="product-desc">
                            <div>
                                <p>Eye Mask</p>
                            </div>
                            <div>
                                <p>Revitalizing under-eye patches that reduce puffiness, dark circles, and fine lines instantly</p>
                                <p>$12.99</p>
                                <button className="btn">Discover</button>
                            </div>
                        </div>
                    </div>
                </div>*/}
                <Link href="/delivery"><button className="btn centerbtn">Order Now</button></Link>
            </section>
        </>
        
    );
}