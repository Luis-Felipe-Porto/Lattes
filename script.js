
function exibirMenu(){
    let width = Number(screen.width);
    
}
function menuLateral(){
    let width =Number(screen.width);
    let menu = document.querySelector('.aside');
    let home = document.querySelector('.home');
    let main = document.querySelector('#main-content');
    menu.style = 'margin-left:0px;transition: all 1s';
    
    if(width>1000){
        main.style = 'padding: 5px 5px 0px 280px; width:100%;transition: all 1s';
    }else{
        main.style =  'padding:2px; width:100%;transition: all 1s';
    }   
}

function closeMenu(){
    let menu = document.querySelector('.aside');
    let home = document.querySelector('.home');
    let main = document.querySelector('#main-content');
    menu.style = 'margin-left:-280px;transition: all 1s';
    main.style = 'padding-left: -280px;transition: all 1s';
    home.style = 'width:100%;transition: all 1s';
}

var skillElements = document.querySelectorAll('.habilidades .nivel');
var skill = document.querySelector('#skills .content');
    
    skill.onmouseover = function carregarHabilidades(skillElements){
        
}
