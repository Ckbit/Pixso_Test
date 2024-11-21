$('#example').DataTable({
    paging: true,        // Ativa paginação
    searching: true,     // Ativa barra de pesquisa
    info: true,          // Exibe informações de status (ex.: "Mostrando 1-10 de 50 registros")
    lengthChange: false, // Remove a opção de alterar o número de linhas mostradas
    order: [[1, 'asc']]  // Ordena por padrão pela segunda coluna (Idade), crescente
});
