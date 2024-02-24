import '../Styles/ProjectItem.css';
import { motion } from 'framer-motion';
import { useAnimatedVisibility } from '../Hooks/AnimationHooks';
// Criando uma função que irá receber o nome da tecnologia, a descrição, a imagem e o level
export default function ProjectItem({
  title,
  description,
  src,
  alt,
  tag,
  index,
}) {
  // Inicialização da variável que irá armazenar a cor da tag
  let tagColor;

  // Switch para definir a cor de acordo com o tipo do projeto
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

  // Variável que será utilizada no JSX para estilizar a tag do projeto
  const tagstyle = {
    backgroundColor: tagColor,
  };

  // Variável que configura a animação do projeto par
  const { ref: ref, animateSettings: animateSettings } = useAnimatedVisibility(
    '-100px 0px',
    { hidden: { opacity: 0, x: -250 }, visible: { opacity: 1, x: 0 } },
    { duration: 1, delay: 0.5 },
  );
  // Variável que configura a animação do projeto impar
  const { ref: refInv, animateSettings: animateSettingsInv } =
    useAnimatedVisibility(
      '-100px 0px',
      { hidden: { opacity: 0, x: 250 }, visible: { opacity: 1, x: 0 } },
      { duration: 1, delay: 0.5 },
    );

  return (
    // Declaração da div do item. Os eventos onMouseEnter e onMouseLeave chamam as funções declaradas
    <motion.div
      className="projectitem"
      {...(index % 2 == 0 || index == 0 ? animateSettings : animateSettingsInv)}
      ref={index % 2 == 0 || index == 0 ? ref : refInv}
    >
      <h1 className="projecttitle">{title}</h1>
      <div className="projectblock">
        <img className="projectimage" src={src} alt={alt}></img>
        <div className="projectcontent">
          <p className="projectdescription">{description}</p>
          <p className="projecttag" style={tagstyle}>
            {tag}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
