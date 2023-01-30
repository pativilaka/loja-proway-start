export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number; 
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Fone de Ouvido JZ", preco: 1439.00, descricaoPreco: "A vista no PIX", imagem: "/assets/fone-de-ouvido-1.jpg", quantidadeEstoque:5 },
    { id: 2, descricao: "Fone de Ouvido Ops", preco: 489.00, descricaoPreco: "A vista no PIX", imagem: "/assets/fone-de-ouvido-2.jpg", quantidadeEstoque:5 },
    { id: 3, descricao: "Fone de Ouvido On", preco: 1859.00, descricaoPreco: "A vista no PIX", imagem: "/assets/fone-de-ouvido-3.jpg", quantidadeEstoque:5 },
    { id: 4, descricao: "HD", preco: 500.00, descricaoPreco: "A vista no PIX", imagem: "/assets/hd.jpg", quantidadeEstoque:5 },
    { id: 5, descricao: "LapTop HP", preco: 1652.00, descricaoPreco: "A vista no PIX", imagem: "/assets/laptop-1.jpg", quantidadeEstoque:5 },
    { id: 6, descricao: "LapTop IBM", preco: 439.00, descricaoPreco: "A vista no PIX", imagem: "/assets/laptop-2.jpg", quantidadeEstoque:5 },
    { id: 7, descricao: "Monitor All in One", preco: 739.00, descricaoPreco: "A vista no PIX", imagem: "/assets/monitor-1.jpg", quantidadeEstoque:5 },
    { id: 8, descricao: "Mouse Gamer Ops", preco: 859.00, descricaoPreco: "A vista no PIX", imagem: "/assets/mouse-1.png", quantidadeEstoque:5 },
    { id: 9, descricao: "Mouse Gamer JZ", preco: 352.00, descricaoPreco: "A vista no PIX", imagem: "/assets/mouse-2.jpg", quantidadeEstoque:5 },
    { id: 10, descricao: "Mouse Gamer HP", preco: 563.00, descricaoPreco: "A vista no PIX", imagem: "/assets/mouse-3.jpg", quantidadeEstoque:5 },
    { id: 11, descricao: "Mouse Gamer IBM", preco: 852.00, descricaoPreco: "A vista no PIX", imagem: "/assets/mouse-4.jpg", quantidadeEstoque:5 },
    { id: 12, descricao: "Placa de Vídeo HP", preco: 2698.00, descricaoPreco: "A vista no PIX", imagem: "/assets/placa-video.jpg", quantidadeEstoque:5 },
    { id: 13, descricao: "Processador Intel", preco: 3000.00, descricaoPreco: "A vista no PIX", imagem: "/assets/processador.jpg", quantidadeEstoque:5 },
    { id: 14, descricao: "Teclado Gamer", preco: 658.00, descricaoPreco: "A vista no PIX", imagem: "/assets/teclado-1.jpg", quantidadeEstoque:5 },
    { id: 15, descricao: "Teclado Gamer JZ", preco: 875.00, descricaoPreco: "A vista no PIX", imagem: "/assets/teclado-2.jpg", quantidadeEstoque:5 }
]