import { Preferencia } from "./index";

export class Espectador {
    nome!: string;
    idade!: number;
	email!: string;
    token!: string;
    androidClientId: number | undefined;
    iosClientId: number | undefined;
    Preferencia!: Preferencia;

    constructor(nome:string) {
        this.nome = nome;
    }
}