import "../Styles/Hero.css"
import { useEffect, useState } from "react"

export default function Hero() {
    
    // Declaração das variáveis do useState
    const [text1, setintroText1] = useState(" ")
    const [text2, setintroText2] = useState(" ")
    const [text3, setintroText3] = useState(" ")
    
    //Declaração dos textos que serão escritos
    const introText1 = "<Welcome!>"
    const introText2 = "{/*I'm Guilherme Taliberti*/}"
    const introText3 = "//And this is my Portifolio!"
    
    // UseEffect configurado para rodar sempre que a página for atualizada
    useEffect(() => {

        // Definição da função que irá receber os textos como argumento
        const writeText = (firstText, secondText, thirdText ) => {
            // Variáveis que irão controlar a posição das três strings
            let index = 0;
            let index2 = 0;
            let index3 = 0;
            // Strings que irão receber os textos atualizados
            let newText1 = "";
            let newtext2 = "";
            let newText3 = "";
            // Variáveis que controlarão quando os textos terminarem
            let finishText1 = false;
            let finishText2 = false;

            // Função que irá escrever a palavra aos poucos
            function updateText1() {
                if (index < firstText.length) {
                    newText1 += firstText[index]
                    setintroText1(newText1);
                    index++;
                    // Rechamada da função que ocorre até que o texto acabe
                    setTimeout(updateText1, 50);
                    // fisishText1 vira true porque o texto foi finalizado
                    finishText1 = index === firstText.length; 

                        // Verifica se o primeiro texto foi escrito
                        if (finishText1) {
                            // Função que irá escrever a palavra aos poucos
                            function updateText2() {
                            if (index2 < secondText.length) {
                                newtext2 += secondText[index2]
                                setintroText2(newtext2);
                                index2++;
                                // Rechamada da função que ocorre até que o texto acabe
                                setTimeout(updateText2, 50);
                                // fisishText2 vira true porque o texto foi finalizado
                                finishText2 = index2 === secondText.length;

                                    // Verifica se o segundo texto foi escrito
                                    if(finishText2) {
                                        // Função que irá escrever a palavra aos poucos
                                        function updateText3() {
                                            if (index3 < thirdText.length) {
                                            newText3 += thirdText[index3]
                                            setintroText3(newText3);
                                            index3++;
                                            // Rechamada da função que ocorre até que o texto acabe
                                            setTimeout(updateText3, 50);
                                            }
                                        }
                                        // Chamada inicial da função 3
                                        updateText3();
                                    }
                            }
                            }
                            // Chamada inicial da função 2
                            updateText2();
                        }
                }
            }
            // Chamada inicial da função 1
            updateText1();
        }
        writeText(introText1, introText2, introText3)
    },[])
    

    return(

        <div className="hero">
            <div className="texts">
                <h1 className ="introtext1">{text1}</h1>
            </div>
            <div className="texts">
                <h1 className="introtext2">{text2}</h1>
            </div>
            <div className="texts">
                <h1 className="introtext3">{text3}</h1>
            </div>
        </div>
    )
}