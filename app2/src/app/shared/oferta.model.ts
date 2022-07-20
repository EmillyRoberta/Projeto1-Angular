export interface Oferta{
    id: number,
    categoria: string,
    titulo: string,
    descricao_oferta: string,
    anunciante: string,
    valor: number,
    destaque: true,
    imagens: Array<Url>,
}

interface Url{
    url:string;
}