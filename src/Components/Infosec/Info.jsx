import useLang from '../../Hook/useLang'
import information from '../../Informations/infos'
import './Info.css'

function Info() {
    let [lang, setLang] = useLang()
     return (
        <section className="info">
            <div className="container">
                <div className="info_big-box">
                    <div className="info_box">
                        <h2 className="info_title">{information[lang].info_title} <span className="red">{information[lang].info_title_red}</span></h2>
                        <p className="info_text textone">
                            {information[lang].info_text} <span className="red">{information[lang].red}</span>{information[lang].half_info_text} .
                        </p>
                        <p className="info_text">
                            {information[lang].info_text_second} <span className="red">{information[lang].red}</span> {information[lang].info_text_second_half}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info