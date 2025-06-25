type BannerProps = {
  heroImageUrl: string;
  bannerText: string;
  bgColor?: string;
  textColor?: string;
};

export default function Banner({ heroImageUrl, bannerText, bgColor, textColor}: BannerProps) {
    return (
        <>
            <section className="hero" style={{ backgroundImage: `url(${heroImageUrl})` }}></section>

            <section className="banner" style={{backgroundColor: bgColor, color: textColor}}>
                <p className="container mx-auto px-4 !text-lg">{bannerText}</p>
            </section>

        </>
    );
}