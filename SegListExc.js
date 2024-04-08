const express = require('express')
const app = express()
const port = 3000

// Middleware -> intermediario
app.use(express.json())

app.get('/hello', (req, res) => {
    res.send("Hello")
})

// Logica entrando com os exercicios

// 1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE 
//MÍNIMA + QUANTIDADE MÁXIMA) /2.

//BODY
app.post('/Exc01', (req, res) =>{
    const quantidadeMinima = req.body.qtdMinima
    const quantidadeMaxima = req.body.qtdMaxima

    const estoqueMedia = (quantidadeMinima + quantidadeMaxima) / 2
    
    res.send(Estoque média: ${estoqueMedia})
    
})

// 2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais.
//Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma
//mensagem caso o funcionário não tenha direito ao aumento.

// BODY
app.post('/Exc02', (req, res) =>{
    const remuneracaoFixo = req.body.salFixo;
    const remurecaoFinal = (remurecaoFixo / 100 * 30) + remurecaoFixo;
    
    if (remurecaoFixo > 1000) {
        console.log("Você não tem direito ao reajuste")
        res.send("Você não tem direito ao reajuste");
    } else {
        console.log("remurecao reajustado: R$" + remurecaoFinal)
        res.send("remurecao reajustado: R$" + remurecaoFinal);
    }
});

// 3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele
//efetuadas e o percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor. 
//Escrever o nome do vendedor e seu salário total.

// BODY
app.post('/Exc03', (req, res) =>{
    const nome = req.body.nome
    const remurecaoFixo = req.body.remurecaoFixo
    const totalVendasMes = req.body.tVendasMes
    const percentualTotalVendas = req.body.pTVendas

    const remurecaoTotal = (totalVendasMes / 100 * percentualTotalVendas) + remurecaoFixo
    console.log(nome + ", sua remurecao total será de R$" + remurecaoTotal)
    res.send(${nome}, sua remurecao total será de R$${salarioTotal})
});

// 4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto
//levou para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância
//Tempo - em km/h, e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media
// calculada> km/h.

// BODY

app.post('/exc4', (req, res) =>{
    const nome = req.body.nome
    const distaciaPercorrida = req.body.dPercorrida
    const tempoGasto = req.body.tempo

    const velocidadeMedia = distaciaPercorrida / tempoPercorrido
    console.log(velocidadeMedia)
    res.send(A velocidade média do ${nome} foi ${velocidadeMedia} km/h.)
});


// 5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte
//regra:
// Salários até 2.000, reajuste de 50%
// Salários maiores que 2.000, reajuste de 30%

// BODY
app.post('/exc5', (req, res) =>{
    const remuneracao = req.body.sal
        if(remuneracao <= 2000){
            const reajuste = (remuneracao / 100 * 50) + remuneracao 
            res.send('A remuneracao reajustado será de' R${reajuste}.)
        }
        else{
            const reajuste = (remuneracao / 100 * 30) + remuneracao 
            res.send('A remuneracao reajustado será de' R${reajuste}.)
        }
});

// 6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas 
//para cálculo do peso: peso ideal de homem = (72,7 x altura) – 58 peso ideal da mulher = (62,1 x altura)
//– 44,7

// BODY
app.post('/exc6', (req, res) =>{
           const altura = req.query.a
        const sexo = req.query.s.toLowerCase()
    if(sexo === 'homem'){
            const pesoIdeal = (72.7 * altura) - 58
        res.send('Seu peso ideal é' ${pesoIdeal.toFixed(2)} kg.)
    } else if(sexo === 'mulher'){
        const pesoIdeal = (62.1 * altura) - 44.7
        res.send('Seu peso ideal é' ${pesoIdeal.toFixed(2)} kg.)
    } else {
        res.send('Sexo inválido. Use "masculino" ou "feminino".')
    }
});


// 7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
// O maior preço lido; e
// A média aritmética dos preços dos produtos.

// PATH PARAM 
   [
    {
        "nome": "Tijolo",
        "codigo": 1,
        "preco": 00.85
    }
    ,
     {
        "nome": "Fio",
        "codigo": 2,
        "preco": 52.99
    }
    ,
     {
        "nome": "PVC",
        "codigo": 3,
        "preco": 7.99
    }
    ,
     {
        "nome": "cANO",
        "codigo": 4,
        "preco": 21.99
    }
    ,
     {
        "nome": "Rejunte",
        "codigo": 5,
        "preco": 5.99
    }
    ,
     {
        "nome": "Massa corrida",
        "codigo": 6,
        "preco": 29.99
    }
    ,
     {
        "nome": "Ferro",
        "codigo": 7,
        "preco": 34.99
    }
    , {
        "nome": "Madeira",
        "codigo": 8,
        "preco": 39.99
    }
    ,
     {
        "nome": "Disjuntor",
        "codigo": 9,
        "preco": 27.98
    }
    ,
     {
        "nome": "CaixaPerfil",
        "codigo": 10,
        "preco": 59.99
    }
    ,
     {
        "nome": "Tinta",
        "codigo": 11,
        "preco": 299.99
    }
    ,
     {
        "nome": "Brita",
        "codigo": 12,
        "preco": 69.99
    }
    ,
     {
        "nome": "Liquibrilho",
        "codigo": 13,
        "preco": 79.98
    }
    ,
     {
        "nome": "Capote",
        "codigo": 14,
        "preco": 22.49
    }
    ,
     {
        "nome": "Grampo",
        "codigo": 15,
        "preco": 7.98
    }
    
]
*/

