import "../Styles/CertificateItem.css"

export default function CertificateItem ({title, school, src, alt, url}) {
    return(
        <div className="certificateitem">
            <h1 className="certificatetitle">
                {`${title} - ${school}`}
            </h1>
            <a className="certificatelink" href={url} target="_blank" rel="noopener noreferrer">
                <img className="certificateimage" src={src} alt={alt}></img>
            </a>
        </div>
    )
}