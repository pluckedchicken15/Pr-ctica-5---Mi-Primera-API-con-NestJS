1.-¿Qué generó el comando nest new?
Genero el proyecto NestJs con todas las dependencias necesarias

2.-¿Qué hace el AppService que ya viene generado?
Tiene un método que devuelve un hello world, en donde el controlador usa un método ya generado lo utiliza

3.-¿Por qué la ruta funciona sin declarar nada en app.module.ts?
porque en app module ya esta registrado el controlador, por lo tanto las rutas que necesitemos solo las tenemos 
que definir en el controlador 

4.-¿Qué pasaría si el cuerpo de la petición viniera vacío?
depende de la peticion, POST crea una clase solamente con id, PUT y PATCH lanzan un error 404

5.-¿En qué archivo vive hoy toda la lógica de la práctica?
en appcontroller


GET
<img width="1919" height="1079" alt="Captura de pantalla 2026-09-08 185057" src="https://github.com/user-attachments/assets/06e64405-6b70-4881-a604-21c9d44a5326" />

POST
<img width="1919" height="1079" alt="Captura de pantalla 2026-09-08 190315" src="https://github.com/user-attachments/assets/5cf6ada3-2680-4964-a65f-6a423704e99d" />

PATCH
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/2e220f48-31b5-4112-b8fb-abc153e8f91c" />

PUT
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/60409e53-b3e2-450a-b07c-b88dfde492f6" />




