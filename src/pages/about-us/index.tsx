import "./index.scss"
import { imageArray } from "../../shared/utils/images";

export const AboutUs = () => {
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
                    imageArray.map((ref, i) =>
                        <div className="card" style={{
                            backgroundImage: `${ref}`,
                            transform: transformStyles[i] ?? "none"
                        }}>{ref}</div>
                    )
                }
            </div>
        </div>
    )
}