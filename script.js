function calcula(largurap, comprimentop, acrescimo) {

    largurap += acrescimo;
    comprimentop += acrescimo;

    let tamanhos = [

        { largura: 12, comprimento: 18 },
        { largura: 13, comprimento: 25 },
        { largura: 15, comprimento: 20 },
        { largura: 15, comprimento: 25 },
        { largura: 19, comprimento: 25 },
        { largura: 20, comprimento: 30 },
        { largura: 24, comprimento: 28 },
        { largura: 26, comprimento: 36 },
        { largura: 30, comprimento: 20 },
        { largura: 32, comprimento: 40 },
        { largura: 40, comprimento: 30 },
        { largura: 40, comprimento: 40 },
        { largura: 40, comprimento: 50 },
        { largura: 40, comprimento: 60 },
        { largura: 50, comprimento: 40 },
        { largura: 50, comprimento: 50 },
        { largura: 50, comprimento: 60 },
        { largura: 60, comprimento: 50 },
        { largura: 70, comprimento: 50 },
        { largura: 80, comprimento: 60 }

    ];

    for (let i = 0; i <= tamanhos.length - 1; i++) {

        let largura = tamanhos[i].largura;
        let comprimento = tamanhos[i].comprimento;

        if (largura >= largurap && comprimento >= comprimentop) {

            return largura + "x" + comprimento;

        }

    }

    return -1;

}

function main() {

    const button = document.getElementById("botaoCalcular");

    button.addEventListener('click', () => {

        let largura = Number(document.getElementById("largura").value);
        let comprimento = Number(document.getElementById("comprimento").value);
        let tamanho = calcula(largura, comprimento, 2);

        if (tamanho != -1) {

            const imagem = document.getElementById("imagem");
            const novoCaminho = "imagens/" + tamanho + ".jpg";
            imagem.src = novoCaminho;

        } else {

            alert("Sem envelope!");

        }

    });

}