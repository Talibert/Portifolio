import React, {useState} from "react";
import "../Styles/navbar.css"

const Navbar = () => {

    // Variável para alterar a classe do Menu Hamburguer
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    // Variável para alterar a variável do Menu que o Menu Hamburguer abre
    const [menu_class, setMenuClass] = useState("menu hidden")
    // Variável que define se o menu está clicado ou não
    const [isMenuClicked, setIsMenuClicked] = useState(false)

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

    return(
        // div principal
        <div style={{width: '100%', height: '100vh'}}>
            {/*barra superior*/}
            <nav>
                {/*div menu de hamburguer*/}
                <div className="burger-menu" onClick={updateMenu}>
                    {/*as tres divs abaixo representam os tres riscos do menu */}
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            {/*menu que é aberto quando clicamos no menu hamburguer*/}
            <div className={menu_class}>
            </div>
            <div className="hero">
                <img className = "profilepicture" src="/assets/guilhermeprofile.jpg" alt="foto do guilherme"></img>
                <h1 className = "introtext">Bem vindos ao meu Portifólio!</h1>
            </div>
        </div>
    )
}

export default Navbar