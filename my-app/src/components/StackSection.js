import "../Styles/StackSection.css"
import StackItem from "./StackItem"

export default function StackSection() {
    const stacks = [
        { src: "/assets/nodejslogo.png", alt: "nodejs logo"},
        { src: "/assets/javalogo.png", alt: "java logo"},
        { src: "/assets/javascriptlogo.png", alt: "javascript logo"},
        { src: "/assets/reactlogo.png", alt: "react logo"},
        { src: "/assets/htmllogo.png", alt: "html logo"},
        { src: "/assets/csslogo.png", alt: "css logo"},
        { src: "/assets/postgresqllogo.png", alt: "postgre logo"},
        { src: "/assets/githublogo.png", alt: "About me Project"},
    ]
    
    return(
        <div className="stacksection">
            <h1 className="title">
                My Stack
            </h1>
            <div className="stackspace">
                {stacks.map((stack, index) => (
                // Passando para o componente stackItem os dados de cada item da lista. O index é para auxiliar o React
                <StackItem key={index} src={stack.src} alt={stack.alt}/>
                ))}
            </div>
        </div>
        
    )
}