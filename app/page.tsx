import Link from 'next/link';
import Banner from '@/components/Banner';
import ProductList from "@/components/ProductList";
import { productsData } from "@/data/products";

export default function homepage() {
  const featuredProducts = productsData.slice(0, 4); //to display some of the products not all of them
  return (
    <>
      <Banner heroImageUrl='/heroimage.png' bannerText="Because when your skin feels good, you feel unstoppable."></Banner>
      {/*<section className="hero"></section>

      <section className="banner">
          <p className="container mx-auto px-4">Because when your skin feels good, you feel unstoppable.</p>
      </section>*/}

      <section className="descwhite container mx-auto px-4">
          <h1 className="text-center">Your Success Stories Inspire Us</h1>
          <div className="reviews">
            <div className="reviews-div gap-2">
              <h2>Proof That Great Skin is Possible</h2>
              <p className="italic">&quot;I struggled with cystic acne for years and tried everything. Within 6 weeks of using this routine, my skin completely transformed. The breakouts stopped, my scars faded, and now I wake up confident every single day. This isn&apos;t just skincare - it&apos;s life-changing.&quot; — Sarah M., verified customer</p>
            </div>
            <div className="reviews-images">
              <div className="reviews-div">
                <img src="acnebefore.jpg" alt="Acne Before" className="w-[90%] sm:w-[80%] md:w-[600px] lg:w-[700px] xl:w-[800px] h-auto p-4 mb-0 object-cover"></img>
                <h2>Before</h2>
              </div>
              <div className="reviews-div">
                <img src="acneafter.jpg" alt="Acne After" className="w-[90%] sm:w-[80%] md:w-[600px] lg:w-[700px] xl:w-[800px] h-auto p-4 mb-0 object-cover"></img>
                <h2>After</h2>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="reviews container mx-auto px-4">
            <div className="reviews-images">
              <div className="reviews-div">
              <img src="lipsbefore.jpg" alt="Lips Before" className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-auto p-4 mb-0 object-cover"></img>
              <h2>Before</h2>
              </div>
              <div className="reviews-div">
                <img src="lipsafter.jpg" alt="Lips After" className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-auto p-4 mb-0 object-cover"></img>
                <h2>After</h2>
              </div>
            </div>
            
            <div className="reviews-div gap-2 container mx-auto px-4">
              <h2>Results speak louder than promises</h2>
              <p className="italic">&quot;My lips were constantly cracked and peeling no matter what I used. This lip balm doesn&apos;t just moisturize - it actually heals. After just three days, my lips felt soft and looked healthy again. I&apos;ve been using it for months and will never switch to anything else.&quot; — Jessica L., verified customer</p>
            </div>
          </div>
        
      </section>

    <section id="products" className="desc">
          <h1 className="text-center  px-0 sm:container sm:mx-auto sm:px-4">What Everyone&apos;s Raving About</h1> 
          <ProductList products={featuredProducts} />
          {/*
          <div className="product  px-0 sm:container sm:mx-auto sm:px-4">
              <div className="cards">
                  <div className="product-images"><img src="faceoil.jpg" alt="Face Oil"></img></div>
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
                  <div className="product-images"><img src="bodycream.jpg" alt="Body Cream"></img></div>
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
                  <div className="product-images"><img src="lipbalm.jpg" alt="Lip Balm"></img></div>
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
                  <div className="product-images"><img src="eyemask.jpg" alt="Eye Mask"></img></div>
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
          <Link href="/products"><button className="btn centerbtn">View More</button></Link>
    </section>
    </>
    

  );
}
