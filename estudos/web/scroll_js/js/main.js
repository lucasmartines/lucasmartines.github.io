var appName = "scroll"; 

 
{
 
    // representa o scroll da imagem atual
    var scroll = 0;
    // não deixa o scroll passar dos limites se são 5 imagens coloque de 0 a 4
    var limitScroll = {
        min:0,max:4
    }
    // bloqueia o scroll durante a passagem de transição
    var block_scroll = false;
    var tempo_transicao = 2;
    // serve para setar e desligar o time-out
    var _timer ;
    limitScroll.max = document.getElementsByClassName("img").length - 1;

window.onresize = function(){
    if( innerWidth > 500 ){
        block_scroll = false;
      //  document.querySelector(".container-img").style.marginTop = ( 1000 * sroll ) + "vh";
        document.querySelector(".container-img").style.marginTop = 0;
        document.querySelector(".container-img").scrollTo(0,0);
        scroll = 0;
        
        console.log("RESET RESIZE SCROLL");
    }
}
 document.addEventListener("mousewheel" , function(e){
   
    if( innerWidth < 500 ){
        block_scroll = true;
        console.log("BLOCK SCROLL");
    }


    if( !block_scroll ){
        if( e.deltaY < 0){
            scroll --;
        }
        else{
            scroll++;
        }
        
        updateScroll();
    }
   
 } );

// QUANDO REALIZAR O INCREMENTO ATUALIZAR
function updateScroll(){

    //SE BLOCK SCROLL NÃO ESTIVER BLOQUEADO
  

        //limita o scroll
        if( scroll < limitScroll.min ){
            scroll = limitScroll.min;
        }
        else if( scroll > limitScroll.max ){
            scroll = limitScroll.max ;
        }
        block_scroll = true;
       
        // desbloqueia depois de um tempo o scroll

        _timer = setTimeout( function(){
            console.log("teste tempo transição");
              block_scroll = false;
               clearTimeout( _timer );
        }  , tempo_transicao * 1000 );
    
 


    document.querySelector(".container-img").style.marginTop = ( scroll * -100 ) + "vh";
    document.querySelector(".container-img").style.transition = "all " + tempo_transicao + "s";

}


}