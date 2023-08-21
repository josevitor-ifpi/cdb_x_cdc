import { question } from "readline-sync";

function programa(){
    console.log("------ SIMULADOR DE CDB -------")

    const valor_investido = Number(question('Investir: R$ '))
    const taxa_cdb = Number(question('Taxa (%): ')) // 1% ~ 20% ao ano
    const ano_vencimento = Number(question('Ano do vencimento (AAAA): '))

    const tempo_ano = calcular_tempo_investimento(ano_vencimento)
    const rendimento_cdb = calcular_juros_cdb(valor_investido, taxa_cdb, tempo_ano)

    const valor_total_a_sacar = valor_investido + rendimento_cdb
    const percentual_de_ganho = taxa_cdb * tempo_ano

    console.log('----- RESULTADO -----')
    console.log(`>> Valor investido: R$ ${valor_investido.toFixed(2)}`)
    console.log(`>> Rendimento     : R$ ${rendimento_cdb.toFixed(2)}`)
    console.log(`>> Total a sacar  : R$ ${valor_total_a_sacar.toFixed(2)}`)
    console.log(`>> Rendimento (%) : R$ ${percentual_de_ganho.toFixed(1)}%`)
    console.log(`----------------------`)


    console.log()
    console.log(`Descubra quanto o Banco lucra com seu dinheiro: `)
    
    const valor_emprestado = valor_investido
    const tempo_meses = tempo_ano * 12 // até 60 meses
    const taxa_mes = Number(question(`Taxa (%): `)) // 1% ~ 17% ao mês

    const rendimento_cdc = calcular_juros_cdc(valor_emprestado, taxa_mes, tempo_meses)
    const valor_lucro_banco = rendimento_cdc - rendimento_cdb
    const valor_total_emprestimo = valor_emprestado + rendimento_cdc


    console.log(`Total Empréstimo: R$ ${valor_total_emprestimo.toFixed(2)} `)
    console.log(`Juros Empréstimo: R$ ${rendimento_cdc.toFixed(2)} `)
    console.log(`Juros CDB       : R$ -${rendimento_cdb.toFixed(2)} `)
    console.log(`Lucro do Banco  : R$ ${valor_lucro_banco.toFixed(2)} `)
}

//FUNÇÕES

function calcular_tempo_investimento(ano){
    const tempo = ano - 2023
    return tempo
}

/* 
function juros_simples(c, i, t){
    const juros = c * (i/100) * t     NÃO VAI SER USADO
    return juros
}
*/


function juros_compostos(c, i, t){
    const juros = c * (1 + (i/100)) ** t
    return juros
}

/*
c = capital
i = taxa
t = tempo
*/

function calcular_juros_cdb(valor_investido, taxa_cdb, tempo_ano){
    return juros_compostos(valor_investido, taxa_cdb, tempo_ano)
}

function calcular_juros_cdc(valor_emprestado, taxa_mes, tempo_meses){
    return juros_compostos(valor_emprestado, taxa_mes, tempo_meses)
}

programa()