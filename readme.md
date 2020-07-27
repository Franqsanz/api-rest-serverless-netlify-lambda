# API REST Serverless + Netlify Lambda, Example

Ejemplo de como construir una API con express utilizando serverless + netlify lambda.

### Breve descripción

En el archivo `netlify.toml`, esta definido la redirección que hace la app.
Ejemplo:

```toml
[[redirects]]
    # El "from" hace referencia al "/.netlify/functions/api"
    # El "/api" es el entrypoint, sin esto jamas la app encontrara las demas rutas.
    from = "/api"
```

Entonces en la URL debes ingresar: `http://localhost:9000/api/fruit`. Si no se ingresa el entrypoint `/api` o la que tu declares, encontrarás el siguiente error.
`You have requested the root of http://localhost:9000. This is likely a mistake. netlify-lambda serves functions at http://localhost:9000/.netlify/functions/your-function-name; please fix your code.`
Este error es un 404 ya que la app no encuentra la ruta.
