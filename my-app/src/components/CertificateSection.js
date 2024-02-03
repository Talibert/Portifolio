import "../Styles/CertificateSection.css"
import CertificateItem from "./CertificateItem"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function CertificateSection () {
    const certificates = [
        {title:"NodeJS Avançado", src:"nodejsavançado.jpg", alt:"nodejs avançado", url:"link do certificado"},
        {title:"JavaScript Avançado", src:"javascriptavançado.jpg", alt:"JavaScript avançado", url:"link do certificado"},
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (

        <div className="certificatesection">
            <h1 className="title">
                Meus Certificados
            </h1>
            <div className="certificatespace">
                <Slider {...settings}>
                    {certificates.map((certificate, index) => (
                        <CertificateItem key={index} title={certificate.title} src={certificate.src} alt={certificate.alt} url={certificate.url}/>
                    ))}
                </Slider>
            </div>
        </div>

    )
}