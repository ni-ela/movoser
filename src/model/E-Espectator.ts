export class Espectador {
    nome!: string;
    idade!: number;
	email!: string;
    token!: string;
    androidClientId: number | undefined;
    iosClientId: number | undefined;

    constructor(nome:string) {
        this.nome = nome;
    }
}