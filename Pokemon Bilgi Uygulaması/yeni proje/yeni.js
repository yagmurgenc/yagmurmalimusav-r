$(document).ready(function () {
    $('#search-button').on('click', function () {
        var query = $('#search-input').val();
        searchWikipedia(query);
    });

    $('#search-input').on('keypress', function (e) {
        if (e.which == 13) { // Enter tuşu
            var query = $('#search-input').val();
            searchWikipedia(query);
        }
    });

    function searchWikipedia(query) {
        var apiUrl = 'https://en.wikipedia.org/w/api.php';
        $.ajax({
            url: apiUrl,
            data: {
                action: 'query',
                list: 'search',
                srsearch: query,
                format: 'json',
                origin: '*'
            },
            success: function (response) {
                var results = response.query.search;
                displayResults(results);
            },
            error: function () {
                alert('Arama sırasında bir hata oluştu.');
            }
        });
    }

    function displayResults(results) {
        $('#results').empty();
        results.forEach(function (result) {
            var title = result.title;
            var snippet = result.snippet;
            var pageUrl = 'https://en.wikipedia.org/wiki/' + encodeURIComponent(title);

            var resultItem = `
                <div class="result-item">
                    <h3><a href="${pageUrl}" target="_blank">${title}</a></h3>
                    <p>${snippet}</p>
                </div>
            `;

            $('#results').append(resultItem);
        });
    }
});
