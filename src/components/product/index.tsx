import "./index.scss"
import previewImage from "../../assets/preview.png"

export const Product = () => {
    const previewImageStyle = { backgroundImage: `url(${previewImage})` }

    return (
        <div className="product">
            <div className="label">
                <div className="title">Свободу слова не задушить, пусть даже обереги никого не защитили</div>
                <span>Наше дело не так однозначно, как может показаться: глубокий уровень погружения позволяет выполнить важные задания по разработке укрепления моральных ценностей.</span>

                <button>Купить</button>
            </div>
            <div className="preview" style={previewImageStyle}></div>
        </div>
    )
}