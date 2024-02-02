import React, {useState, useEffect, useRef} from "react";
import "../Styles/Navbar.css"
import Hero from "./hero"
import 'animate.css'

export default function Navbar(){

    // Variável para alterar a classe do Menu Hamburguer
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    // Variável para alterar a variável do Menu que o Menu Hamburguer abre
    const [menu_class, setMenuClass] = useState("menu hidden")
    // Variável que define se o menu está clicado ou não
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    // Variável que define se a barra superior será exibida ou não
    const [isVisible, setIsVisible] = useState(true);
    // Variável que irá armazenar a posição anterior do scroll
    const scrollPosRef = useRef(0);

    // Função chamada quando o usuário clica no Menu Hamburguer
    const updateMenu = () => {
        // Se o Menu for clicado, o Menu Hamburguer e o menu recebem as classes de visivel e clicado
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        // Se o Menu não for clicado, o Menu Hamburguer e o menu recebem as classes de invisivel e não clicado
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        // A variavel que define se o Menu Hamburguer foi clicado é invertida
        setIsMenuClicked(!isMenuClicked)
    }

    // Função chamada sempre que há rolagem no scroll
    useEffect(() => {
        // Função para definir a visibilidade
        const handleScroll = () => {
            // Variável que irá receber a posição atual do cursor
            const currentScrollPos = typeof window !== 'undefined' && window.scrollY;
        
            // Altera o estado de isVisible dependendo da rolagem do cursor. Se a condição dentro dos parâmetros de setIsVisible for true, a barra é exibida. Caso contrário, ela é escondida.
            setIsVisible(currentScrollPos <= 0 || currentScrollPos < scrollPosRef.current);
            // Após definir a visibilidade, scrollPosRef recebe o currentScrollPos "antigo", atualizando seu valor para uma próxima verificação
            scrollPosRef.current = currentScrollPos;
        };
    
        // EventListener que chama handleScroll caso haja mudança no scroll
        window.addEventListener('scroll', handleScroll);
    
        // Realiza a limpeza quando o componente for desmontado. É uma boa prática para manter a eficiência
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

      // Variável que irá armazenar as configurações de CSS para animação da nav sumindo e aparecendo
    const transitionStyle = {
        // Opacidade de 1 a 0 conforme a visibilidade
        opacity: isVisible ? 1 : 0,
        // Height do valor original até zero conforme a visibilidade
        height: isVisible ? '4em' : 0,
        // Garante que o conteúdo não seja exibido
        overflow: 'hidden',
        // Velocidade de transição para as propriedades opacity e height
        transition: 'opacity 0.5s ease, height 0.5s ease', // Adicione as propriedades de transição aqui
    };

    const transitionStyleMenu = {
        // Opacidade de 1 a 0 conforme a visibilidade
        opacity: isVisible ? 0.8 : 0,
        width: isVisible ? "10em" : 0,
        // Garante que o conteúdo não seja exibido
        overflow: 'hidden',
        // Velocidade de transição para as propriedades opacity e height
        transition: 'opacity 0.5s ease, width 0.5s ease', // Adicione as propriedades de transição aqui
    };

    return(
        // div principal
        <div style={{width: '100%', height: '100vh'}}>
            {/*barra superior*/}
            <nav style={transitionStyle} >
                {/*div menu de hamburguer*/}
                <div className="burger-menu" onClick={updateMenu}>
                    {/*as tres divs abaixo representam os tres riscos do menu */}
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            {/*menu que é aberto quando clicamos no menu hamburguer*/}
            <div style={transitionStyleMenu} className={isVisible? menu_class : "menu hidden"}
            >
            </div>
            <Hero/>
        </div>
    )
}