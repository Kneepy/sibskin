import "./index.scss"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const Feedback = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    function toggleAccordion(index: number) {
        if (activeIndex === index) {
            setActiveIndex(null)
            return
        }

        setActiveIndex(index)
    }

    return (
        <div className="feedback">
            <div className="left">
                <div className="title">Популярные вопросы</div>
                <span>Господа, новая модель организационной деятельности требует от нас анализа кластеризации усилий.</span>
                <div className="contacts">
                    Если у вас остались вопросы: <br /> Электронная почта <br /> Контактный номер телефона
                </div>
            </div>
            <div className="right">
                <div className="accordion">
                    <div className="title">Заказы</div>
                    {
                        Array(3).fill(0).map((_, i) =>
                            <div className="accordion-item" key={i}>
                                <div className="accordion-title" onClick={() => toggleAccordion(i)}>
                                    Не следует забывать, что чистосердечное признание
                                    <span className={`${activeIndex === i ? "active" : ""} material-symbols-rounded`}>chevron_forward</span>
                                </div>
                                    <AnimatePresence initial={true} mode="wait">
                                        { activeIndex === i &&
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: 100 }}
                                                transition={{ duration: .1 }}
                                                exit={{ height: 0 }}
                                                className="accordion-collapse"
                                            >
                                                Не следует, однако, забывать, что семантический
                                                разбор внешних противодействий в значительной степени обусловливает важность
                                                новых
                                                предложений. А ещё элементы политического процесса, вне зависимости от их
                                                уровня,
                                                должны быть в равной степени предоставлены сами себе.
                                            </motion.div>
                                        }
                                    </AnimatePresence>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}