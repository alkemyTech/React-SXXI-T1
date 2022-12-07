# <img src="https://img.icons8.com/color/30/null/project-management.png"/> Proyecto : Somos más

### Situación inicial

Somos un equipo de desarrollo y nuestro líder técnico nos comparte el pedido de un cliente nuevo que está buscando nuestra ayuda. El pedido lo hizo Marita, la Directora de la ONG Somos Más, que está buscando desarrollar un sitio web para su organización.

Marita y su equipo buscan que el sitio web funcione como carta de presentación, medio de contacto, y que les permita participar del concurso “Juntos por el Cambio Social”. Dicho concurso es organizado por una reconocida institución universitaria de Córdoba, Argentina, y el premio les permitiría ayudar a 150 familias extra por, al menos, los próximos 12 meses. Sin embargo, es requisito obligatorio para participar del concurso, incluir el link a un sitio web para dar visibilidad a su trabajo.

### Tu objetivo

Como parte de un equipo de desarrolladores, deberás desarrollar un sitio web que represente a la organización de Marita y el gran esfuerzo que su equipo realiza para la comunidad.

### Requerimientos

El equipo de Marita debe contar con un rol de usuario administrador para gestionar el sitio, sin necesidad de contactar a un técnico. Necesita poder seleccionar y actualizar la información a mostrar de cada sección (novedades, actividades, miembros, entre otras).

Además, el sitio debe tener acceso público para que cualquier persona pueda recorrer las secciones e informarse acerca de la ONG, sin posibilidad de modiﬁcar la información disponible.

Por pedido de Marita, les gustaría que el sitio tenga una sección para presentar a los miembros del equipo y las responsabilidades de cada uno. También, una sección donde se informe a la gente acerca de las actividades, últimas novedades, y testimonios de la ONG.

Por último, sería de gran utilidad, que el sitio web les permita ampliar su comunidad, invitando a interesados/as a contactarse con el equipo para participar como voluntarios/as, o bien para ser donantes de dinero y/o materiales.

---

## <img src="https://img.icons8.com/color/26/null/person-male.png"/> Integrantes del grupo:

