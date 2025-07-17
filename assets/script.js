const botao = document.getElementById('bot');
const lista = document.getElementById('lista');
const botaoLimpar = document.getElementById('limpar');

botaoLimpar.addEventListener('click', () => {
    lista.textContent = '';
});

botao.addEventListener('click', () => {
    const tarefa = document.getElementById('trfa').value;
    
    if(tarefa !== '') {
        const li = document.createElement('li');

        const input = document.createElement('input');
        input.type = 'checkbox';

        const span = document.createElement('span');
        span.textContent = tarefa;
    
        const botaoLimparTarefa = document.createElement('button');
        botaoLimparTarefa.className = 'remover';

        const img = document.createElement('img');
        img.src = 'assets/imagens/icons8-lixo.svg';
        img.width = 40;

        botaoLimparTarefa.appendChild(img);

        botaoLimparTarefa.addEventListener('click', () => {
            li.remove();
        })

        li.appendChild(input);
        li.appendChild(span);
        li.appendChild(botaoLimparTarefa);

        lista.appendChild(li);


        document.getElementById('trfa').value = '';
    }else {
        console.log('adicione uma tarefa válida');
    }
});
    


