<!doctype html>
<html>
    <head>
    </head>
    <body>
        <main>
        </main>
        <script>
            fetch("http://localhost:3000")
            .then(function(respuesta){
                return respuesta.json()
            })
            .then(function(datos){
                console.log(datos)
            })
        
        </script>
    </body>
</html>