# Amigo Secreto

Este es un programa simple en JavaScript que te permite agregar nombres de amigos a una lista y luego sortear un amigo secreto al azar.

## Cómo funciona

1. **Agregar nombres**: Escribe el nombre de un amigo en el campo de texto y haz clic en "Agregar". El nombre se añadirá a la lista si cumple con las siguientes condiciones:
   - No está vacío.
   - No ha sido agregado antes.
   - Solo contiene letras y espacios.

2. **Ver la lista**: Los nombres agregados aparecerán en una lista debajo del campo de texto.

3. **Sortear amigo secreto**: Haz clic en "Sortear" para elegir un nombre al azar de la lista. El resultado se mostrará en la parte inferior.

## Código

El código está escrito en JavaScript y utiliza HTML para la interfaz. Aquí hay una explicación breve de las funciones principales:

- **`agregarAmigo()`**: Agrega un nombre a la lista después de validarlo.
- **`actualizarLista()`**: Actualiza la lista de nombres en la página.
- **`sortearAmigo()`**: Selecciona un nombre al azar de la lista y lo muestra como el amigo secreto.

## Requisitos

- Un navegador web moderno (como Chrome, Firefox o Edge).
- Un editor de texto para ver o modificar el código (opcional).

## Cómo usar

1. Abre el archivo `index.html` en tu navegador.
2. Sigue las instrucciones en la página para agregar nombres y sortear.

## Ejemplo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Amigo Secreto</title>
</head>
<body>
    <h1>Amigo Secreto</h1>
    <input type="text" id="amigo" placeholder="Escribe un nombre">
    <button onclick="agregarAmigo()">Agregar</button>
    <button onclick="sortearAmigo()">Sortear</button>
    <ul id="listaAmigos"></ul>
    <div id="resultado"></div>
    <script src="script.js"></script>
</body>
</html>
