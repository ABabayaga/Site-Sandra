export interface Serie {
    nome: string;
    slug: string;
    imagem: string;
    descricao: string;
    dimensoes?: string;
    serie?: string;
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
        nome: 'Mar',
        imagem: '/mars.jpg',
        descricao:
            'Uma investigação sobre movimento, profundidade e transformação. As obras da série Mar não representam a paisagem marítima de forma literal; evocam suas forças invisíveis, seus encontros e correntes, os fluxos que aproximam, afastam e conectam. São composições que convidam à contemplação e ao silêncio, como quem observa o horizonte e encontra nele reflexos de si mesmo.',
    },
    {
        nome: 'Estado de Presença',
        imagem: '/BG.png',
        descricao:
            'Uma coleção dedicada aos instantes de consciência e permanência. Cada obra explora a relação entre presença, percepção e existência, revelando movimentos internos, encontros humanos e energias que ocupam o espaço mesmo quando não são imediatamente visíveis. São trabalhos que convidam o observador a desacelerar e habitar o momento.',
    },
    {
        nome: 'Forças Primordiais',
        imagem: '/BG3.png',
        descricao:
            'Inspirada nos elementos fundamentais da natureza e nos impulsos que moldam a vida, esta série investiga energia, expansão, erosão, criação e transformação. As obras carregam intensidade visual e gestual, revelando a potência dos processos naturais e das forças que atuam tanto no mundo exterior quanto na experiência humana.',
    },
    {
        nome: 'Energia Vital',
        serie: '',
        imagem: '/ev.jpeg',
        dimensoes: '1,20 x 1,00',
        descricao:
            'Movimentos circulares constroem um fluxo contínuo, evocando a pulsação e a renovação constante da vida.',
    },
    {
        nome: 'Entre Camadas (provável)',
        serie: '',
        imagem: '/estadodepresenca/ep2.jpeg',
        dimensoes: '0,20 x 0,30',
        descricao:
            'Há um fogo que não destrói, apenas transforma. A matéria se expande em camadas vibrantes, como se a luz brotasse de dentro da própria tela. As texturas preservam a memória do gesto, enquanto as cores aquecem o olhar e despertam sensações.',
    },
    {
        nome: 'Confluência',
        serie: '',
        imagem: '/estadodepresenca/ep4.jpeg',
        dimensoes: '1,80 x 0,30',
        descricao:
            'Em três movimentos, a obra revela uma mesma energia em constante transformação. A composição encontra o equilíbrio: contrastes e encontros na mesma energia.',
    },
    {
        nome: 'Movimento e Fluxo',
        serie: '',
        imagem: '/estadodepresenca/ep5.jpeg',
        dimensoes: '1,20 x 1,00',
        descricao:
            'Gestos livres e espontâneos registram o fluxo do tempo em camadas de movimento e energia.',
    },
    {
        nome: 'Aurora',
        serie: '',
        imagem: '/forcasprimordiais/fp1.jpeg',
        dimensoes: '0,50 x 0,80',
        descricao: 'Começo, surgimento, luz que rompe.',
    },
    {
        nome: 'Âmago',
        serie: '',
        imagem: '/forcasprimordiais/fp2.jpeg',
        dimensoes: '0,30 x 0,30',
        descricao:
            'Duas forças coexistem em tensão. Não se anulam nem se dissolvem; encontram-se. A obra pulsa no limite entre choque e equilíbrio, onde o contraste não rompe, mas sustenta a própria existência.',
    },
    {
        nome: 'Energia Incandescente',
        serie: '',
        imagem: '/forcasprimordiais/fp3.jpeg',
        dimensoes: '0,80 x 0,80',
        descricao:
            'Uma composição densa e vibrante que revela uma energia em combustão, intensa e expansiva.',
    },
    {
        nome: 'Entre Sinais',
        serie: '',
        imagem: '/estadodepresenca/ep55.jpeg',
        dimensoes: '0,97 x 0,80',
        descricao: 'O que nos atravessa raramente vem de forma direta.',
    },
    {
        nome: 'Profundidade Azul',
        serie: '',
        imagem: '/mar/ma2.jpeg',
        dimensoes: '2,00 x 1,20',
        descricao:
            'Camadas de azul constroem uma imersão silenciosa, onde profundidade e contemplação se encontram.',
    },
    {
        nome: 'Gênese',
        serie: '',
        imagem: '/raizes/ra2.jpeg',
        dimensoes: '0,30 x 0,30',
        descricao: 'Toda criação começa em movimento.',
    },
    {
        nome: 'Guardião',
        serie: '',
        imagem: '/raizes/ra1.jpeg',
        dimensoes: '1,20 x 1,00',
        descricao:
            'Inspirada em símbolos ancestrais e elementos orgânicos da terra, a obra constrói um campo de proteção e energia vital. O centro luminoso é cercado por formas que lembram sementes, raízes e adornos ritualísticos, criando uma composição que fala de origem, força e permanência.',
    },
    {
        nome: 'Maré Interna',
        serie: '',
        imagem: '/mar/ma1.jpeg',
        dimensoes: '0,50 x 0,80',
        descricao:
            'Entre correntes silenciosas e camadas profundas, a obra revela movimentos internos que nunca permanecem imóveis.',
    },
];

export const series: Serie[] = rawSeries.map((s) => ({ ...s, slug: slugify(s.nome) }));
