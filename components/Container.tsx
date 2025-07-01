import Link from 'next/link';
import Image from 'next/image';

type ContainerProps = {
    title: string;
    description: string[];
    btnText?: string;
    btnLink?: string;
    imgSrc: string;
    imgAlt: string;
    imagePosition: "left" | "right";
}

export default function Container({title, description, btnText, btnLink, imgSrc, imgAlt, imagePosition}: ContainerProps) {
    return (
        <section id="about" className={`container mx-auto px-4 flex flex-col md:items-center md:my-2 gap-4 md:flex-row ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}>
            <div className="aboutus desc flex-[3]">
                <h1>{title}</h1>
                {description.map((text, i) => (
                    <p key={i}>{text}</p>
                ))}
                {btnText && btnLink && (
                    <Link href={btnLink}><button className="btn centerbtn self-center">{btnText}</button></Link>
                )}
            </div>
            <div className="aboutusimage flex-[1]">
                <Image src={imgSrc} alt={imgAlt} className="about-image" width={300} height={400}></Image>
            </div>
        </section>
    );
}