import { Genero } from "./index";

export class ConteudoSobDemanda {
    titulo!: string;
	sinopse!: string;
	genero!: Genero[];
	capa!: string;
	tipo!: number;
	trailer!: boolean;
	status!: number;
	mediaVotos!: number;
	contagemVotos!: number;
	popularidade!: number;
	dataLancamento!: string;
	idiomaOriginal!: string;
	adulto!: boolean;
}