<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Converter</title>
</head>
<body>
<script>
    window.onload = function() {
        var obj = {
            data: [
                'Кирпич строительный полнотелый одинарный М-100 рифленый Коломенский завод',
                'Кирпич строительный щелевой двойной М-150 рифленый Каширский кирпич',
                'Кирпич строительный полнотелый одинарный М-100 рифленый Коломенский завод',
                'Кирпич строительный щелевой двойной М-150 рифленый Каширский кирпич',
                'Кирпич строительный полнотелый одинарный'
            ]
        }
        var json = JSON.stringify(obj);

        console.log('json: ', json);
        document.getElementById('json').innerHTML = json;
    }
</script>
<h3>Результат:</h3>
<div id="json">

</div>
</body>
</html>