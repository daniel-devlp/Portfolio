# 📁 Portfolio Assets

## 📄 CV/Resume Section

Para que la sección de descarga de CV funcione correctamente:

### 1. **Archivo PDF del CV:**

```
public/assets/Daniel_Developer_Resume.pdf
```

### 2. **Actualizar referencia:**

Si cambias el nombre del archivo, actualiza la ruta en `src/constants/index.ts`:

```typescript
resume: "/assets/tu_nombre_cv.pdf";
```

## 🖼️ Imágenes Recomendadas

### **Social Media Preview:**

- `social-preview.jpg` (1200x630px) - Para Open Graph y Twitter Cards
- Formato: JPG/PNG, máximo 1MB

### **Iconos del Portfolio:**

- `favicon.ico` - 32x32px (ya incluido)
- `logo192.png` - 192x192px (ya incluido)
- `logo512.png` - 512x512px (ya incluido)

### **Proyectos:**

- Capturas de pantalla de tus proyectos
- Tamaño recomendado: 1200x800px
- Formato: JPG/WebP para mejor rendimiento

## 📊 Estructura Esperada

```
public/assets/
├── README.md                    # Este archivo
├── Daniel_Developer_Resume.pdf  # Tu CV
├── social-preview.jpg          # Preview para redes sociales
└── projects/                   # Screenshots de proyectos
    ├── project1-screenshot.jpg
    ├── project2-screenshot.jpg
    └── ...
```

## 📋 Checklist

- [ ] Subir CV en formato PDF (< 5MB)
- [ ] Crear imagen de preview social (1200x630px)
- [ ] Optimizar imágenes de proyectos
- [ ] Verificar que las rutas coincidan en el código
- [ ] Probar descarga del CV en producción

## 💡 Tips de Optimización

- **Comprime imágenes** usando herramientas como TinyPNG
- **Usa WebP** para mejor rendimiento cuando sea posible
- **Nombra archivos** de forma descriptiva y consistente
- **Mantén tamaños** razonables para carga rápida
