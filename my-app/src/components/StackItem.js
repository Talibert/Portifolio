import "../Styles/StackItem.css"
// Criando uma função que irá receber o nome da tecnologia, a descrição, a imagem e o level
export default function StackItem({ src, alt }){

  return (
    // Declaração da div do item. Os eventos onMouseEnter e onMouseLeave chamam as funções declaradas
    <div
      className="stackitem"
    >
        <img className="stackimage" src={src} alt={alt}></img>
    </div>
  );
};