import '../Styles/AcademicItem.css';

export default function AcademicItem({ title, school, description, src, alt }) {
  return (
    <div className="academicitem">
      <h1 className="academictitle">{`${title} - ${school}`}</h1>
      <di className="academicblock">
        <img className="academicimage" src={src} alt={alt}></img>
        <p className="academicdescription">{description}</p>
      </di>
    </div>
  );
}
