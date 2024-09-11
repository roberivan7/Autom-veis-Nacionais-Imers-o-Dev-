//console.log(dados[2].Descrição);
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena-o na variável "section".
    // Esse elemento será usado para inserir os resultados da pesquisa.

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada Foi Encontrado !, Pois voce não digitou nada</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    // Inicializa uma string vazia chamada "resultados". Essa string será usada para construir o HTML 
    // que será inserido na seção de resultados.

    let titulo = "";
    let descricao = "";
    let tags = ""

    for (let dado of dados) {
        // Inicia um loop que itera sobre cada elemento do array "dados".
        // A variável "dado" representará cada objeto dentro do array em cada iteração.
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <img src="${dado.image}" alt="Renegade_Veiculo" height="100" width="200">
                <p class="descricao-meta">${dado.descricao}
                </p>
                <a href="${dado.link}" target="_blank">Mais Informação</a>
            </div>
            `;
        // Em cada iteração, uma nova div com a classe "item-resultado" é criada e adicionada à string "resultados".
        // Dentro dessa div, são criados elementos HTML como <h2>, <img>, <p> e <a> para exibir as informações de cada dado.
        // O conteúdo desses elementos é obtido das propriedades do objeto "dado", como "titulo", "Descrição" e "link".
        // A crase (`) é utilizada para criar uma template string, permitindo a inserção de variáveis dentro da string.

        } 
        if (!resultados) {
            resultados = "<p>Nada foi encontrado !!</p>"
        }
        // Logica que serve para caso alguem insera alguma informaçãoes que não esta cadastrada no arquivos dados ele ira retorna com a informação "Nada Foi Encontrado, porém se caso for ao contrário o logica segue para o restante da function."


        section.innerHTML = resultados;
    // Após o loop, o conteúdo HTML completo da string "resultados" é atribuído à propriedade innerHTML do elemento "section".
    // Isso substitui o conteúdo existente da seção pelos resultados da pesquisa gerados.

            }

   }

