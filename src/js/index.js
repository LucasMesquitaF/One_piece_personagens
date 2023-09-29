function removerSelecionado(nome_classe) {

    var classes = document.getElementsByClassName(nome_classe);
    classes = Array.from(classes);

    console.log(classes)

    classes.forEach(element => {
        const classe = element.className;
        if (classe.includes('selecionado')) {
            const index = classes.indexOf(element);
            classes[index].className = nome_classe
        }
    });
};


function adicionarSelecionado(id_personagem) {
    document.getElementById(id_personagem).className += ' selecionado';

    document.getElementById(id_personagem+5).className += ' selecionado';
}

function tooglePersonagem(id_personagem){
    removerSelecionado('botao')
    removerSelecionado('personagem')
    adicionarSelecionado(id_personagem)
}