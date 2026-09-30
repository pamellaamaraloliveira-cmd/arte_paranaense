const botoesCurtir = document.querySelectorA11(".curtir");
botoesCurtir.forEach (function(botaoCurtir){
    let curtiu = false;
    botaoCurtir.addEventListener("click", curtir);
    function curtir(){
        const contador = botaoCurtir.querySelector("span");
        if(curtir === false){
            contador.textContent++;
            curtir = true;
        }else{
            contador.textContent--;
            curtir = false;
        }
    }
});