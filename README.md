
# 🛠️ API - Prueba Marval

Este proyecto es una API desarrollada con **Node.js** con **express** y utiliza **MySQL** como sistema de base de datos. 
Se ha diseñado para que el servicio de mysql funcione con Docker..

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- ✅ [Docker]
- ✅ [Node.js]

---

## ⚙️ Configuración del Proyecto

### 1. Clona el repositorio

```bash
git clone https://github.com/MoisesRoblesScott/marval_backend
```

### 2. Levantar el Servicio de MySQL con Docker
Primero, asegúrate de tener Docker en funcionamiento.
Luego, en la terminal, ejecuta el siguiente comando en la raíz del proyecto:

```bash
docker-compose up
```

Este comando hará lo siguiente:

Levantará un contenedor con el servicio de MySQL

Creará una base de datos llamada **db_prueba_marval**

Generará una carpeta dentro del proyecto llamada **mysql_data** donde se almacenará la información persistente de la base de datos

### Datos de Conexión a la Base de Datos

Para conectarte al motor de base de datos (por ejemplo, desde MySQL Workbench o cualquier cliente de SQL), utiliza la siguiente configuración:

```bash
Servidor (host): localhost

Base de datos: db_prueba_marval

Usuario: moy_mysql

Contraseña: qwerty
```

Nota: La base de datos se crea vacía, sin tablas.

### 3: Instalar Dependencias del Proyecto
En una nueva terminal (sin cerrar la terminal donde se ejecutó Docker), ejecuta el siguiente comando para instalar las dependencias de Node.js:

```bash
npm install
```

### 4: Levantar el Servidor de Node
Una vez instaladas las dependencias, en otra terminal nueva, ejecuta el siguiente comando para iniciar el servidor de desarrollo:
esto crea las tablas en la base de datos gracias al ORM utilizado en node que es **sequelize** 

```bash
npm install
```

El servidor quedará corriendo y ya podrás probar las APIs.

Puedes usar herramientas como Postman para realizar solicitudes a los endpoints de la API y verificar su funcionamiento.
