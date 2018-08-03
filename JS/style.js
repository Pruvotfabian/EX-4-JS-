var num= document.getElementById("num");
var meteo = prompt("Ecrivez un numéro entre 1 et 4");
               switch (meteo){
                   
                   case '1':
                   num.innerHTML = "Si la Terre est ronde";
                   num.style.backgroundColor = "red";
                   num.style.color = "whitesmoke";
                   num.style.backgroundImage = "url(image/1.jpg)"
                   break;
                   case '2':
                   num.innerHTML = "Sous l'océan ...";
                   num.style.color = "white";
                   num.style.backgroundImage = "url(image/2.jpg)"
                   num.style.backgroundRepeat = "norepeat";
                   break;
                   case '3':
                   num.innerHTML = "Le feu sa brule";
                   num.style.color = "white";
                   num.style.backgroundImage = "url(image/4.jpg)"
                   break;
                   case '4':
                   num.innerHTML = "En apesanteur";
                   num.style.color = "black";
                   num.style.backgroundImage = "url(image/3.jpg)"
                   break;

                default:
                num.innerHTML = "Pas compris";
               }