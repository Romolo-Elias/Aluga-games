function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botaoJogo = gameClicado.querySelector('.dashboard__item__button');
    
    if(imagem.classList.contains('dashboard__item__img--rented'))
        imagem.classList.remove('dashboard__item__img--rented');
        else{
            imagem.classList.add('dashboard__item__img--rented');
        }


    if (botaoJogo.textContent == 'Alugar'){
        botaoJogo.textContent = 'Devolver';
        botaoJogo.classList.add('dashboard__item__button--return');
    }else{
        botaoJogo.classList.remove('dashboard__item__button--return');
        botaoJogo.textContent = 'Alugar';
        jogoDevolvido()
    }
    

    function jogoDevolvido(id){
        console.log
    }
}