- Luis Gerez Martinez [<img src="https://img.icons8.com/material-rounded/24/null/github.png"/>](https://github.com/LuisGerezM) [<img src="https://img.icons8.com/fluency/24/null/linkedin.png"/>](https://www.linkedin.com/in/luisgerezm/)

- Cristian ALbornoz [<img src="https://img.icons8.com/material-rounded/24/null/github.png"/>](https://github.com/cris-al) [<img src="https://img.icons8.com/fluency/24/null/linkedin.png"/>](https://www.linkedin.com/in/cristian-gabriel-albornoz-06bb07238/)

- Yoshi Debat [<img src="https://img.icons8.com/material-rounded/24/null/github.png"/>](https://github.com/LYoshi02) [<img src="https://img.icons8.com/fluency/24/null/linkedin.png"/>](https://www.linkedin.com/in/yoshidebat/)

- María Eugenia Costa [<img src="https://img.icons8.com/material-rounded/24/null/github.png"/>](https://github.com/eugenia1984) [<img src="https://img.icons8.com/fluency/24/null/linkedin.png"/>](https://www.linkedin.com/in/mar%C3%ADaeugeniacosta/)

---

## <img src="https://img.icons8.com/emoji/26/null/hammer-and-pick.png"/> Tecnologías

Este proyecto fue creado con [**Create React App**](https://github.com/facebook/create-react-app), utilizando las siguientes **tecnologías**:

- <img src="https://img.icons8.com/color/24/null/html-5--v1.png" alt="icono de HTML5"/> **HTML5**

- <img src="https://img.icons8.com/color/24/null/css3.png" alt="icono de CSS3"/> **CSS3**

- <img src="https://img.icons8.com/color/24/null/javascript--v1.png" alt="icono de JavaSCript" /> **JavaScript**

- <img src="https://img.icons8.com/color/24/null/bootstrap.png" alt="icono de Bootstrap"/> [**Bootrstrap**](https://getbootstrap.com/) y [**React-Bootstrap**](https://react-bootstrap.github.io/)

- <img src="https://img.icons8.com/office/24/null/react.png" alt="icono de React" /> [**React**](https://reactjs.org/)

- [**Styled Components**](https://styled-components.com/)

- [**Sweet Alert 2**](https://sweetalert2.github.io/)

- [**Formik**](https://formik.org/), [**Yup**](https://www.npmjs.com/package/yup) y [**ckeditor**](https://ckeditor.com/) en los formularios.

---

## <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/26/null/external-scrum-agile-flaticons-flat-flat-icons-3.png"/> Metodología

Utilizamos la metodología **scrum** durante todo el proceso de creación de la aplicación.

Realizamos cada mañana a las 9.00 la **daily** (reunión corta donde cada integrante cuenta que esta haciendo y si tiene algún bloqueo). Y una vez a la semana la **retro** (reunión para hacer un balance de la semana viendo que tenemos de positivo para seguir haciendo, qué hay como problema para poder modificar).

<img src="https://img.icons8.com/external-flaticons-flat-flat-icons/24/null/external-scrum-agile-flaticons-flat-flat-icons-7.png"/> Tablero en Jira donde podíamos ver el **backlog**, la **hoja de ruta** y el **sprint activo**:

<img src="https://user-images.githubusercontent.com/72580574/203558540-1dd6783e-fa52-4109-a8cc-58a67a5a7c39.png" widht=200 alt="imagen de un sprint" />

---

## <img src="https://img.icons8.com/color/30/null/figma--v1.png"/> Template guia

### Diseño UX

Ellos enviaron un diseño UI representativo, imágenes y otros contenidos que sugieren que utilicemos para inspirarnos y crear la carta de presentación online de Somos Más (disponible en sección “Diseño UI”). Por supuesto recibirán más que felices otras ideas y funcionalidades que sumen a su causa y los ayude a posicionarse en el concurso.

La UX (User Experience) que el equipo de diseño construyó la encontrarán haciendo [click acá](https://www.figma.com/file/6RRQfy0CZLlMrToMu9fyO7/Caso-ONG-Desktop-y-mobile-Onboardings?node-id=28%3A107&t=1yFVQHcN2CeigA1J-0).

---

## <img src="https://img.icons8.com/external-filled-outline-icons-pause-08/24/null/external-archive-business-filled-outline-icons-pause-08.png"/> Estructura del proyecto

```
> .vscode
> node_modules
> public
> src
    - assets
    > Components
        - Campaigns
        - GlobalComponents
        > views
            - About
            - Activities
            - Auth
            - Categories
            - Contact
            - Donations
            - Home
            - Members
            - News
            - Private
            - Projects
            - Users
   - features
   - guard
   - hooks
   - models
   - redux
   - Services
   - styled-cmponents
   - utilities
   App.js
   App.test.js
   index.js
   serviceWorker.js
   setupTest.js
.env
.gitignore
jsconfig.json
package-lock.json
package.json
README.md
```

## Algunos de los componentes globales

1. **Spinner (SpinnerLoad)**: decidimos no utilizar una librería para el mismo, sino crearlo con CSS mediante transformaciones. Nos ayuda a mostrar un feedback al usuario mientras se esté cargando un recurso. Se lo puede ver en: `src > Components > GlobalComponents > Loading > SpinnerLoad`.

2. **Spinner (SpinnerGrow)**: utilizamos el componente `<Spinner>` de [React-Bootstrap](https://react-bootstrap.netlify.app/components/spinners/) para darle un feed back al administrador mientras se está cargando un recurso. Recibe por _props_ :

| Nombre        | Valor                                                                                  | Descripción                            |
| ------------- | -------------------------------------------------------------------------------------- | -------------------------------------- |
| **animation** | 'border' , 'grow'                                                                      | para cambiar el estilo de la animación |
| **variant**   | 'primary' , 'secondary' , 'success' , 'danger' , 'warning' , 'info' , 'light' , 'dark' | el color que tendrá el spinner         |

Se lo puede ver en: `src > Components > GlobalComponents > Loading > SpinnerGrow`.

3. **Loader para textos, botones, span (skeletonLoader)**: como **skeleton** utilizamos el componente `Placeholder` de [React-Bootrstrap](https://react-bootstrap.netlify.app/components/placeholder/#example) para hacer un efecto de carga en el texto. Ya tiene las clases **d-flex flex-wrap justify-content-center mb-2** para que este centrado. Recibe por _props_ :

| Nombre        | Valor            | Descripción                                    |
| ------------- | ---------------- | ---------------------------------------------- |
| **animation** | 'glow' , 'wave'  | para cambiar el estilo de la animación         |
| **size**      | 'xs', 'sm', 'lg' | para modificar el tamaño                       |
| **as**        | 'p'              | para que el span se muestre como otra etiqueta |
| **xs**        | 1, 2,..., 12     | la cantidad de columnas que tendra             |

Por default se setea: `size ="lg", as = "p", animation="glow",xs=10`

Se lo puede ver en: `src > Components > GlobalComponents > Loading > TextLoader`.

4. **Loader para botones (ButtonLoader)**: como **skeleton** utilizamos el componente `Placeholder` de [React-Bootrstrap](https://react-bootstrap.netlify.app/components/placeholder/#example). Recibe por _props_ :

| Nombre        | Valor                                                                                 | Descripción                            |
| ------------- | ------------------------------------------------------------------------------------- | -------------------------------------- |
| **animation** | 'glow' , 'wave'                                                                       | para cambiar el estilo de la animación |
| **variant**   | primary' , 'secondary' , 'success' , 'danger' , 'warning' , 'info' , 'light' , 'dark' | el color que tendrá el texto           |
| **xs**        | 1, 2,..., 12                                                                          | la cantidad de columnas que tendra     |
| **size**      | 'xs' , 'sm' , 'lg'                                                                    | para el tamaño                         |

Se lo puede ver en: `src > Components > GlobalComponents > Loading > ButtonLoader`.

5. **Alerta** : para mostrar alertas de **confirmación**, **error** e **información**, utilizando la librería: [**sweetAlert2**](https://www.npmjs.com/package/sweetalert2-react). Se lo puede ver en:

`src > utilities > alerts > feedBackUser.util.js`

`src > utilities > alerts > userConfirm.util.js`.

**feedbackUser** -> recibe 3 parametros:

| Parámetro    | Valores                                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **position** | la posición en que se verá el cartel: _top_, _top-start_, _top-end_, _center_, _center-start_, _center-end_, _bottom_, _bottom-start_, _bottom-end_ |
| **icon**     | el ícono: _warning_, _error_, _success_, _info_, _question_                                                                                         |
| **title**    | el mensaje que mostrará, es un _String_                                                                                                             |

**userConfirm** -> recibe solo un parámetro (\*String) que es el mensaje que se muestra.

---

## Variables de entorno

Al momento tenemos una sola variable de entorno, para la conexión con la API:

`REACT_APP_BASE_URL="https://ongapi.alkemy.org/api"`

---

## <img src="https://img.icons8.com/bubbles/30/null/gender-neutral-user.png"/> Login

Para loguearse como administrador creamos el siguiente usuario de prueba:

nombre: **pedro**

email: **pedro3@gmail.com**

password: **123qwe!**


---

## <img src="https://img.icons8.com/office/30/null/console.png"/> Scripts disponibles

En este proyecto, podés correr:

### `npm install`

Para instalarte todos las dependencias que utiliza el proyecto.

### `npm start`

Para correr la app en el modo development.

Para poder verlo en el navegador, abrir: [http://localhost:3000](http://localhost:3000).

---
