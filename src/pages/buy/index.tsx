import "./index.scss"

export const Buy = () => {
    return (
        <div className="buy">
            <div className="title">Наши партнеры:</div>
            <div className="partners">
                {
                    Array(6).fill(0).map((_, i) => (
                        <div className="partner">Лого {i+1} партнера</div>
                    ))
                }
            </div>
        </div>
    )
}