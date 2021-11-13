import './Footer.css'

function Footer({logo}) {
    return (
        <footer>
            <div className="container">
                <div className="footer_box">
                    <div className="footer_mini-box first-mini-box">
                    <div className="footer_logo-box">
                        <a className="header_logo" href="#tab">
                            <img className="header_img" src={logo} />
                        </a>
                            <div className="countries">
                                <a href="#tab" className="dwidasa">DWIDASA</a>
                                <span className="samsara">SAMSARA</span>
                                <span className="indonesia">INDONESIA</span>
                            </div>
                    </div>
                        <h4 className="footer_title">PT Dwidasa Samsara Indonesia</h4>
                        <p className="footer_text">Ruko Jalur Sutera 29A No. 53
                            Alam Sutera Serpong, Tangerang 15323
                        </p>
                    </div>
                    <div className="footer_mini-box">
                        <h3 className="contact">Contact</h3>
                        <div className="connect-box">
                            <span>Phone :</span>
                            <a href="tel:+62.21.5314.1135">+62.21.5314.1135</a>
                        </div>
                        <div className="connect-box">
                            <span>Fax :</span>
                            <a href="tel:+62.21.5314.1135">+62.21.5314.1135</a>
                        </div>
                        <div className="connect-box">
                            <span>Email :</span>
                            <a href="mailto:community@dwidasa.com">community@dwidasa.com</a>
                        </div>
                    </div>
                </div>
            </div>
                <p className="footer_last-text">Copyright © 2015 - Dwidasa Samsara Indonesia</p>
        </footer>
    )
}

export default Footer