# REACT TS/VITE 3F - Trabajo Practico Integrador
Proyecto de React TS utilizando VITE como gestor de dependencias / Typescript y CSS / API de Rick and Morty para recuperar datos de personajes

## Demo en VERCEL
[Página de Personajes de Rick and Morty](https://tp-final-react-rick-and-morty.vercel.app/)

## Propósito del proyecto
Construir una aplicación que contenga (1ra parte):
* Header - Con título y subtitulo personalizado
* Input Search - Que permita recuperar personajes de API de Rick and Morty según nombre ingresado
* Tag History - Con tags de búsqueda ingresadas (mueve al frente búsquedas anteriores exitosas / no muestra búsquedas erróneas o vacías)
* Character Grid - Muestra grilla con personajes de Rick And Morty
* Character Card - Transforma response del servicio a los datos requeridos
* Footer - Con mensaje de footer personalizado

## Nuevas funcionalidades (tp-final)
Además de lo solicitado en la primera entrega, este proyecto incluye:
* Custom hooks para separar la lógica de negocio (ej.: hooks para búsquedas y para detalles de personaje).
* Arquitectura por pages: páginas separadas para Búsqueda, Favoritos y Detalle de personaje.
* Ruteo con react-router (Routes / Route / useParams / useNavigate) para navegación entre páginas.
* Método getCharacterById en el servicio para recuperar un personaje por su id.
* Página de detalles (CharacterDetails) que se abre al hacer click en una CharacterCard y muestra información completa del personaje.
* Página de Favoritos donde se listan los personajes guardados por el usuario (persistencia en localStorage mediante un Provider/context).
* Manejo de estado de carga y errores; página 404 personalizada si la ruta no existe o el personaje no es encontrado.

## Consideraciones
* Se crean interfaces para manejar Character / CharacterResponse y tipado en TypeScript.
* Servicios centralizados en /src/services (getCharacters, getCharacterById).
* Hooks reutilizables en /src/hooks (por ejemplo useCharacters, useHistory, useCharacterDetails).
* Context para favoritos en /src/context (FavoriteProvider, FavoritesContext).

## Uso / Desarrollo
1. Copiar o renombrar `.env.example` a `.env` y configurar:
   VITE_URL_BASE=https://rickandmortyapi.com/api/character
2. Instalar dependencias:
   npm install
3. Ejecutar en modo desarrollo:
   npm run dev
4. Construir para producción:
   npm run build

## Tecnologías usadas
* React JS
* Typescript
* VITE
* Axios
* react-router
* CSS

## Alumno
González, Nicolás Ezequiel

## Contacto
nicolas.gonzalez15@gmail.com