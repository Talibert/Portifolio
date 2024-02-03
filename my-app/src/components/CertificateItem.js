import "../Styles/CertificateItem.css"

export default function CertificateItem ({title, src, alt, url}) {
    return(
        <div className="certificateitem">
            <h1 className="certificatetitle">
                {title}
            </h1>
            <a className="certificatelink" href={src} target="_blank" rel="noopener noreferrer">
                <img className="certificateimage" src={src} alt={alt}></img>
            </a>
        </div>
    )
}