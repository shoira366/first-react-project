import './Service.css'
import useLang from '../../Hook/useLang'
import information from '../../Informations/infos'

function Service(){
    let [lang, setLang] = useLang()
    return(
        <section className="service">
           <div className="container">
           <h2 className="service_title">
            {information[lang].service_title}
            </h2>
            <ul className="service_list">
                <li className="service_list-item first-item">
                    <h3 className="service_list-title">{information[lang].our_product}</h3>
                    <p className="service_list-text">
                      {information[lang].our_product_text}
                    </p>
                    <a href="#tab" className="service_list-link">{information[lang].intro_link}</a>
                </li>
                <li className="service_list-item second-item">
                    <h3 className="service_list-title">{information[lang].our_service}</h3>
                    <p className="service_list-text">{information[lang].our_service_text}</p>
                    <a href="#tab" className="service_list-link">{information[lang].intro_link}</a>
                </li>
                <li className="service_list-item third-item">
                    <h3 className="service_list-title">{information[lang].our_technology}</h3>
                    <p className="service_list-text">{information[lang].our_technology_text}</p>
                    <a href="#tab" className="service_list-link">{information[lang].intro_link}</a>
                </li>
            </ul>
           </div>
        </section>
    )
}

export default Service