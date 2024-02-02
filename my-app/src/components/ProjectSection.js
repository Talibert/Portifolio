import "../Styles/ProjectSection.css"
import ProjectItem from "./ProjectItem"

export default function ProjectSection() {
    const projects = [
        { title:"About Me", description: "O About Me é um projeto feito utilizando ReactJS, com o objetivo de documentar em um site/app os detalhes da minha trilha profissional e um pouco da minha personalidade. Através de uma página com duas caras, é possível trocar entre a face profissional e a pessoal. Quer conhecer mais sobre meus estudos e tecnologias? Talvez meus jogos e musicas favoritas? É lá!", src: "/assets/githubLogo.png", alt: "About me Project", tag: "FrontEnd" },
        { title:"API NodeJS", description: "O JavaScript é uma linguagem muito poderosa e versatil. Por conta disso, achei interessante utilizá-lo no BackEnd, através do node. Essa API possui sistema de login e autenticação, rotas CRUD para Clientes, Usuários e Contatos, filtros completos em todas elas e integração com o SGBD PostgreSQL. Pretendo aplicar essa API em um projeto FullStack em breve!", src: "/assets/githubLogo.png", alt: "API NodeJS Project", tag: "BackEnd" },
        { title:"Password Generator", description: "O Password Generator foi uma verdadeira aula de manipulação de string e elementos do DOM utilizando JavaScript puro. O projeto é simples, mas muito sólido em todas as chamadas de funções, o que é muito bom para entender os fluxos que um código pode tomar durante a execução", src: "/assets/githubLogo.png", alt: "Password Generator Project", tag: "FrontEnd" },
    ]
    
    return(
        <div className="projectsection">
            <h1 className="title">
                My Projects
            </h1>
            <div className="projectspace">
                {projects.map((project, index) => (
                // Passando para o componente projectItem os dados de cada item da lista. O index é para auxiliar o React
                <ProjectItem key={index} title={project.title} description={project.description} src={project.src} alt={project.alt} tag={project.tag}/>
                ))}
            </div>
        </div>
        
    )
}