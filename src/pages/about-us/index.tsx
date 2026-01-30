import "./index.scss"
import { imageArray } from "../../shared/utils/images";

export const AboutUs = () => {
    const transformStyles = [
        "rotate(7deg)",
        "rotate(0deg)",
        "rotate(-10deg)",
        "rotate(10deg)",
        "rotate(-5deg)"
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
                            backgroundImage: `url(${ref})`,
                            transform: transformStyles[i] ?? "none"
                        }}></div>
                    )
                }
            </div>
        </div>
    )
}