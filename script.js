var num = []
var res = document.getElementById('contas')
function adicionar(seq){
    var val = document.getElementById('valores')
    var valor = Number(seq.value)

    if(valor < 1 || valor > 100 || num.includes(valor)){
        window.alert('Valor inserido inválido ou já incluido na lista. Digite outro número....')
        seq = ''
    }else{
        var s = valor
        num.push(s)
        val.innerHTML +=''
        let valores = document.createElement('option')
        valores.text = `Valor ${s} adicionado a lista.`
        val.appendChild(valores)
    }
    document.getElementById('sequencia').value = ''
    document.getElementById('sequencia').focus()
    res.innerHTML = ''
}
function finalizar(){
    if(num == ''){
        window.alert('Digite um valor para finalizar.')
    }else{
        num.sort(function(a, b){
            return a-b;
        })
        var larg = num.length
        var prim = num[0]
        var ultm = num[larg-1]
        var tot = 0
        for(let pos = 0; pos < num.length; pos++){
            var tot = num[pos] + tot
        }
        var soma = tot
        res.innerHTML += `Temos ao todo ${larg} números na sequência <br>`
        res.innerHTML += `O menor número da sequência é ${prim} <br>`
        res.innerHTML += `O maior número da sequência é ${ultm} <br>`
        res.innerHTML += `A soma de todos os resultados é ${soma} <br>`
        res.innerHTML += `A média de todos os números é ${soma/larg}`
    }
}
