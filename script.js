const conta = document.querySelector('.conta');
const resultado = document.querySelector('.conta-resultado');
const numeros = document.querySelectorAll('.numero');

numeros.forEach((numero => {
    numero.addEventListener('click', (e) => {
        const numeroConta = e.target.innerText;
        conta.textContent += numeroConta;
    })
}))

const operacoes = document.querySelectorAll('.operacoes');

operacoes.forEach((operacao) => {
    operacao.addEventListener('click', (e) => {
        const operacaoInner = e.target.innerText;
        conta.textContent += ` ${operacaoInner} `;

        if (conta.textContent.length > 52) {
            conta.textContent = `${conta.textContent.slice(0, 52)}`
        }
    })
})

const funcoes = document.querySelectorAll('.funcoes');

funcoes.forEach((funcao) => {
    funcao.addEventListener('click', (e) => {
        const funcaoInner = e.target.innerText;
        if (funcaoInner === 'C') {
            conta.textContent = '';
            resultado.textContent = '';
        } else if (funcaoInner === '<') {
            let conta = document.querySelector('.conta').textContent;
            document.querySelector('.conta').textContent = conta.substring(0, conta.length - 1);
        } else {
            let conta = document.querySelector('.conta').textContent;
            if (conta) {
                document.querySelector('.conta-resultado').textContent = eval(conta);

                if (resultado.textContent.length > 12) {
                    resultado.textContent = `${resultado.textContent.slice(0, 12)}+`
                } 
            }
        }
    })
})

const checkbox = document.getElementById('chk');
const body = document.querySelector('.body');
const footer = document.querySelector('.footer');

checkbox.addEventListener('click', () => {
    body.classList.toggle('dark');
    footer.classList.toggle('dark');
})