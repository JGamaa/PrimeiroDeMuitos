//DESAFIO CLASSIFICADOR DE NIVEL DE HEROI
let Nome = "JGamaa"
let Xp = 10001
let Niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

if (Xp < 1000){
console.log ("O Herói de nome " + Nome + " está no nível de " + Niveis[0])
}
    else if ( 1000 > Xp || Xp <=2000){
    console.log ("O Herói de nome " + Nome + " está no nível de " + Niveis[1])
}
        else if ( 2000 > Xp || Xp <=5000){

            console.log ("O Herói de nome " + Nome + " está no nível de " + Niveis[2])
}
            else if ( 6000 > Xp || Xp<=7000){

                console.log ("O Herói de nome " + Nome + " está no nível de " + Niveis[3])
}
                else if ( 7000 > Xp || Xp<=8000){

                    console.log ("O Herói de nome " + Nome + " está no nível de " + Niveis[4])
}
            else if ( 8000 > Xp || Xp <=9000){

                console.log ("O Herói de nome " + Nome + " está no nível de " + Niveis[5])
}
        else if ( 9000 > Xp || Xp <=10000){

            console.log ("O Herói de nome " + Nome + " está no nível de " + Niveis[6])
}
else if (Xp > 10000){

    console.log ("O Herói de nome " + Nome + " está no nível de " + Niveis[7])
}