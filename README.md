# REACT JS/VITE 3F - Trabajo Practico Integrador
Proyecto de React JS utilizando VITE como gestor de dependencias / Typescript y CSS / API de Rick and Morty para recuperar datos de personajes

## Demo en VERCEL
https://tp-final-react-rick-and-morty.vercel.app/

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


## Directorio de carpetas en SRC
src/
├─ pages/
│  ├─ SearchPage.tsx        # Página principal: input de búsqueda, muestra CharacterGrid y TagHistory
│  ├─ FavoritePage.tsx      # Página de Favoritos: lista personajes guardados desde el context
│  ├─ CharacterDetails.tsx  # Página de detalle: muestra atributos completos de un personaje por id
│  ├─ NotFound.tsx          # Página 404 / error para rutas inválidas o personaje no encontrado
│
├─ hooks/
│  ├─ useCharacters.ts      # Hook para buscar personajes (llama a getCharacters, maneja cache/estado)
│  ├─ useCharacterDetails.ts# Hook para obtener detalles por id (usa getCharacterById, loading/error)
│  ├─ useHistory.ts         # (opcional) Hook para manejar busquedas previas / persistencia
│
├─ components/
│  ├─ CharacterGrid.tsx     # Componente que renderiza la grilla; muestra mensaje si búsqueda no retorna resultados
│  ├─ CharacterCard.tsx     # Card individual del personaje; incluye botón toggle favorito y link a detalles
│  ├─ InputSearch.tsx       # Componente de búsqueda (input + submit)
│  ├─ TagHistory.tsx        # Muestra tags de búsquedas previas, permite re-disparar búsqueda
│  ├─ Pagination.tsx        # Componente de paginación (<<, <, números, >, >>)
│  ├─ CustomHeader.tsx      # Header de la app
│  ├─ CustomFooter.tsx      # Footer de la app
│
├─ interfaces/
│  ├─ character.ts          # Interfaz Character usada por la UI (id, name, image, species, status, etc.)
│  ├─ characterResponse.ts  # Tipado para la respuesta de lista (info + results)
│  ├─ characterResponseBeta.ts # (existente) tipado alternativo / completo del objeto personaje
│
├─ context/
│  ├─ FavoritesContext.tsx  # createContext con tipos por defecto (favorites, isFavorite, toggleFavorite)
│  ├─ FavoriteProvider.tsx  # Provider que persiste favorites en localStorage y expone acciones
│
├─ services/
│  ├─ getCharacterService.ts# Funciones para llamar a la API: getCharacters(query, page?) y getCharacterById(id)
│

## Archivos clave adicionales

- src/CharacterApp.tsx  
  Componente raíz de la UI: define las Routes (Search, Favoritos, Detalle, 404), muestra la navegación condicional y consume el FavoritesContext. Orquesta la composición de páginas y pasa handlers principales (búsqueda, paginación, historial).

- src/main.tsx  
  Punto de entrada que monta React en el DOM. Envuelve la app con BrowserRouter y FavoriteProvider (context) y aplica el CSS global. Ejemplo: BrowserRouter > FavoriteProvider > <CharacterApp />.

- src/index.css  
  Estilos globales y variables CSS. Contiene layout principal, tipografías, reset, estilos para CharacterGrid/CharacterCard, paginación, botones y media queries para responsividad.


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