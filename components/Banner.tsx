type BannerProps = {
  heroImageUrl: string;
  bannerText: string;
};

export default function Banner({ heroImageUrl, bannerText }: BannerProps) {
    return (
        <>
            <section className="hero" style={{ backgroundImage: `url(${heroImageUrl})` }}></section>

            <section className="banner">
                <p className="container mx-auto px-4">{bannerText}</p>
            </section>

        </>
    );
}