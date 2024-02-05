import "../Styles/CertificateSection.css"
import CertificateItem from "./CertificateItem"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function CertificateSection () {
    const certificates = [
        {title:"NodeJS Avançado", school:"Dev Samurai", src:"nodejsavançado.jpg", alt:"nodejs avançado", url:"link do certificado"},
        {title:"JavaScript Avançado", school:"Dev Samurai", src:"javascriptavançado.jpg", alt:"JavaScript avançado", url:"link do certificado"},
        {title:"Banco de Dados Avançado", school:"Dev Samurai", src:"bancodedadosavançado.jpg", alt:"Banco de Dados avançado", url:"link do certificado"},
        {title:"HTML e CSS Avançado", school:"Dev Samurai", src:"htmlecssavançado.jpg", alt:"HTML e CSS avançado", url:"link do certificado"},
        {title:"NodeJS Básico", school:"Dev Samurai", src:"nodejsbásico.jpg", alt:"nodejs Básico", url:"link do certificado"},
        {title:"JavaScript Básico", school:"Dev Samurai", src:"javascriptbásico.jpg", alt:"JavaScript Básico", url:"link do certificado"},
        {title:"Banco de Dados Básico", school:"Dev Samurai", src:"bancodedadosbásico.jpg", alt:"Banco de Dados Básico", url:"link do certificado"},
        {title:"HTML e CSS Básico", school:"Dev Samurai", src:"htmlecssbásico.jpg", alt:"HTML e CSS Básico", url:"link do certificado"},
        {title:"ReactJS", school:"Danki Code", src:"reactjs.jpg", alt:"ReactJS", url:"link do certificado"},
        {title:"JAVA Fundamentos", school:"FIAP", src:"javafundamentos.jpg", alt:"JAVA Fundamentos", url:"link do certificado"},
        {title:"CyberSecurity", school:"FIAP", src:"cybersecurity.jpg", alt:"CyberSecurity", url:"link do certificado"},
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (

        <div className="certificatesection">
            <h1 className="title">
                Meus Certificados
            </h1>
            <div className="certificatespace">
                <Slider className="slider" {...settings}>
                    {certificates.map((certificate, index) => (
                        <CertificateItem key={index} title={certificate.title} school={certificate.school} src={certificate.src} alt={certificate.alt} url={certificate.url}/>
                    ))}
                </Slider>
            </div>
        </div>

    )
}