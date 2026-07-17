export interface Serie {
    nome: string;
    slug: string;
    imagem: string;
    descricao: string;
}

function slugify(nome: string): string {
    return nome
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

const rawSeries: Omit<Serie, 'slug'>[] = [
    {
        nome: 'Arquiteturas do Invisível',
        imagem: '/BG1.png',
        descricao:
            'A série Arquiteturas do Invisível investiga as estruturas intangíveis que moldam nossa experiência no mundo, como memórias, afetos, silêncios, intuições e encontros, revelando por meio de camadas, texturas, fluxos e geometrias orgânicas a arquitetura silenciosa das forças invisíveis que sustentam, conectam e transformam a existência humana entre a ordem e o acaso, a presença e a ausência.',
    },
    {
        nome: 'Mar',
        imagem: '/BG.png',
        descricao:
            'Uma investigação sobre movimento, profundidade e transformação. As obras da série Mar não representam a paisagem marítima de forma literal; evocam suas forças invisíveis, seus encontros e correntes, os fluxos que aproximam, afastam e conectam. São composições que convidam à contemplação e ao silêncio, como quem observa o horizonte e encontra nele reflexos de si mesmo.',
    },
    {
        nome: 'Estado de Presença',
        imagem: '/BG3.png',
        descricao:
            'Uma coleção dedicada aos instantes de consciência e permanência. Cada obra explora a relação entre presença, percepção e existência, revelando movimentos internos, encontros humanos e energias que ocupam o espaço mesmo quando não são imediatamente visíveis. São trabalhos que convidam o observador a desacelerar e habitar o momento.',
    },
    {
        nome: 'Forças Primordiais',
        imagem: '/BG1.png',
        descricao:
            'Inspirada nos elementos fundamentais da natureza e nos impulsos que moldam a vida, esta série investiga energia, expansão, erosão, criação e transformação. As obras carregam intensidade visual e gestual, revelando a potência dos processos naturais e das forças.',
    },
    {
        nome: 'Raízes',
        imagem: '/BG.png',
        descricao:
            'Uma reflexão sobre origem, pertencimento e memória. A série Raízes busca revelar as conexões invisíveis que sustentam nossa existência: histórias, vínculos, heranças afetivas e culturais. As composições sugerem crescimento, permanência e continuidade, lembrando que toda expansão nasce de algo profundamente enraizado.',
    },
    {
        nome: 'Essência',
        imagem: '/memo.png',
        descricao:
            'A busca pelo que permanece quando o excesso é removido. Nesta série, formas, texturas e cores são conduzidas para revelar aquilo que é fundamental, íntimo e verdadeiro. As obras propõem uma experiência de encontro com a própria natureza das coisas, celebrando a simplicidade, a autenticidade e a presença do essencial.',
    },
    {
        nome: 'Ouro em Estado',
        imagem: '/BG3.png',
        descricao:
            'Uma investigação sobre valor, transformação e descoberta. O ouro aparece não apenas como material, mas como símbolo daquilo que é raro, precioso e revelado pelo tempo. As obras exploram contrastes entre matéria e luz, imperfeição e beleza, sugerindo que aquilo que possui verdadeiro valor muitas vezes emerge de processos de transformação.',
    },
    {
        nome: 'Cicatrizes Urbanas',
        imagem: '/BG3.png',
        descricao:
            'Uma leitura poética das marcas deixadas pelo tempo, pela ocupação humana e pela transformação constante das cidades. Texturas, camadas e contrastes evocam paredes, superfícies e vestígios que contam histórias silenciosas. A série propõe um olhar sensível sobre as memórias inscritas nos espaços urbanos e sobre a beleza que pode surgir da imperfeição e do desgaste.',
    },
];

export const series: Serie[] = rawSeries.map((s) => ({ ...s, slug: slugify(s.nome) }));
