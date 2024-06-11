document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-container button');
    const searchResults = document.getElementById('search-results');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', buscar);
        searchInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                buscar();
            }
        });
    }

    function buscar() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = ''; // Limpiar resultados previos

        // Simulación de productos y artesanos para búsqueda
        const items = [
            { type: 'product', name: 'Cestería' },
            { type: 'product', name: 'Metal' },
            { type: 'product', name: 'Hilo' },
            { type: 'product', name: 'Cerámica' },
            { type: 'product', name: 'Lana' },
            { type: 'product', name: 'Tela' },
            { type: 'artisan', name: 'Juan Pérez' },
            { type: 'artisan', name: 'María García' },
        ];

        const results = items.filter(item => item.name.toLowerCase().includes(query));
        
        if (results.length > 0) {
            results.forEach(item => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerText = item.name;
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.innerHTML = '<p>No se encontraron resultados.</p>';
        }
    }
});
