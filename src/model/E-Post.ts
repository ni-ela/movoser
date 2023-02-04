import { ConteudoSobDemanda, Espectador } from "./index";

export class Post {
    descricao!: string;
	publicadoEm!: string;
	atualizadoEm!: string;
	anexos: string[] | undefined;
	Autor!: Espectador;
    ConteudoSobDemanda!: ConteudoSobDemanda;
}