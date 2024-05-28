
const procedimentos= document.querySelector('.procedimentos-orçamento')

const orçamentos = [

    {name:'<b>Solicite um orçamento</b>', src:'./img/orçamento.png' , descriçao: 'Solicite um orçamento rápido e grátis, através de nossos canais de atendimento.'},
    {name:'<b>Iremos até você</b>', src:'./img/relogio.png' , descriçao: ' Iremos até você, dentre 30 minutos, para diagnóstico do problema. '},
    {name:'<b>Mão na massa</b>', src:'./img/ferramenta.png' , descriçao: ' Após aprovado, nossos profissionais entram em ação e resolvem seu problema rapidamente. '}, 
    {name:'<b>Resolvido</b>', src:'./img/verificado.png' , descriçao: ' Tudo volta ao normal, daremos uma garantia de 3 meses sobre o serviço.  '},
   
]

let listaorçamento= ''


orçamentos.forEach ( passos => {
    listaorçamento +=
    `

<li  class="LI2">

<img src=${passos.src}   class="desing-celular" >
<figcaption> ${passos.name}</figcaption>
<br>
<p class="modificaçao-responsivo"> ${passos.descriçao} </p>

</li>
`
})
procedimentos.innerHTML=listaorçamento
console.log(listaorçamento)