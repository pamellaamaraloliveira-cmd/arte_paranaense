const botoesCurtir = document.querySelectorA11(".curtir");
botoesCurtir.forEach (function(botaoCurtir){
    let curtiu = false;
    botaoCurtir.addEventListener("click", curtir);
    function curtir(){
        const contador = botaoCurtir.querySelector("span");
        if(curtiu === false){
            contador.textContent++;
            curtiu = true;
        }else{
            contador.textContent--;
            curtiu = false;
        }
    }
});

const btnTema = document.querySelector(".btn-tema");
btnTema.addEventListener("clik", mudarTema);
function mudarTema(){
    document.body.classList.toggle("tema-escuro");
}