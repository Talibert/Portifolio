import "../Styles/ProjectItem.css"
// Criando uma função que irá receber o nome da tecnologia, a descrição, a imagem e o level
export default function ProjectItem({title, description, src, alt, tag }){

let tagColor;

switch (tag) {
    case 'BackEnd':
      tagColor = 'red';
      break;
    case 'FrontEnd':
      tagColor = 'blue';
      break;
    case 'FullStack':
      tagColor = 'orange';
      break;
  }

const tagstyle = {
    backgroundColor: tagColor,
};

  return (
    // Declaração da div do item. Os eventos onMouseEnter e onMouseLeave chamam as funções declaradas
    <div
      className="projectitem"
    >
        <h1 className='projecttitle'>{title}</h1>
        <div className="projectblock">
            <img className="projectimage" src={src} alt={alt}></img>
            <div className="projectcontent">
                <p className="projectdescription">{description}</p>
                <p className='projecttag' style={tagstyle}>{tag}</p>
            </div>
            
        </div>
    </div>
  );
};