
const list = document.querySelector('ul')

const serviços = [

    {name:'<b>Desentupimento de pia</b>', src:'./img/desentupindo-pia.jpg' , descriçao: ' Causas: Acúmulo de restos de alimentos, gordura, cabelos e outros detritos. <br> Como ocorre: Os resíduos acumulam-se nos canos,formando obstruções que impedem a passagem da água.'},
    {name:'<b>Desentupimento de vaso</b>', src:'./img/vaso.jpg' , descriçao: '   Causas: Descarte inadequado de papel higiênico, objetos estranhos ou excesso de material sólido.<br>Como ocorre: Objetos ou materiais sólidos ficam presos na tubulação, bloqueando o fluxo de água e causando o entupimento.'},
    {name:'<b>Caixa de Gordura</b>', src:'./img/fossa.jpg' , descriçao: ' Causas: Acúmulo de gordura, óleos e resíduos de alimentos na caixa de gordura. <br> Como ocorre: Os materiais acumulados na caixa de gordura solidificam-se com o tempo, formando uma camada espessa que obstrui a passagem da água '}, 
    {name:'<b>Desentupimento de ralos</b>', src:'./img/ralo.jpg' , descriçao: '  Causas: Acúmulo de cabelos, sujeira, restos de sabão e outros detritos. <br>Como ocorre: Os materiais acumulados na grade do ralo ou dentro da tubulação formam uma obstrução que impede a passagem da água.'},
    {name:'<b>Desentupimento de esgoto</b>', src:'./img/desentupimento.jpg' , descriçao: ' Causas: Acúmulo de resíduos sólidos, gordura, raízes de árvores e objetos estranhos na rede de esgoto.<br>Como ocorre: Obstrução parcial ou total da rede de esgoto devido ao acúmulo de materiais, resultando em refluxo de água e mau cheiro.'},
    {name:'<b>Hidrojateamento</b>', src:'./img/caminhão.jpg' , descriçao: '  Processo: Utilização de alta pressão de água para desobstruir canos e tubulações. <br>Funcionamento: O jato de água de alta pressão remove os resíduos acumulados nas paredes dos canos, restaurando o fluxo normal de água.'},
]

let myLi= ''


serviços.forEach ( lista => {
    myLi +=
    `

<li>

<img src=${lista.src}  class="desing-celular2" >
<figcaption> ${lista.name}</figcaption>
<br>
<p class="modificaçao-responsivo"> ${lista.descriçao} </p>

</li>
`
})
list.innerHTML=myLi
console.log(myLi)




