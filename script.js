let vitorias = 118
let derrotas = 25
let saldoVitorias = calcularSaldoPatidasRanckiadas(vitorias, derrotas)
let nivel = obterNivel(saldoVitorias)

function calcularSaldoPatidasRanckiadas(vitorias, derrotas) {
     return vitorias - derrotas
}

function obterNivel(saldoVitorias) {
    if (saldoVitorias < 10) {
        return 'Ferro'
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        return 'Bronze'
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        return 'Prata'
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        return 'Ouro'
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        return 'Diamante'
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        return 'Lendário'
    } else if (saldoVitorias >= 101) {
        return 'Imortal'
    }
}

console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`)