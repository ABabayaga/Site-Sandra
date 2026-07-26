export interface EntregaImagem {
    imagem: string;
    posicao: string;
    span: string;
}

export interface EntregaGaleria {
    slug: string;
    titulo: string;
    local: string;
    imagens: EntregaImagem[];
}

function slugify(local: string): string {
    return local
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

const rawEntregas: Omit<EntregaGaleria, 'slug'>[] = [
    {
        titulo: 'Entrega Realizada',
        local: 'Alphaville 3, Campo Grande/MS',
        imagens: [
            { imagem: '/ent1.png', posicao: '75% 45%', span: 'sm:col-span-2 sm:row-span-2' },
            { imagem: '/ent2.png', posicao: '55% 22%', span: 'sm:col-span-1 sm:row-span-1' },
            { imagem: '/ent3.png', posicao: '62% 45%', span: 'sm:col-span-1 sm:row-span-1' },
        ],
    },
    {
        titulo: 'Entrega Realizada',
        local: 'Alphaville 2, Campo Grande/MS',
        imagens: [
            { imagem: '/entre1.png', posicao: '50% 50%', span: 'sm:col-span-3 sm:row-span-2' },
        ],
    },
];

export const entregas: EntregaGaleria[] = rawEntregas.map((e) => ({ ...e, slug: slugify(e.local) }));
