API3 - API REST sencilla con Node.js y MySQL (XAMPP)

Descripción
- API mínima para gestionar usuarios (CRUD) usando `express` y `mysql2`.

Captura de ejemplo

![Captura de /api/usuarios](assets/usuarios_screenshot.png)

Requisitos

http://localhost/phpmyadmin/index.php?route=/database/structure&db=base_api

- Node.js (recomendado LTS).
- XAMPP (activar Apache y MySQL / MariaDB).

Configuración de base de datos (XAMPP)
- Por defecto `src/db.js` usa:
  - host: `localhost`
  - user: `root`
  - password: `` (vacío)
  - database: `base_Api`
- Abre `http://localhost/phpmyadmin` y crea la base `base_Api`.

SQL ejemplo (crear base y tabla):

```sql
CREATE DATABASE IF NOT EXISTS `base_Api`;
USE `base_Api`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL
);
```

Instalación y ejecución
1. Abrir PowerShell en la carpeta del proyecto.
2. Instalar dependencias:

```powershell
npm install
```

3. Ejecutar la API:

```powershell
node src/server.js
```

El servidor escucha en `http://localhost:3000`.

http://localhost:3000/api/usuarios

Endpoints principales
- GET `/api/usuarios` — listar usuarios
- GET `/api/usuarios/:id` — ver usuario por id
- POST `/api/usuarios` — crear usuario (JSON: `{ "nombre": "..", "email": ".." }`)
- PUT `/api/usuarios/:id` — actualizar usuario
- DELETE `/api/usuarios/:id` — eliminar usuario

Notas rápidas
- Si obtienes `ER_ACCESS_DENIED_ERROR`, revisa `user`/`password` en `src/db.js`.
- Si MySQL no responde, abre XAMPP y arranca `MySQL`.
- Para cambiar el puerto del servidor, edita `src/server.js`.

Instrucciones para añadir la imagen
- Guarda la captura que me enviaste con el nombre `usuarios_screenshot.png` dentro de la carpeta `src/assets/`.
- Después, abre `src/README.md` en el editor para verla incrustada.

Contacto
- Si quieres, puedo mover este README a la raíz o añadir un script `start` en `package.json`.