app.post('/Exc07', (req, res) =>{
    const corpo = req.body
    let listaProdutos = []
    console.log(listaProdutos)
    
    corpo.forEach(produto => { // O forEach irá percorrer oarray
        console.log(listaProdutos)
        listaProdutos.push(produto)
    });

    let soma = 0
    listaProdutos.forEach(produto =>{
        soma = soma + produto.preco
        
    })
    //usarei o modelo reduce
    //listaProdutos.reduce(produto => produto.preco)

    console.log(soma.toFixed(2))

    const media = soma / listaProdutos.length

    // calcular maior preço
    let maiorPreco = 0
    // logica
    listaProdutos.forEach(produto =>{
        if(produto.preco > maiorPreco){
            maiorPreco = produto.preco
        }
    })
    // usando o motodo math.max
    //Math.max(listaProdutos.map(produto => produto.preco))

    const resultado = {
        precoMedia : media.toFixed(2),
        maiorPreco : maiorPreco
    }
    console.log(resultado)
    res.json(resultado)

    
})

//8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo,
//conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e 
//calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de 
//aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.Código do Cargo -> Percentual:
// 101 -> 5%
// 102 -> 7,5%
// 103 -> 10%

// BODY
app.post('/Exc08', (req, res) =>{
    const remuneracao = req.body.sal
    const cargo = req.body.cargo

    if(cargo == 101){
        const remuneracaoReajustado = (remuneracao / 100 * 5) + remuneracao
        const diferenca = salarioReajustado - remuneracao
        res.send(`remuneracao antigo: R$${remuneracao} \nNovo salário: R$${remuneracaoReajustada} \nDiferença entre ambos: R$${diferenca} `)
    }
    else if(cargo == 102){
        const remuneracaoReajustado = (remuneracao / 100 * 7.5) + remuneracao
        const diferenca = salarioReajustado - remuneracao
        res.send(`remuneracao antiga: R$${remuneracao} \nNova remuneracao: R$${remuneracaoReajustada} \nDiferença entre ambos: R$${diferenca} `)
    }
    else if(cargo == 103){
        const remuneracaoReajustado = (remuneracao / 100 * 10) + remuneracao
        const diferenca = salarioReajustado - remuneracao
        res.send(`remuneracao antiga: R$${remuneracao} \nNova remuneracao: R$${remuneracaoReajustada} \nDiferença entre ambos: R$${diferenca} `)
    }
    else{
        const remuneracaoReajustado = (remuneracao / 100 * 15) + remuneracao
        const diferenca = salarioReajustado - remuneracao
        res.send(`remuneracao antiga: R$${remuneracao} \nNova remuneracao: R$${sremuneracaoReajustada} \nDiferença entre ambos: R$${diferenca} `)
    }
});

// 9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de
 //dependentes do funcionário e a quantidade de horas extras trabalhadas. Calcule e imprima o salário
 // a receber do funcionário seguindo as regras abaixo:

    //  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    // Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    // Para cada dependente acréscimo de 32 reais;
    // Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    // Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    // Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
       // IRRF | Salário Bruto
       // Isento Inferior a 2.000
      // 10% De 2.000 a 5.000
      // 20% Superior a 5.000
    // Salário líquido é igual ao salário bruto menos IRRF;
    // A gratificação segue a próxima tabela:
         // Salário Líquido | Gratificações
         // Até 3.500 | 1.000 reais
         // Superior a 3.500 | 500 reais
    // Salário a receber do funcionário é igual ao salário líquido mais a gratificação.



// BODY
app.post('/Exc09', (req, res) =>{
                 const salarioMinimo = req.body.salariominimo
              const horasTrabalhadas = req.body.horasTrabalhadas
           const numeroDependentes = req.body.nDependentes
        const horasExtrasTrabalhadas = req.body.hExtraTrabalhada

        const valorHoraTrabalhada = salarioMinimo / 5
            const salarioMes = horaTrabalhada * valorHoraTrabalhada
               const dependente = numeroDependentes * 32
                    const valorHoraExtra = valorHoraTrabalhada * 1.5; 
                        const salarioBruto = salarioMes + dependente + valorHoraExtra

    let irrf;
    if (salarioBruto <= 2000) {
        irrf = 0; // Isento
    } else if (salarioBruto > 2000 && salarioBruto <= 5000) {
        irrf = salarioBruto * 0.1; 
    } else {
        irrf = salarioBruto * 0.2; 
    }

    const salarioLiquido = salarioBruto - irrf;

    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000;
    } else {
        gratificacao = 500;
    }

    const salarioReceber = salarioLiquido + gratificacao;

    res.send(Salário a receber do funcionário: R$ ${salarioReceber.toFixed(2)});
});

app.listen(3000, ()=>{
    console.log("Aplicação iniciada em http://localhost:3000")
})