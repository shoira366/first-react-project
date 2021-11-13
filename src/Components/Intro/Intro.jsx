import useLang from '../../Hook/useLang'
import './Intro.css'
import information from '../../Informations/infos'

console.log(information.eng.intro_title)

function Intro(){
    let [lang, setLang] = useLang()
    return(
        <section className="intro">
           <div className="container">
           <div className="intro_big-box">
               <div className="intro_box">
                   <h1 className="intro_title title_ru">
                    {information[lang].intro_title} <span className="red">{information[lang].intro_title_red}</span>
                    </h1>
                    <p className="intro_text">
                    {information[lang].intro_text}
                    </p>
                    <a className="intro_link" href="#tab">{information[lang].intro_link}</a>
               </div>
           </div>
           {/* <img src={Programmist} alt="" /> */}
           </div>
        </section>
    )
}

export default Intro