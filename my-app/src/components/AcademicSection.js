import "../Styles/AcademicSection.css"
import AcademicItem from "./AcademicItem"

export default function AcademicSection() {
    const academics = [
        { title:"Sistemas de Informação", school:"Faculdade Estácio", description:"Curso superior na área de Tecnologia da Informação. Formação muito completa, com conteúdos que abrangem todas os pilares fundamentais da TI. Essencial para me moldar um profissional não só qualificado tecnicamente, mas também com capacidades de gestão e liderança. Iniciei no começo de 2023 e tenho previsão de término para 2026. "},
        { title:"Sistemas de Informação", school:"Faculdade Estácio", description:"Curso superior na área de Tecnologia da Informação. Formação muito completa, com conteúdos que abrangem todas os pilares fundamentais da TI. Essencial para me moldar um profissional não só qualificado tecnicamente, mas também com capacidades de gestão e liderança. Iniciei no começo de 2023 e tenho previsão de término para 2026. "},
    ]
    
    return(
        <div className="academicsection">
            <h1 className="title">
                College
            </h1>
            <div className="academicspace">
                {academics.map((academic, index) => (
                // Passando para o componente academicItem os dados de cada item da lista. O index é para auxiliar o React
                <AcademicItem key={index} title={academic.title} description={academic.description} src={academic.src} alt={academic.alt} tag={academic.tag}/>
                ))}
            </div>
        </div>
        
    )
}