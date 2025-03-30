# 🧪 Desafío TOTS - QA Analyst

Este repositorio contiene la resolución completa de los **3 desafíos técnicos** propuestos para el puesto de QA Analyst en TOTS. Se abordan pruebas manuales, API testing y automatización end-to-end con Playwright.

---

## 🧾 Contenido del Repositorio


---

## ✅ Desafío 1 – Pruebas Manuales (Mobile)

Ubicación: `Desafio Mobile`

Se documentaron casos de prueba exploratorios para una app mobile basada en IA (AI Assist View), incluyendo:

- Navegación entre pestañas
- Botones informativos
- Inputs válidos e inválidos
- Errores visuales (bugs)

Además, se detectó un bug real sobre superposición de campos. El reporte está documentado según el formato solicitado (dispositivo, pasos, resultado esperado/obtenido, evidencia, etc.).

---

## 🌐 Desafío 2 – API Testing sobre GoRest

Ubicación: `Desafio Api`

Se desarrolló una colección en Postman para testear la API pública de GoRest, incluyendo:

- 4 recursos probados: Users, Posts, Comments, Todos
- 4 métodos por recurso: GET, POST, PUT, DELETE
- Validaciones automáticas de status codes y estructura de respuestas
- Pruebas negativas (422) para validar errores de la API
- Uso de token y headers necesarios

📄 Documentación técnica en: `TOTS Test - QA Analyst.docx`  
📬 Postman Collection: https://drive.google.com/file/d/1ER3BFF2a_RRbzNBCp4H0cBWanBWBd80f/view?usp=drive_link

---

## 🤖 Desafío 3 – Automatización End-to-End

Ubicación: `Desafio Playwright`

Se automatizó un flujo de registro exitoso en la web **Pushing IT** (`https://pushing-it.vercel.app`) usando **Playwright + JavaScript**.

### Flujo Automatizado:
- Navegación al sitio
- Completar formulario dinámicamente (`Date.now()` para evitar duplicados)
- Selección de género, fecha y checkbox
- Envío y verificación de mensaje de bienvenida

📄 Código del test: `tests/pushingIT.spec.js`  
📊 Reporte HTML generado: `playwright-report/index.html`

---

## 🧼 Limpieza y buenas prácticas

- Se utilizó un archivo `.gitignore` para excluir carpetas innecesarias como `node_modules`, `test-results`, etc.
- La estructura fue organizada por desafío.
- Cada sección fue comentada, documentada y validada.

---

## 📧 Contacto

**GitHub:** [RiichAlex](https://github.com/RiichAlex)  
**Email:** anthuam2013@gmail.com

---

🎯 **Entregado con dedicación, aprendizaje y esfuerzo.**  
¡Gracias por la oportunidad! 💻✨

