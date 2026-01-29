import "./index.scss"

export const AboutUs = () => {
    const refsImages = [
        "C9lW3sFNqnWg15aSUzs55lk2VcKQzHS1naufAlbZpTv2c5W-Q6JrtM1SdrKDDRmbrtrWFB5mZmWnIRFiAs_xeEnS.jpg",
        "iV-Z89_kMiReiTMpzT_epWXOgURSzekTqWKl4_YJyllacI9-Pz2q9WWk3cEXQSOi1zaU3o0XQ1qpbpTP8peO5T7p.jpg",
        "JIdxt5LdtvSC66d7J_FwgAuai12Xp0KPS-PmXOqBet3fXCPQOHuSqK0UGi-nKfh5Ih7DDH0ynwq40kSHtb6Xqq0P.jpg",
        "6OgMklQWXwAiz5uc23UCWKyu9dobCwx9fB2nF1jfR8beJKXXZLUTPKKhI3X1vSgQnEm0mhlncrLvvBtaRK2NyRzr (1).jpg",
        "V7jhQbYGZW1EPhfqG_gduhxGgQS7AJ68DYxQ3oDVZ6bfv79550Ag3iXVoDjFhtXZn4ofiNddcmTwLaUcQBvhKbVU.jpg"
    ]
    const transformStyles = [
        "rotate(7deg) translate(-400px)",
        "rotate(0deg) translate(-200px)",
        "rotate(-10deg)",
        "rotate(10deg) translate(200px)",
        "rotate(-5deg) translate(350px)"
    ];

    return (
        <div className="about-us">
            <div className="text">
                <div className="title">Благородные стремления не спасут: прототип — не панацея</div>
                <span>Для современного мира сплочённость команды профессионалов требует от нас анализа соответствующих условий активизации. Но сторонники тоталитаризма в науке объявлены нарушающими общечеловеческие нормы этики и морали.</span>
            </div>
            <div className="cards">
                {
                    refsImages.map((ref, i) =>
                        <div className="card" style={{
                            backgroundImage: `url('${ref}')`,
                            transform: transformStyles[i] ?? "none"
                        }}></div>
                    )
                }
            </div>
        </div>
    )
}