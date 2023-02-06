import { Espectador, Post } from "./index";

export class Comentario {
    descricao!: string;
    publicadoEm!: string;
    atualizadoEm!: string;
    anexo!: string;
    Autor!: Espectador;
    Post!: Post;
}