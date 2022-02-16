var proj01 = document.getElementById('proj01');

function foco(){
    proj01.innerHTML = `<div class="description">
                            <h1 class="js">Clone da página Netflix.com</h1>
                            <p>Projeto realizado usando apenas HTML e CSS.</p>
                        </div>`                 
}

function desfazer(){
    proj01.innerHTML = `<img src="../img/netflix1.png" width="350">`;
}

proj01.addEventListener('mouseenter', foco);
proj01.addEventListener('mouseout', desfazer);
proj01.addEventListener('click', function(){
                                    window.open("projetos/netflix1/index.html", "_blank");
                                }
                            );