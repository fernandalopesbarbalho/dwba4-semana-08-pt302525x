class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return this.primeiroNome + ' ' + this.segundoNome;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

let alunos = [
    new Aluno("Fernanda", "Barbalho", 7, 8.5),
    new Aluno("Freddie", "Mercury", 9, 6.3),
    new Aluno("Albus", "Dumbledore", 3, 7.1),
    new Aluno("Whitney", "Houston", 0, 7.5),
    new Aluno("Mona", "Lisa", 8, 9.2)
];

function mostrarAlunos() {
    alunos.forEach(aluno => {
        alert("Nome Completo: " + aluno.nomeCompleto() + "\nMédia: " + aluno.media() + "\nSituação do aluno: " + aluno.situacao());
    });
}

mostrarAlunos();