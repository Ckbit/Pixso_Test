$(document).ready(function () {
    const table = $('#dataTable').DataTable({
        paging: true,
        searching: true,
        order: [[1, 'asc']], // Ordena por padrão pela segunda coluna (Idade)
        language: {
            search: "Pesquisar:",
            lengthMenu: "Mostrar _MENU_ registros por página",
            info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
            paginate: {
                next: "Próximo",
                previous: "Anterior"
            }
        }
    });
        

    // Exibe o loader enquanto carrega os dados
    $('#loader').show();

    fetch('http://localhost:5000/api/data')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item) => {
                table.row.add([
                    item.nome,
                    item.idade,
                    item.cidade
                ]).draw();
            });

            // Esconde o loader após carregar
            $('#loader').hide();
        })
        .catch((error) => {
            console.error('Erro ao buscar dados:', error);
            $('#loader').hide();
        });
});