import Link from 'next/link';
import Image from 'next/image';
import Banner from '@/components/Banner';

export default function about(){
    return (
        <>
            <Banner heroImageUrl='/aboutushero.jpg' bannerText="We believe everyone deserves to feel beautiful in their own skin."></Banner>
            <section id="about" className="grid-container container mx-auto px-4">
            <div className="aboutus descwhite">
                <h1>About Us</h1>
                <p>We believe everyone deserves to feel confident in their own skin. Founded with a passion for clean beauty and effective skincare, we carefully formulate each product using clinically-proven ingredients that deliver visible results without compromise. Our mission is simple: to create skincare solutions that work for real people with real skin concerns. From our sustainable packaging to our transparent ingredient lists, we&apos;re committed to honesty, quality, and helping you achieve the healthy, glowing skin you deserve.</p>
                <p>Reveal your skin&apos;s natural radiance with science-backed skincare that works!</p>
                <p>Pure ingredients, proven results, beautiful skin...</p>
                <Link href='/products'><button className="btn centerbtn self-center">Find Your Perfect Match</button></Link>
            </div>
            <div className="aboutusimage">
                <Image src="/aboutus.jpg" alt="Girl Skincare Image" className="about-image" width={300} height={400}></Image>
            </div>
            </section>
        </>
        
    );
}