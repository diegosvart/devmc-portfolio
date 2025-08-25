# Git Best Practices - Flujo de Trabajo con Ramas

## 📋 Índice
- [Estructura de Ramas](#estructura-de-ramas)
- [Convenciones de Nomenclatura](#convenciones-de-nomenclatura)
- [Flujo de Trabajo](#flujo-de-trabajo)
- [Comandos Principales](#comandos-principales)
- [Ejemplos Prácticos](#ejemplos-prácticos)
- [Buenas Prácticas Adicionales](#bue---

## 📋 Ejemplo Completo de Release: v1.2.0

### Contexto del Release
Im# Opción B: Desde GitHub Web (más común)

**Paso 1: Subir tu rama**
```bash
git push -u origin feature/add-contact-form
```

**Paso 2: Acceder a GitHub**
1. Ve a `https://github.com/diegosvart/devmc-portfolio`
2. GitHub detectará automáticamente tu nueva rama
3. **Si aparece el banner amarillo**:
   ```
   feature/add-contact-form had recent pushes 2 minutes ago
   [Compare & pull request]
   ```
   Hacer clic en **"Compare & pull request"**

**Paso 2B: Si NO aparece el banner (común)**
1. Ir a la pestaña **"Pull requests"**
2. Click **"New pull request"**
3. O usar URL directa: `https://github.com/tuusuario/tu-repo/compare/develop...feature/add-contact-form`

**¿Por qué no aparece el banner?**
- ⏰ Solo aparece por ~10 minutos después del push
- 🎯 GitHub asume merge a `main`, no `develop`
- 🔧 Configuración de rama por defecto
- 🌐 Cache del navegador

**Paso 3: Configurar el Pull Request**s completado varias features en `develop`:
- ✅ `feature/add-dark-mode` (ya merged)
- ✅ `feature/improve-responsive-design` (ya merged)  
- ✅ `feature/add-detail-stack` (recién completada)

La feature `feature/add-detail-stack` consistió en:
1. Agregar funcionalidad de botón para ver detalles
2. Agregar cuadro dialog modal
3. Agregar información detallada de tecnologías
4. Implementar detalles de diseño responsivo

### Paso a Paso del Release Process

#### 1. Situación Inicial
```bash
# Estado actual del repositorio
main: v1.1.0 (último release en producción)
develop: contiene todas las features listas
  - Dark mode implementado
  - Responsive design mejorado
  - Stack detail dialog completado
```

#### 2. Crear Rama Release
```bash
# 1. Moverse a develop y actualizar
git checkout develop
git pull origin develop

# 2. Crear rama release
git checkout -b release/v1.2.0
```

#### 3. Preparar Archivos de Release

**Archivo: `package.json`** (si existiera)
```json
{
  "name": "devmc-portfolio",
  "version": "1.2.0",  // ← CAMBIO: era 1.1.0
  "description": "Portfolio Full-Stack con dark mode y stack details",
  "scripts": {
    "build": "npm run build",
    "deploy": "npm run deploy"
  }
}
```

**Archivo: `CHANGELOG.md`** (crear/actualizar)
```markdown
# Changelog

## [1.2.0] - 2025-07-30

### Added
- Dialog modal para detalles de tecnologías del stack
- Información detallada de cada tecnología (React, Node.js, Python, etc.)
- Botones interactivos en la sección de skills
- Animaciones de entrada y salida para el modal

### Improved
- Responsive design optimizado para móviles
- Dark mode más consistente en todos los componentes
- Performance del chart de skills mejorada

### Fixed
- Overflow del navigation bar en dispositivos móviles
- Layout de botones de contacto en pantallas pequeñas

## [1.1.0] - 2025-07-28

### Added
- Dark mode toggle functionality
- Responsive navigation with mobile menu
- Skills chart with Chart.js integration

### Fixed
- Mobile responsive issues
- Chart display problems
```

**Archivo: `index.html`** (actualizar meta tags)
```html
<!-- Actualizar versión en meta description -->
<meta name="description" content="Portfolio Full-Stack v1.2.0 - Desarrollador especializado en React, Node.js, Python. Ahora con detalles interactivos de tecnologías.">
```

#### 4. Commits en la Rama Release
```bash
# Commit 1: Actualizar versión
git add package.json index.html
git commit -m "chore: bump version to 1.2.0"

# Commit 2: Actualizar changelog
git add CHANGELOG.md
git commit -m "docs: update changelog for v1.2.0 release"

# Commit 3: Últimos ajustes si es necesario
git add .
git commit -m "chore: final adjustments for v1.2.0 release"
```

#### 5. Testing Pre-Release
```bash
# Verificar que todo funciona
# - Probar dark mode
# - Probar responsive design  
# - Probar el nuevo dialog de stack details
# - Verificar que no hay errores en consola
```

#### 6. Merge a Main (Producción)
```bash
# 1. Cambiar a main
git checkout main
git pull origin main

# 2. Merge SIN fast-forward (importante!)
git merge --no-ff release/v1.2.0

# 3. Crear tag anotado
git tag -a v1.2.0 -m "Release v1.2.0: Stack details dialog and improvements"

# 4. Push con tags
git push origin main --tags
```

#### 7. Merge de Vuelta a Develop
```bash
# 1. Volver a develop
git checkout develop

# 2. Merge los cambios del release
git merge --no-ff release/v1.2.0

# 3. Push develop actualizado
git push origin develop
```

#### 8. Limpiar Rama Release
```bash
# Eliminar rama local
git branch -d release/v1.2.0

# Eliminar rama remota
git push origin --delete release/v1.2.0
```

### Archivos Típicos que se Modifican en un Release

#### Archivos de Versión
- `package.json` - Número de versión
- `VERSION` - Archivo dedicado a versión (si existe)
- `index.html` - Meta tags con nueva versión

#### Archivos de Documentación
- `CHANGELOG.md` - Historial de cambios
- `README.md` - Actualizar versión y features
- `docs/` - Documentación técnica actualizada

#### Archivos de Configuración
- `.github/workflows/` - Scripts de CI/CD
- `deployment/` - Configuraciones de despliegue
- Environment variables - Si hay cambios

### Ejemplo de Estructura Después del Release

```
Estado del repositorio después del release v1.2.0:

main (v1.2.0)
├── index.html (con stack details dialog)
├── js/main.js (funcionalidad del modal)
├── css/style.css (estilos del dialog)
├── package.json (version: "1.2.0")
├── CHANGELOG.md (historial actualizado)
└── README.md (documentación actualizada)

develop (sincronizado con main)
├── (mismo contenido que main)
└── listo para nuevas features

Tags:
├── v1.0.0 (release inicial)
├── v1.1.0 (dark mode + responsive)
└── v1.2.0 (stack details dialog) ← NUEVO
```

### ¿Por Qué Este Proceso?

1. **Rama Release Separada**: Permite hacer ajustes finales sin afectar desarrollo
2. **Merge --no-ff**: Preserva el historial de la rama en el log
3. **Tags Anotados**: Marcan puntos específicos en el historial
4. **Merge Bidireccional**: Mantiene `develop` sincronizado con `main`
5. **Changelog**: Documenta qué cambió para usuarios y developers

### Resultado Final
- ✅ `main` tiene el código de producción v1.2.0
- ✅ Tag `v1.2.0` marca esta versión específica
- ✅ `develop` está sincronizado y listo para nuevas features
- ✅ GitHub Pages se actualiza automáticamente
- ✅ Historial limpio y documentado


## 🌳 Estructura de Ramas

### Ramas Principales
```
main (producción)
├── develop (desarrollo)
    ├── feature/nueva-funcionalidad
    ├── feature/mejora-ui
    ├── hotfix/error-critico
    └── release/v1.2.0
```

### Tipos de Ramas

| Rama      | Propósito | Origen | Destino |
|------     |-----------|--------|---------|
| `main` | Código en producción | - | - |
| `develop` | Desarrollo principal | `main` | `main` |
| `feature/*` | Nuevas funcionalidades | `develop` | `develop` |
| `release/*` | Preparación de versiones | `develop` | `main` + `develop` |
| `hotfix/*` | Correcciones urgentes | `main` | `main` + `develop` |

## 📝 Convenciones de Nomenclatura

### Nombres de Ramas
```bash
# Features
feature/add-dark-mode
feature/improve-responsive-design
feature/implement-contact-form

# Releases
release/v1.0.0
release/v1.1.0

# Hotfixes
hotfix/fix-mobile-navigation
hotfix/security-patch-auth

# Bugfixes
bugfix/fix-chart-rendering
bugfix/contact-form-validation
```

### Commits Convencionales
```bash
feat: add dark mode toggle functionality
fix: resolve mobile navigation overflow issue
docs: update README with deployment instructions
style: improve responsive design for contact section
refactor: optimize chart initialization code
test: add unit tests for dark mode functionality
chore: update dependencies to latest versions
```

## 🔄 Flujo de Trabajo

### 1. Configuración Inicial del Repositorio

```bash
# Crear y cambiar a la rama develop
git checkout -b develop
git push -u origin develop

# Configurar develop como rama por defecto para pull requests
# (Esto se hace en GitHub/GitLab settings)
```

### 2. Trabajar en una Nueva Funcionalidad

```bash
# 1. Actualizar develop
git checkout develop
git pull origin develop

# 2. Crear rama feature
git checkout -b feature/add-contact-form

# 3. Desarrollar y hacer commits
git add .
git commit -m "feat: add contact form HTML structure"
git commit -m "feat: implement form validation logic"
git commit -m "style: add responsive styles for contact form"

# 4. Subir la rama
git push -u origin feature/add-contact-form

# 5. Crear Pull Request a develop
# Opción A: Desde la terminal con GitHub CLI
gh pr create --base develop --head feature/add-contact-form --title "feat: add contact form functionality" --body "Implementa formulario de contacto con validación y diseño responsive"

# Opción B: Desde GitHub Web (más común)
# 1. Ir a https://github.com/tuusuario/tu-repo
# 2. GitHub detectará la nueva rama y mostrará un banner
# 3. Hacer clic en "Compare & pull request"
# 4. Configurar:
#    - Base: develop (rama destino)
#    - Compare: feature/add-contact-form (tu rama)
#    - Título: "feat: add contact form functionality"
#    - Descripción: Detallar qué hace la feature
# 5. Agregar reviewers si es necesario
# 6. Hacer clic en "Create pull request"

# Opción C: Desde VS Code con extensión GitHub
# 1. Abrir Command Palette (Ctrl+Shift+P)
# 2. Buscar "GitHub Pull Requests: Create Pull Request"
# 3. Seleccionar base branch: develop
# 4. Completar título y descripción
# 5. Crear PR

# 6. Después del merge, limpiar
git checkout develop
git pull origin develop
git branch -d feature/add-contact-form
git push origin --delete feature/add-contact-form
```

### 3. Preparar un Release

```bash
# 1. Crear rama release desde develop
git checkout develop
git pull origin develop
git checkout -b release/v1.1.0

# 2. Actualizar versiones y changelog
# - Actualizar package.json, version numbers
# - Actualizar CHANGELOG.md
git add .
git commit -m "chore: bump version to 1.1.0"

# 3. Merge a main
git checkout main
git pull origin main
git merge --no-ff release/v1.1.0
git tag -a v1.1.0 -m "Release version 1.1.0"
git push origin main --tags

# 4. Merge de vuelta a develop
git checkout develop
git merge --no-ff release/v1.1.0
git push origin develop

# 5. Limpiar rama release
git branch -d release/v1.1.0
git push origin --delete release/v1.1.0
```

### 4. Hotfix Urgente

```bash
# 1. Crear hotfix desde main
git checkout main
git pull origin main
git checkout -b hotfix/fix-critical-bug

# 2. Corregir el problema
git add .
git commit -m "fix: resolve critical security vulnerability"

# 3. Merge a main
git checkout main
git merge --no-ff hotfix/fix-critical-bug
git tag -a v1.1.1 -m "Hotfix version 1.1.1"
git push origin main --tags

# 4. Merge a develop
git checkout develop
git merge --no-ff hotfix/fix-critical-bug
git push origin develop

# 5. Limpiar
git branch -d hotfix/fix-critical-bug
git push origin --delete hotfix/fix-critical-bug
```

## � Guía Completa de Pull Requests

### ¿Qué es un Pull Request?
Un Pull Request (PR) es una solicitud para fusionar cambios de una rama a otra. Es el mecanismo principal para:
- **Code Review**: Revisar código antes de merge
- **Colaboración**: Discutir cambios con el equipo
- **Quality Control**: Ejecutar tests automáticos
- **Documentación**: Registrar qué cambios se hicieron y por qué

### Métodos para Crear Pull Requests

#### 🖥️ Opción A: GitHub CLI (Desde Terminal)
```bash
# Instalar GitHub CLI (solo una vez)
# Windows con Chocolatey: choco install gh
# Windows con Winget: winget install GitHub.cli
# O descargar desde: https://cli.github.com/

# Autenticarse (solo la primera vez)
gh auth login

# Crear PR directamente desde terminal
gh pr create \
  --base develop \
  --head feature/add-contact-form \
  --title "feat: add contact form functionality" \
  --body "Implementa formulario de contacto con validación y diseño responsive"

# Ver PRs existentes
gh pr list

# Ver detalles de un PR
gh pr view 123

# Hacer merge desde CLI
gh pr merge 123 --merge  # o --squash o --rebase
```

#### 🌐 Opción B: GitHub Web Interface (Más Común)

**Paso 1: Subir tu rama**
```bash
git push -u origin feature/add-contact-form
```

**Paso 2: Acceder a GitHub**
1. Ve a `https://github.com/diegosvart/devmc-portfolio`
2. GitHub detectará automáticamente tu nueva rama
3. Aparecerá un **banner amarillo**:
   ```
   feature/add-contact-form had recent pushes 2 minutes ago
   [Compare & pull request]
   ```

**Paso 3: Configurar el Pull Request**
Al hacer clic en **"Compare & pull request"**:

```
┌─────────────────────────────────────────────────────────┐
│ Open a pull request                                     │
├─────────────────────────────────────────────────────────┤
│ Title: feat: add contact form functionality            │
│                                                         │
│ Base: develop    ←  Compare: feature/add-contact-form  │
│                                                         │
│ Write  Preview                                          │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ ## 📝 Resumen                                       │ │
│ │ Implementa formulario de contacto funcional con    │ │
│ │ validación y diseño responsive.                    │ │
│ │                                                     │ │
│ │ ## ✅ Cambios Realizados                           │ │
│ │ - ✅ Estructura HTML del formulario               │ │
│ │ - ✅ Validación JavaScript en tiempo real         │ │
│ │ - ✅ Estilos CSS responsive                       │ │
│ │ - ✅ Integración con EmailJS para envío           │ │
│ │                                                     │ │
│ │ ## 🧪 Testing                                      │ │
│ │ - ✅ Probado en Chrome, Firefox, Safari           │ │
│ │ - ✅ Responsive en móviles y tablets              │ │
│ │ - ✅ Validación de campos requeridos              │ │
│ │ - ✅ Envío de emails funcional                    │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ Reviewers   Assignees   Labels   Projects   Milestone  │
│ [Search]    [Search]    [Search] [Search]   [Search]   │
│                                                         │
│ [ ] Allow edits by maintainers                         │
│                                                         │
│           [Create pull request]                        │
└─────────────────────────────────────────────────────────┘
```

**Campos Importantes:**
- **Base**: `develop` (rama destino)
- **Compare**: `feature/add-contact-form` (tu rama)
- **Title**: Usar convención de commits
- **Description**: Detallar cambios, testing, screenshots

**Paso 4: Opciones Adicionales**
- **Reviewers**: Asignar personas para code review
- **Assignees**: Asignarte a ti mismo como responsable
- **Labels**: `feature`, `enhancement`, `bug`, etc.
- **Projects**: Si usas GitHub Projects para organización
- **Milestone**: Para agrupar PRs por versión/sprint

#### 💻 Opción C: VS Code con Extensión GitHub

**Instalación y Configuración:**
1. Instalar **"GitHub Pull Requests and Issues"** en VS Code
2. `Ctrl+Shift+P` → **"GitHub: Sign In"**
3. Autenticarse con tu cuenta de GitHub

**Crear PR desde VS Code:**
1. `Ctrl+Shift+P` → **"GitHub Pull Requests: Create Pull Request"**
2. Configurar:
   - **Base branch**: `develop`
   - **Compare branch**: `feature/add-contact-form`
   - **Title**: `feat: add contact form functionality`
   - **Description**: Detallar cambios
3. Click **"Create"**

**Ventajas de VS Code:**
- Sin salir del editor
- Preview del diff integrado
- Code review desde VS Code
- Notificaciones en tiempo real

### Template Profesional para Descripción de PR

```markdown
## 📝 Descripción
Breve explicación de qué hace esta feature y por qué es necesaria.

## 🎯 Tipo de Cambio
- [ ] 🐛 Bug fix (cambio que corrige un issue)
- [x] ✨ Nueva feature (cambio que agrega funcionalidad)
- [ ] 💥 Breaking change (fix o feature que causa que funcionalidad existente no funcione como antes)
- [ ] 📚 Documentación (cambios solo en documentación)
- [ ] 🎨 Estilo (cambios que no afectan el significado del código)
- [ ] ♻️ Refactor (cambio de código que no corrige bug ni agrega feature)
- [ ] ⚡ Performance (cambio que mejora performance)
- [ ] ✅ Test (agregar tests faltantes o corregir tests existentes)

## ✅ Checklist
- [x] Mi código sigue las convenciones de estilo del proyecto
- [x] He realizado self-review de mi código
- [x] He comentado mi código, particularmente en áreas difíciles de entender
- [x] He hecho cambios correspondientes a la documentación
- [x] Mis cambios no generan nuevas warnings
- [x] He agregado tests que prueban que mi fix es efectivo o que mi feature funciona
- [x] Tests unitarios nuevos y existentes pasan localmente con mis cambios
- [x] Cualquier cambio dependiente ha sido merged y publicado

## 🧪 Cómo Testear
1. Hacer checkout de esta rama: `git checkout feature/add-contact-form`
2. Abrir `index.html` en el navegador
3. Navegar a la sección de contacto
4. Completar el formulario con datos válidos
5. Verificar validación en tiempo real
6. Enviar y confirmar recepción del email
7. Probar en móvil para verificar responsive design

## 📸 Screenshots (Si Aplica)
### Antes
![Antes](url-imagen-antes)

### Después  
![Después](url-imagen-despues)

## 🔗 Issues Relacionados
Fixes #123
Closes #456
Related to #789
```

### Proceso Después del Pull Request

#### 1. Code Review
```bash
# Otros developers revisan tu código
# Pueden dejar comentarios, sugerencias, o aprobar

# Si necesitas hacer cambios:
git checkout feature/add-contact-form
# ... hacer cambios ...
git add .
git commit -m "fix: address code review comments"
git push origin feature/add-contact-form
# Los cambios aparecerán automáticamente en el PR
```

#### 2. Checks Automáticos
- **CI/CD**: GitHub Actions ejecuta tests
- **Linting**: Verificación de estilo de código
- **Security**: Escaneo de vulnerabilidades
- **Performance**: Tests de rendimiento

#### 3. Merge del Pull Request
```bash
# Opción A: Merge Commit (recomendado para features)
# Preserva historial completo de la rama
git merge --no-ff feature/add-contact-form

# Opción B: Squash and Merge  
# Combina todos los commits en uno solo
# Útil para cleaning up historial

# Opción C: Rebase and Merge
# Aplica commits uno por uno sin merge commit
# Historial más limpio pero pierde contexto de rama
```

#### 4. Limpieza Post-Merge
```bash
# Después de que el PR sea merged:

# 1. Cambiar a develop
git checkout develop

# 2. Actualizar con los nuevos cambios
git pull origin develop

# 3. Eliminar rama local (ya no necesaria)
git branch -d feature/add-contact-form

# 4. Eliminar rama remota (opcional, GitHub puede hacerlo automáticamente)
git push origin --delete feature/add-contact-form

# 5. Verificar que todo está actualizado
git log --oneline -10  # Ver últimos 10 commits
```

### Comandos Útiles para Pull Requests

```bash
# Ver diferencias antes de crear PR
git diff develop..feature/add-contact-form

# Ver commits que se incluirán en el PR
git log develop..feature/add-contact-form --oneline

# Actualizar tu rama con últimos cambios de develop
git checkout feature/add-contact-form
git rebase develop  # O git merge develop

# Ver estado de todos los PRs (con GitHub CLI)
gh pr list --state all

# Checkout de un PR para testing local
gh pr checkout 123

# Ver reviews de un PR
gh pr reviews 123
```

### Configuración Recomendada para el Repositorio

#### Branch Protection Rules (Configurar en GitHub)
1. Ir a **Settings** → **Branches**
2. Agregar regla para `main`:
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ❌ Include administrators ← **Desmarcar para proyectos personales**
3. Agregar regla para `develop`:
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
   - ❌ Include administrators ← **Desmarcar para proyectos personales**

#### ¿Por Qué Esta Configuración?

**Para Proyectos Personales:**
- ✅ **Mantiene el Workflow de PRs**: Practicas Git Flow profesional
- ✅ **Flexibilidad para Owner**: Puedes hacer merge sin external review
- ✅ **Historial Documentado**: Cada cambio tiene contexto en el PR
- ✅ **Portfolio Profesional**: Muestra conocimiento de best practices
- ✅ **Preparación para Equipos**: Cuando trabajes con otros, ya conoces el proceso

**Para Proyectos en Equipo:**
- ✅ **Marcar "Include administrators"**: Fuerza review incluso para owners
- ✅ **Asignar Reviewers Obligatorios**: Garantiza que alguien más revise
- ✅ **Require Status Checks**: CI/CD debe pasar antes de merge

#### Configuración Alternativa: Auto-Review Educativo

Si prefieres mantener la restricción de auto-approval como ejercicio de disciplina:

1. **Self-Review Process**:
   ```markdown
   # En cada PR, agrega comentarios de auto-review:
   
   ## 🔍 Self-Review Checklist
   - ✅ Código sigue convenciones del proyecto
   - ✅ Tests agregados/actualizados  
   - ✅ Documentación actualizada
   - ✅ No hay console.logs o código debug
   - ✅ Variables y funciones tienen nombres descriptivos
   - ✅ Responsive design verificado
   
   ## 💭 Consideraciones
   - **Alternativas evaluadas**: Por qué elegí este approach
   - **Posibles mejoras**: Qué podría optimizarse en el futuro
   - **Breaking changes**: Si los hay, están documentados
   ```

2. **Invitar Colaborador Virtual**:
   - Crear una segunda cuenta GitHub para hacer reviews
   - O invitar a un amigo developer para code reviews ocasionales
   - Usar herramientas como CodeClimate o SonarCloud para análisis automático

#### PR Template (Opcional)
Crear archivo `.github/pull_request_template.md`:
```markdown
## Descripción
<!-- Describir brevemente los cambios -->

## Tipo de cambio
- [ ] Bug fix
- [ ] Nueva feature
- [ ] Breaking change
- [ ] Documentación

## Testing
<!-- Describir cómo testear los cambios -->

## Checklist
- [ ] Self-review completado
- [ ] Tests agregados/actualizados
- [ ] Documentación actualizada
```

---

## �🛠️ Comandos Principales

### Gestión de Ramas
```bash
# Ver todas las ramas
git branch -a

# Crear y cambiar a nueva rama
git checkout -b nombre-rama

# Cambiar de rama
git checkout nombre-rama

# Eliminar rama local
git branch -d nombre-rama

# Eliminar rama remota
git push origin --delete nombre-rama

# Renombrar rama actual
git branch -m nuevo-nombre
```

### Sincronización
```bash
# Actualizar rama actual
git pull origin nombre-rama

# Subir rama nueva
git push -u origin nombre-rama

# Subir cambios
git push origin nombre-rama

# Traer todas las ramas remotas
git fetch --all

# Ver diferencias entre ramas
git diff develop..feature/nueva-funcionalidad
```

### Merge y Rebase
```bash
# Merge sin fast-forward (recomendado)
git merge --no-ff feature/nombre

# Rebase interactivo para limpiar commits
git rebase -i HEAD~3

# Rebase rama actual con develop
git rebase develop

# Abortar rebase en caso de conflictos
git rebase --abort
```

### Tags y Versiones
```bash
# Crear tag anotado
git tag -a v1.0.0 -m "Version 1.0.0"

# Listar tags
git tag -l

# Subir tags
git push origin --tags

# Eliminar tag local
git tag -d v1.0.0

# Eliminar tag remoto
git push origin :refs/tags/v1.0.0
```

## 💡 Ejemplos Prácticos

### Ejemplo 1: Agregar Dark Mode
```bash
# 1. Crear feature
git checkout develop
git pull origin develop
git checkout -b feature/add-dark-mode

# 2. Desarrollo
git add css/style.css
git commit -m "style: add dark mode CSS variables"

git add js/main.js
git commit -m "feat: implement dark mode toggle functionality"

git add index.html
git commit -m "feat: add dark mode toggle button to navigation"

# 3. Push y PR
git push -u origin feature/add-dark-mode
# Crear Pull Request en GitHub
```

### Ejemplo 2: Mejorar Responsive Design
```bash
# 1. Crear feature
git checkout develop
git pull origin develop
git checkout -b feature/improve-responsive-design

# 2. Múltiples commits organizados
git add css/style.css
git commit -m "style: fix navigation overflow on mobile devices"

git add index.html
git commit -m "style: improve contact section layout for small screens"

git add css/style.css
git commit -m "style: optimize chart container for mobile view"

# 3. Push y PR
git push -u origin feature/improve-responsive-design
```

## ✅ Buenas Prácticas Adicionales

### Commits
- **Atómicos**: Un commit = un cambio lógico
- **Descriptivos**: Explicar qué y por qué, no cómo
- **Frecuentes**: Commit early, commit often
- **Testeados**: Nunca commitear código que no funciona

### Ramas
- **Vida corta**: Features pequeñas y enfocadas
- **Nombres descriptivos**: Usar convenciones claras
- **Actualizadas**: Mantener sincronizadas con develop
- **Limpias**: Eliminar después del merge

### Pull Requests
- **Descriptivos**: Título y descripción claros
- **Pequeños**: Más fáciles de revisar
- **Testeados**: Incluir pruebas si es necesario
- **Revisados**: Code review obligatorio

### Herramientas Útiles
```bash
# Configurar git aliases útiles
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'

# Configurar editor por defecto
git config --global core.editor "code --wait"

# Configurar merge tool
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'
```

### Flujo Recomendado para Este Proyecto
```bash
# Configuración inicial
git checkout -b develop
git push -u origin develop

# Para cada nueva feature
git checkout develop
git pull origin develop
git checkout -b feature/nombre-descriptivo
# ... desarrollo ...
git push -u origin feature/nombre-descriptivo
# ... pull request y merge ...

# Para releases
git checkout develop
git checkout -b release/v1.x.x
# ... preparar release ...
git checkout main
git merge --no-ff release/v1.x.x
git tag -a v1.x.x -m "Release v1.x.x"
git push origin main --tags
git checkout develop
git merge --no-ff release/v1.x.x
git push origin develop
```

---

## 🚀 Próximos Pasos

1. **Configurar ramas**: Crear `develop` branch
2. **Proteger main**: Configurar branch protection rules
3. **Templates**: Crear templates para PR y issues
4. **CI/CD**: Configurar GitHub Actions para testing
5. **Conventional Commits**: Implementar herramientas de linting

---

*📝 Documento creado el 30 de julio de 2025 para el proyecto devmc-portfolio*
