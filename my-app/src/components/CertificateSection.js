import '../Styles/CertificateSection.css';
import CertificateItem from './CertificateItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CertificateSection() {
  const certificates = [
    {
      title: 'NodeJS Avançado',
      school: 'Dev Samurai',
      src: '/assets/Certificado - NodeJS Avançado.jpg',
      alt: 'nodejs avançado',
      url: 'https://class.devsamurai.com.br/certificates/9811d9b7-3d95-4da0-acc2-7ca209722f47/validate',
      description:
        'Desenvolvi ao longo do curso uma API completa utilizando o NodeJS. Aprendi como estruturar o código, utilizando a arquitetura MVC, separando os Models e os Controllers. O ORM utilizado foi o Sequelize.',
    },
    {
      title: 'JavaScript Avançado',
      school: 'Dev Samurai',
      src: '/assets/Certificado - JavaScript Avançado.jpg',
      alt: 'JavaScript avançado',
      url: 'https://class.devsamurai.com.br/certificates/7140cab3-2602-4369-b4eb-585839f1c160/validate',
      description:
        'Aprendi os fundamentos mais complexos do JavaScript. Este curso me ensinou como manipular objetos, funções e arrays, tal como criá-los. Manipular o DOM, criar elementos HTML e editar as classes através do JavaScript também foram conceitos aprendidos.',
    },
    {
      title: 'Banco de Dados Avançado',
      school: 'Dev Samurai',
      src: '/assets/Certificado - Banco de Dados Avançado.jpg',
      alt: 'Banco de Dados avançado',
      url: 'https://class.devsamurai.com.br/certificates/b2c8ce10-b69a-4a57-ac62-589edc06f50a/validate',
      description:
        'Aprendi na prática como é feita a modelagem de um banco de dados, utilizei queries complexas com condições, paginação e ordenação e me especializei no SGBD PgAdmin4 do PostgreSQL.',
    },
    {
      title: 'HTML e CSS Avançado',
      school: 'Dev Samurai',
      src: '/assets/Certificado - HTML e CSS Avançado.jpg',
      alt: 'HTML e CSS avançado',
      url: 'https://class.devsamurai.com.br/certificates/26255911-2c9b-43d8-84d0-c6b62679e74a/validate',
      description:
        'No HTML utilizei conceitos como Display-Flex e Grid para desenvolver páginas bem organizadas e responsivas ao conteúdo. No CSS, aprendi diversas propriedades de estilização e fui apresentado as Media Queries para formatar a página em diferentes dispositivos.',
    },
    {
      title: 'NodeJS Básico',
      school: 'Dev Samurai',
      src: '/assets/Certificado - NodeJS Básico.jpg',
      alt: 'nodejs Básico',
      url: 'https://class.devsamurai.com.br/certificates/434f209d-82e0-45dd-afa8-1773363693d8/validate',
      description:
        'Introdução ao NodeJS e a utilização do JavaScript no Back-End.',
    },
    {
      title: 'JavaScript Básico',
      school: 'Dev Samurai',
      src: '/assets/Certificado - JavaScript Básico.jpg',
      alt: 'JavaScript Básico',
      url: 'https://class.devsamurai.com.br/certificates/e69f05e3-3bca-45a7-aadd-d07630ae45c3/validate',
      description:
        'Introdução ao JavaScript com as variáveis, funções e fluxo de código',
    },
    {
      title: 'Banco de Dados Básico',
      school: 'Dev Samurai',
      src: '/assets/Certificado - Banco de Dados Básico.jpg',
      alt: 'Banco de Dados Básico',
      url: 'https://class.devsamurai.com.br/certificates/68be4cc6-7eff-4b13-b4fe-4c39503b240b/validate',
      description: 'Introdução ao Banco de Dados e a linguagem SQL.',
    },
    {
      title: 'HTML e CSS',
      school: 'Dev Samurai',
      src: '/assets/Certificado - HTML e CSS.jpg',
      alt: 'HTML e CSS Básico',
      url: 'https://class.devsamurai.com.br/certificates/22f47868-83b5-498c-a481-4d18982a2ad8/validate',
      description: 'Introdução ao desenvolvimento web com HTML e CSS.',
    },
    {
      title: 'ReactJS',
      school: 'Danki Code',
      src: '/assets/Certificado - ReactJS.jpg',
      alt: 'ReactJS',
      url: 'https://cursos.dankicode.com/validate-certificate',
      description:
        'Aprendi o Framework de JavaScript para desenvolvimento web. Este Portifólio foi desenvolvido em React logo após o curso... Escrever o HTML dentro JavaScript com JSX e transformar tudo em componentes é muito poderoso e eficiente.',
    },
    {
      title: 'JAVA Fundamentos',
      school: 'FIAP',
      src: '/assets/Certificado - Java.jpg',
      alt: 'JAVA Fundamentos',
      url: 'https://on.fiap.com.br/local/nanocourses/validar-certificado',
      description:
        'Introdução a linguagem Java e ao Paradigma de Orientação a Objetos.',
    },
    {
      title: 'CyberSecurity',
      school: 'FIAP',
      src: '/assets/Certificado - CyberSecurity.jpg',
      alt: 'CyberSecurity',
      url: 'https://on.fiap.com.br/local/nanocourses/validar-certificado',
      description:
        'Aprendi sobre a Segurança da Informação, ferramentas de monitoramento de tráfego de rede, táticas de ataques e táticas de defesa contra ataques cibernéticos.',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div id="certificate" className="certificatesection">
      <h1 className="title">Meus Certificados</h1>
      <div className="certificatespace">
        <Slider className="slider" {...settings}>
          {certificates.map((certificate, index) => (
            <CertificateItem
              key={index}
              title={certificate.title}
              school={certificate.school}
              src={certificate.src}
              alt={certificate.alt}
              url={certificate.url}
              description={certificate.description}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
