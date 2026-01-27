# Contratos API - J2Systems Landing Page

## Resumen
Backend para landing page J2Systems que gestiona mensajes de contacto enviados desde el formulario.

## Frontend Mock Data (Actualmente en Home.jsx)
El formulario actualmente simula el envío de mensajes mostrando un toast de éxito. No hay datos mock en archivo separado ya que es solo una simulación de envío.

### Estado del Formulario:
```javascript
{
  name: string,
  email: string,
  company: string (opcional),
  message: string
}
```

## Backend a Implementar

### 1. Modelo de Datos (MongoDB)

**Colección: `contact_messages`**
```python
{
  id: string (UUID),
  name: string,
  email: string,
  company: string (opcional),
  message: string,
  whatsapp_number: string (número de WhatsApp del usuario si se detecta),
  created_at: datetime,
  read: boolean (default: False),
  replied: boolean (default: False)
}
```

### 2. Endpoints API

#### POST /api/contact
**Descripción**: Crear nuevo mensaje de contacto
**Request Body**:
```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "company": "Empresa XYZ",
  "message": "Interesado en integración con Odoo"
}
```
**Response (201)**:
```json
{
  "id": "uuid",
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "company": "Empresa XYZ",
  "message": "Interesado en integración con Odoo",
  "created_at": "2025-01-27T20:00:00Z",
  "read": false,
  "replied": false
}
```

#### GET /api/contact
**Descripción**: Obtener todos los mensajes de contacto (para panel admin futuro)
**Response (200)**:
```json
[
  {
    "id": "uuid",
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "company": "Empresa XYZ",
    "message": "Interesado en integración con Odoo",
    "created_at": "2025-01-27T20:00:00Z",
    "read": false,
    "replied": false
  }
]
```

#### GET /api/contact/{contact_id}
**Descripción**: Obtener mensaje específico por ID
**Response (200)**: Objeto de contacto individual

#### PATCH /api/contact/{contact_id}
**Descripción**: Actualizar estado del mensaje (marcar como leído/respondido)
**Request Body**:
```json
{
  "read": true,
  "replied": false
}
```

## Integración Frontend-Backend

### Cambios Necesarios en Frontend:

1. **Home.jsx - Función handleSubmit**:
   - Reemplazar simulación mock por llamada real a API
   - Hacer POST a `${API}/contact` con formData
   - Manejar errores de red/servidor
   - Mostrar toast de éxito/error según respuesta

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${API}/contact`, formData);
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé pronto.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  } catch (error) {
    toast({
      title: "Error",
      description: "No se pudo enviar el mensaje. Intenta nuevamente.",
      variant: "destructive"
    });
  }
};
```

2. **Validaciones**:
   - Email válido (ya existe validación HTML5)
   - Campos requeridos: name, email, message
   - Campo opcional: company

## Notas de Implementación

- Usar FastAPI para endpoints
- MongoDB con motor/motor_asyncio
- Validación con Pydantic models
- CORS ya configurado en server.py
- Todos los endpoints con prefijo `/api`
- Manejo de errores apropiado (400, 404, 500)
- Logs de operaciones importantes

## Orden de Implementación

1. Crear modelo Pydantic para ContactMessage
2. Implementar POST /api/contact
3. Implementar GET /api/contact
4. Implementar GET /api/contact/{id}
5. Implementar PATCH /api/contact/{id}
6. Integrar frontend con backend (quitar mock)
7. Testing de endpoints
