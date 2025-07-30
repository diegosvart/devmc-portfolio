# 🚀 Proyecto 1: MVP Portfolio Landing (4 Horas)

## 🎯 Objetivo de Hoy

Crear y desplegar un **landing page de portafolio** que actúe como punto de acceso a los 3 proyectos atomizados. MVP funcional en AWS S3 + CloudFront en 4 horas.

## ⚡ Stack Tecnológico (Simplificado)

```
🎨 Frontend: HTML5 + CSS3 + JavaScript (Vanilla)
🎨 Styling: Tailwind CSS (CDN)
📊 Interactividad: Chart.js (CDN)
☁️ Deploy: AWS S3 + CloudFront
🔄 CI/CD: GitHub Actions (simple)
```

## 🏗️ Plan de 4 Horas

### **Hora 1: Setup + Repositorio (0:00 - 1:00)**

#### **15 min: Crear Repositorio**
- [ ] Crear repo `project-1-portfolio-landing`
- [ ] Clonar localmente
- [ ] Crear estructura básica

#### **45 min: Desarrollar Landing Page**
- [ ] HTML base con secciones del portafolio
- [ ] Integrar Tailwind CSS
- [ ] Añadir navegación y enlaces a futuros proyectos
- [ ] Implementar gráficos con Chart.js

### **Hora 2: Funcionalidades Core (1:00 - 2:00)**

#### **30 min: Contenido del Portafolio**
- [ ] Sección "Sobre Mí" 
- [ ] Grid de proyectos (3 cards para los futuros proyectos)
- [ ] Sección de tecnologías con iconos
- [ ] Footer con links sociales

#### **30 min: Interactividad**
- [ ] Animaciones CSS suaves
- [ ] Gráfico de skills con Chart.js
- [ ] Navegación smooth scroll
- [ ] Responsive design

### **Hora 3: AWS Setup + Deploy (2:00 - 3:00)**

#### **20 min: Configurar AWS S3**
- [ ] Crear bucket S3
- [ ] Configurar static website hosting
- [ ] Subir archivos del proyecto

#### **20 min: Configurar CloudFront**
- [ ] Crear distribución CloudFront
- [ ] Configurar dominio personalizado (opcional)
- [ ] Configurar SSL/HTTPS

#### **20 min: Configurar GitHub Actions**
- [ ] Workflow para auto-deploy a S3
- [ ] Configurar secrets de AWS
- [ ] Test del pipeline

### **Hora 4: Testing + Documentación (3:00 - 4:00)**

#### **30 min: Testing + Optimización**
- [ ] Probar funcionalidad en diferentes dispositivos
- [ ] Optimizar imágenes y performance
- [ ] Validar HTML/CSS
- [ ] Test de velocidad

#### **30 min: Documentación + Siguiente Fase**
- [ ] Actualizar README con URLs live
- [ ] Documentar proceso de deploy
- [ ] Planificar Fase 2 (React + Backend)
- [ ] Crear issues para próximas funcionalidades

## 🚀 Comandos Paso a Paso

### **Paso 1: Crear Repositorio (5 min)**

```bash
# Crear en GitHub: project-1-portfolio-landing
# Clonar
git clone https://github.com/TU_USUARIO/project-1-portfolio-landing.git
cd project-1-portfolio-landing

# Crear estructura
mkdir assets css js
touch index.html
touch css/style.css
touch js/main.js
touch README.md
```

### **Paso 2: HTML Base (15 min)**

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Portafolio Full-Stack</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-lg">
        <nav class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold text-gray-800">Mi Portafolio</h1>
                <div class="space-x-6">
                    <a href="#about" class="text-gray-600 hover:text-blue-600">Sobre Mí</a>
                    <a href="#projects" class="text-gray-600 hover:text-blue-600">Proyectos</a>
                    <a href="#skills" class="text-gray-600 hover:text-blue-600">Skills</a>
                    <a href="#contact" class="text-gray-600 hover:text-blue-600">Contacto</a>
                </div>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-5xl font-bold mb-4">Desarrollador Full-Stack</h2>
            <p class="text-xl mb-8">Especializado en tecnologías modernas y arquitecturas escalables</p>
            <a href="#projects" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Ver Proyectos
            </a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16">
        <div class="container mx-auto px-6">
            <h3 class="text-3xl font-bold text-center mb-12">Sobre Mí</h3>
            <div class="max-w-3xl mx-auto text-center">
                <p class="text-lg text-gray-600 mb-6">
                    Soy un desarrollador full-stack con experiencia en tecnologías modernas como React, Node.js, 
                    Python, y cloud computing. Me especializo en crear soluciones escalables y eficientes.
                </p>
                <p class="text-lg text-gray-600">
                    Este portafolio demuestra mi experiencia práctica a través de proyectos reales desplegados 
                    en diferentes plataformas cloud.
                </p>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16 bg-gray-100">
        <div class="container mx-auto px-6">
            <h3 class="text-3xl font-bold text-center mb-12">Proyectos Live</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <!-- Proyecto 1 -->
                <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                    <div class="text-4xl mb-4">🚀</div>
                    <h4 class="text-xl font-bold mb-4">Modern Web Stack</h4>
                    <p class="text-gray-600 mb-4">E-commerce con React + Node.js + Golang</p>
                    <div class="space-y-2 text-sm text-gray-500 mb-6">
                        <div>🎨 React + TypeScript</div>
                        <div>⚙️ Node.js + Golang</div>
                        <div>🗃️ MongoDB + Redis</div>
                        <div>☁️ AWS ECS</div>
                    </div>
                    <div class="space-y-2">
                        <button class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                            🚧 En Desarrollo
                        </button>
                        <a href="#" class="block w-full bg-gray-200 text-gray-600 px-4 py-2 rounded text-center">
                            Ver Código 📁
                        </a>
                    </div>
                </div>

                <!-- Proyecto 2 -->
                <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                    <div class="text-4xl mb-4">🔥</div>
                    <h4 class="text-xl font-bold mb-4">Enterprise Stack</h4>
                    <p class="text-gray-600 mb-4">Dashboard Analytics con Angular + Python</p>
                    <div class="space-y-2 text-sm text-gray-500 mb-6">
                        <div>🎨 Angular + TypeScript</div>
                        <div>⚙️ Python + FastAPI</div>
                        <div>🗃️ PostgreSQL + Redis</div>
                        <div>☁️ Azure AKS</div>
                    </div>
                    <div class="space-y-2">
                        <button class="w-full bg-gray-400 text-white px-4 py-2 rounded">
                            📅 Próximamente
                        </button>
                        <a href="#" class="block w-full bg-gray-200 text-gray-600 px-4 py-2 rounded text-center">
                            Ver Código 📁
                        </a>
                    </div>
                </div>

                <!-- Proyecto 3 -->
                <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                    <div class="text-4xl mb-4">⚡</div>
                    <h4 class="text-xl font-bold mb-4">Versatile Stack</h4>
                    <p class="text-gray-600 mb-4">Social Platform con Vue.js + Java + Mobile</p>
                    <div class="space-y-2 text-sm text-gray-500 mb-6">
                        <div>🎨 Vue.js + Vuetify</div>
                        <div>📱 Ionic + Capacitor</div>
                        <div>⚙️ Java + Spring Boot</div>
                        <div>☁️ Google Cloud</div>
                    </div>
                    <div class="space-y-2">
                        <button class="w-full bg-gray-400 text-white px-4 py-2 rounded">
                            📅 Próximamente
                        </button>
                        <a href="#" class="block w-full bg-gray-200 text-gray-600 px-4 py-2 rounded text-center">
                            Ver Código 📁
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-16">
        <div class="container mx-auto px-6">
            <h3 class="text-3xl font-bold text-center mb-12">Tecnologías</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h4 class="text-xl font-bold mb-6">Distribución por Categoría</h4>
                    <canvas id="skillsChart" width="400" height="300"></canvas>
                </div>
                <div>
                    <h4 class="text-xl font-bold mb-6">Stack Tecnológico</h4>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-blue-100 p-4 rounded-lg text-center">
                            <div class="text-2xl mb-2">⚛️</div>
                            <div class="font-semibold">React</div>
                        </div>
                        <div class="bg-green-100 p-4 rounded-lg text-center">
                            <div class="text-2xl mb-2">🟢</div>
                            <div class="font-semibold">Node.js</div>
                        </div>
                        <div class="bg-red-100 p-4 rounded-lg text-center">
                            <div class="text-2xl mb-2">🅰️</div>
                            <div class="font-semibold">Angular</div>
                        </div>
                        <div class="bg-yellow-100 p-4 rounded-lg text-center">
                            <div class="text-2xl mb-2">🐍</div>
                            <div class="font-semibold">Python</div>
                        </div>
                        <div class="bg-purple-100 p-4 rounded-lg text-center">
                            <div class="text-2xl mb-2">🟣</div>
                            <div class="font-semibold">Vue.js</div>
                        </div>
                        <div class="bg-orange-100 p-4 rounded-lg text-center">
                            <div class="text-2xl mb-2">☕</div>
                            <div class="font-semibold">Java</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-gray-100">
        <div class="container mx-auto px-6 text-center">
            <h3 class="text-3xl font-bold mb-8">Contacto</h3>
            <p class="text-lg text-gray-600 mb-8">¿Interesado en trabajar juntos? ¡Hablemos!</p>
            <div class="space-x-4">
                <a href="mailto:tu@email.com" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    📧 Email
                </a>
                <a href="https://linkedin.com/in/tu-perfil" class="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition">
                    💼 LinkedIn
                </a>
                <a href="https://github.com/tu-usuario" class="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
                    💻 GitHub
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 Mi Portafolio Full-Stack. Construido con ❤️ y desplegado en AWS.</p>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

### **Paso 3: JavaScript para Chart (10 min)**

```javascript
// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Chart de Skills
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Frontend', 'Backend', 'Database', 'DevOps', 'Mobile'],
            datasets: [{
                data: [35, 30, 15, 15, 5],
                backgroundColor: [
                    '#3B82F6', // blue
                    '#10B981', // green  
                    '#F59E0B', // yellow
                    '#EF4444', // red
                    '#8B5CF6'  // purple
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animaciones a las secciones
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
```

### **Paso 4: CSS Adicional (5 min)**

```css
/* css/style.css */
:root {
    --primary-color: #3B82F6;
    --secondary-color: #8B5CF6;
}

* {
    scroll-behavior: smooth;
}

.gradient-text {
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.card-hover {
    transition: all 0.3s ease;
}

.card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
    .text-5xl {
        font-size: 2.5rem;
    }
    
    .container {
        padding: 0 1rem;
    }
}
```

### **Paso 5: Push a GitHub (5 min)**

```bash
# Inicializar git y commit
git init
git add .
git commit -m "🚀 Initial portfolio landing page"

# Conectar con repo remoto
git branch -M main
git remote add origin https://github.com/TU_USUARIO/project-1-portfolio-landing.git
git push -u origin main
```

### **Paso 6: Configurar AWS S3 (45 min)**

```bash
# 1. Instalar AWS CLI (si no está instalado)
# Descargar desde: https://aws.amazon.com/cli/

# 2. Configurar credenciales AWS
aws configure
# AWS Access Key ID: [Tu Access Key]
# AWS Secret Access Key: [Tu Secret Key]  
# Default region: us-east-1
# Default output format: json

# 3. Crear bucket S3 (nombre debe ser único globalmente)
aws s3 mb s3://portfolio-landing-tu-nombre-unico

# 4. Configurar bucket para hosting estático
aws s3 website s3://portfolio-landing-tu-nombre-unico --index-document index.html --error-document index.html

# 5. Configurar política pública del bucket
echo '{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::portfolio-landing-tu-nombre-unico/*"
    }
  ]
}' > bucket-policy.json

aws s3api put-bucket-policy --bucket portfolio-landing-tu-nombre-unico --policy file://bucket-policy.json

# 6. Subir archivos al bucket
aws s3 sync . s3://portfolio-landing-tu-nombre-unico --exclude ".git/*" --exclude "*.md" --exclude "bucket-policy.json"

# 7. Tu sitio estará disponible en:
# http://portfolio-landing-tu-nombre-unico.s3-website-us-east-1.amazonaws.com
```

### **Paso 7: GitHub Actions para Deploy Automático (20 min)**

```yaml
# Crear: .github/workflows/deploy.yml
name: Deploy Portfolio to AWS S3

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    - name: Deploy to S3
      run: |
        aws s3 sync . s3://${{ secrets.S3_BUCKET_NAME }} --delete --exclude ".git/*" --exclude ".github/*" --exclude "*.md"
        
    - name: Print deployment URL
      run: |
        echo "🚀 Portfolio deployed to: http://${{ secrets.S3_BUCKET_NAME }}.s3-website-us-east-1.amazonaws.com"
```

**Configurar Secrets en GitHub**:
1. Ve a tu repo > Settings > Secrets and variables > Actions
2. Agrega estos secrets:
   - `AWS_ACCESS_KEY_ID`: Tu AWS Access Key
   - `AWS_SECRET_ACCESS_KEY`: Tu AWS Secret Key
   - `S3_BUCKET_NAME`: portfolio-landing-tu-nombre-unico

### **Paso 8: Testing y Optimización (35 min)**

```bash
# 1. Probar en diferentes dispositivos
# - Desktop: Chrome, Firefox, Safari
# - Mobile: iPhone, Android
# - Tablet: iPad, Android tablet

# 2. Verificar performance con Lighthouse
# - Abrir Chrome DevTools
# - Pestaña Lighthouse
# - Run audit

# 3. Probar funcionalidad
# - Navegación smooth scroll ✅
# - Chart.js se carga correctamente ✅
# - Cards hover effects ✅
# - Responsive design ✅
# - Links funcionales ✅

# 4. SEO básico
# Agregar a <head> en index.html:
```

```html
<!-- SEO Meta Tags -->
<meta name="description" content="Desarrollador Full-Stack especializado en React, Node.js, Python y cloud computing. Portafolio con proyectos live.">
<meta name="keywords" content="desarrollador, full-stack, react, nodejs, python, aws, portfolio">
<meta name="author" content="Tu Nombre">

<!-- Open Graph -->
<meta property="og:title" content="Mi Portafolio Full-Stack">
<meta property="og:description" content="Desarrollador especializado en tecnologías modernas y arquitecturas escalables">
<meta property="og:type" content="website">
<meta property="og:url" content="http://portfolio-landing-tu-nombre-unico.s3-website-us-east-1.amazonaws.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Mi Portafolio Full-Stack">
<meta name="twitter:description" content="Desarrollador especializado en tecnologías modernas">
```

### **Paso 9: Deploy Final y Verificación (15 min)**

```bash
# 1. Commit cambios finales
git add .
git commit -m "✨ Add SEO meta tags and final optimizations"
git push origin main

# 2. Verificar GitHub Actions
# Ve a tu repo > Actions tab
# Debe mostrar deploy exitoso ✅

# 3. Verificar sitio live
# URL: http://portfolio-landing-tu-nombre-unico.s3-website-us-east-1.amazonaws.com

# 4. Pruebas finales
curl -I http://portfolio-landing-tu-nombre-unico.s3-website-us-east-1.amazonaws.com
# Debe retornar: HTTP/1.1 200 OK
```

## ✅ Checklist Completo (4 Horas)

### **⏰ Hora 1: Setup y Desarrollo**
- [x] ✅ Crear repositorio GitHub (5 min)
- [x] ✅ Estructura de carpetas (5 min)
- [x] ✅ HTML base completo (15 min)
- [x] ✅ JavaScript + Chart.js (10 min)
- [x] ✅ CSS personalizado (5 min)
- [x] ✅ Commit inicial (5 min)
- [x] ✅ Testing local (15 min)

### **⏰ Hora 2: Deploy AWS**
- [x] ✅ Configurar AWS CLI (10 min)
- [x] ✅ Crear bucket S3 (10 min)
- [x] ✅ Configurar hosting estático (15 min)
- [x] ✅ Subir archivos (10 min)
- [x] ✅ Verificar URL live (5 min)
- [x] ✅ Testing funcionalidad (10 min)

### **⏰ Hora 3: CI/CD y Automatización**
- [x] ✅ Crear GitHub Actions workflow (15 min)
- [x] ✅ Configurar secrets (5 min)
- [x] ✅ Testing deploy automático (10 min)
- [x] ✅ Verificar pipeline (10 min)
- [x] ✅ Documentación (20 min)

### **⏰ Hora 4: Optimización y SEO**
- [x] ✅ Agregar meta tags SEO (15 min)
- [x] ✅ Testing performance Lighthouse (10 min)
- [x] ✅ Testing responsive design (15 min)
- [x] ✅ Deploy final (10 min)
- [x] ✅ Verificación completa (10 min)

## 🎯 Resultado Final

**🌐 URL Live**: `http://portfolio-landing-tu-nombre-unico.s3-website-us-east-1.amazonaws.com`

**📋 Features Implementadas**:
- ✅ Landing page moderna y profesional
- ✅ Navegación smooth scroll entre secciones
- ✅ Gráfico interactivo de skills con Chart.js
- ✅ Cards responsivas de proyectos futuros
- ✅ Animaciones CSS al hacer scroll
- ✅ Deploy automático con GitHub Actions
- ✅ Hosting gratuito en AWS S3
- ✅ SEO básico optimizado
- ✅ Performance > 90 en Lighthouse
- ✅ 100% responsive design

**📈 Métricas Objetivo**:
- 🚀 **Performance**: > 90/100
- ♿ **Accessibility**: > 95/100
- 🔍 **SEO**: > 90/100
- ✅ **Best Practices**: > 95/100

## 🚀 Siguientes Pasos

### **Inmediatos (Hoy)**:
1. 🔗 **Dominio personalizado**: Conectar dominio propio (opcional)
2. 📊 **Google Analytics**: Agregar tracking (15 min)
3. 🔍 **Google Search Console**: Indexar sitio (10 min)

### **Esta Semana**:
1. 🔄 **Proyecto 2**: Iniciar repo para Angular + Python + Azure
2. 🎨 **Mejoras visuales**: Animaciones avanzadas con Framer Motion
3. 📝 **Blog section**: Agregar sección de artículos técnicos

### **Próximo Mes**:
1. 🔄 **Proyecto 3**: Vue.js + Java + Google Cloud
2. 🤖 **Chatbot**: Integrar asistente IA para visitantes
3. 🌍 **Multi-idioma**: Versión en inglés

---

**🎉 ¡Tu portafolio profesional está LIVE en AWS!**  
**⏱️ Tiempo total**: 4 horas exactas  
**💰 Costo**: $0 (AWS Free Tier)  
**🔄 Deploy**: Automático con GitHub Actions  

> "De infográfico estático a portafolio dinámico en la nube" ✨

# Configurar credenciales
aws configure
# AWS Access Key ID: [Tu Access Key]
# AWS Secret Access Key: [Tu Secret Key]
# Default region: us-east-1
# Default output format: json
```

#### **Paso 2: Crear VPC y Subnets**

```bash
# Crear VPC
aws ec2 create-vpc --cidr-block 10.0.0.0/16 --tag-specifications 'ResourceType=vpc,Tags=[{Key=Name,Value=ecommerce-vpc}]'

# Anotar VPC ID: vpc-xxxxxxxxx

# Crear Internet Gateway
aws ec2 create-internet-gateway --tag-specifications 'ResourceType=internet-gateway,Tags=[{Key=Name,Value=ecommerce-igw}]'

# Anotar IGW ID: igw-xxxxxxxxx

# Attach IGW to VPC
aws ec2 attach-internet-gateway --vpc-id vpc-xxxxxxxxx --internet-gateway-id igw-xxxxxxxxx

# Crear subnets públicas
aws ec2 create-subnet --vpc-id vpc-xxxxxxxxx --cidr-block 10.0.1.0/24 --availability-zone us-east-1a --tag-specifications 'ResourceType=subnet,Tags=[{Key=Name,Value=public-subnet-1a}]'

aws ec2 create-subnet --vpc-id vpc-xxxxxxxxx --cidr-block 10.0.2.0/24 --availability-zone us-east-1b --tag-specifications 'ResourceType=subnet,Tags=[{Key=Name,Value=public-subnet-1b}]'

# Crear subnets privadas
aws ec2 create-subnet --vpc-id vpc-xxxxxxxxx --cidr-block 10.0.3.0/24 --availability-zone us-east-1a --tag-specifications 'ResourceType=subnet,Tags=[{Key=Name,Value=private-subnet-1a}]'

aws ec2 create-subnet --vpc-id vpc-xxxxxxxxx --cidr-block 10.0.4.0/24 --availability-zone us-east-1b --tag-specifications 'ResourceType=subnet,Tags=[{Key=Name,Value=private-subnet-1b}]'
```

#### **Paso 3: Configurar ElastiCache (Redis)**

```bash
# Crear subnet group para ElastiCache
aws elasticache create-cache-subnet-group \
  --cache-subnet-group-name ecommerce-redis-subnet \
  --cache-subnet-group-description "Subnet group for Redis" \
  --subnet-ids subnet-xxxxxxxxx subnet-yyyyyyyyy

# Crear cluster Redis
aws elasticache create-cache-cluster \
  --cache-cluster-id ecommerce-redis \
  --cache-node-type cache.t3.micro \
  --engine redis \
  --num-cache-nodes 1 \
  --cache-subnet-group-name ecommerce-redis-subnet
```

#### **Paso 4: Configurar DocumentDB (MongoDB)**

```bash
# Crear subnet group para DocumentDB
aws docdb create-db-subnet-group \
  --db-subnet-group-name ecommerce-docdb-subnet \
  --db-subnet-group-description "Subnet group for DocumentDB" \
  --subnet-ids subnet-xxxxxxxxx subnet-yyyyyyyyy

# Crear cluster DocumentDB
aws docdb create-db-cluster \
  --db-cluster-identifier ecommerce-docdb \
  --engine docdb \
  --master-username admin \
  --master-user-password YourStrongPassword123 \
  --db-subnet-group-name ecommerce-docdb-subnet \
  --vpc-security-group-ids sg-xxxxxxxxx

# Crear instancia DocumentDB
aws docdb create-db-instance \
  --db-instance-identifier ecommerce-docdb-instance \
  --db-instance-class db.t3.medium \
  --engine docdb \
  --db-cluster-identifier ecommerce-docdb
```

#### **Paso 5: Crear ECR Repositories**

```bash
# Crear repositorios para las imágenes Docker
aws ecr create-repository --repository-name ecommerce/frontend
aws ecr create-repository --repository-name ecommerce/backend-node
aws ecr create-repository --repository-name ecommerce/backend-go

# Obtener login token para Docker
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com
```

#### **Paso 6: Build y Push de Imágenes Docker**

```bash
# Build frontend
cd frontend
docker build -t ecommerce/frontend .
docker tag ecommerce/frontend:latest ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/ecommerce/frontend:latest
docker push ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/ecommerce/frontend:latest

# Build backend Node.js
cd ../backend-node
docker build -t ecommerce/backend-node .
docker tag ecommerce/backend-node:latest ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/ecommerce/backend-node:latest
docker push ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/ecommerce/backend-node:latest

# Build backend Golang
cd ../backend-go
docker build -t ecommerce/backend-go .
docker tag ecommerce/backend-go:latest ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/ecommerce/backend-go:latest
docker push ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/ecommerce/backend-go:latest
```

#### **Paso 7: Crear ECS Cluster y Task Definitions**

```bash
# Crear ECS cluster
aws ecs create-cluster --cluster-name ecommerce-cluster --capacity-providers FARGATE

# Crear task definitions (usar archivos JSON en infrastructure/)
aws ecs register-task-definition --cli-input-json file://infrastructure/task-definition-frontend.json
aws ecs register-task-definition --cli-input-json file://infrastructure/task-definition-node.json
aws ecs register-task-definition --cli-input-json file://infrastructure/task-definition-go.json
```

#### **Paso 8: Crear Application Load Balancer**

```bash
# Crear ALB
aws elbv2 create-load-balancer \
  --name ecommerce-alb \
  --subnets subnet-xxxxxxxxx subnet-yyyyyyyyy \
  --security-groups sg-xxxxxxxxx

# Crear target groups
aws elbv2 create-target-group \
  --name ecommerce-frontend-tg \
  --protocol HTTP \
  --port 3000 \
  --vpc-id vpc-xxxxxxxxx \
  --target-type ip

aws elbv2 create-target-group \
  --name ecommerce-node-tg \
  --protocol HTTP \
  --port 4000 \
  --vpc-id vpc-xxxxxxxxx \
  --target-type ip

aws elbv2 create-target-group \
  --name ecommerce-go-tg \
  --protocol HTTP \
  --port 8080 \
  --vpc-id vpc-xxxxxxxxx \
  --target-type ip
```

#### **Paso 9: Crear ECS Services**

```bash
# Crear services ECS
aws ecs create-service \
  --cluster ecommerce-cluster \
  --service-name frontend-service \
  --task-definition ecommerce-frontend:1 \
  --desired-count 1 \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[subnet-xxxxxxxxx,subnet-yyyyyyyyy],securityGroups=[sg-xxxxxxxxx],assignPublicIp=ENABLED}" \
  --load-balancers targetGroupArn=arn:aws:elasticloadbalancing:us-east-1:ACCOUNT:targetgroup/ecommerce-frontend-tg/xxxxxxxxx,containerName=frontend,containerPort=3000

# Repetir para backend-node y backend-go
```

### **Paso 10: Configurar GitHub Actions CI/CD**

```yaml
# .github/workflows/deploy.yml
name: Deploy to AWS ECS

on:
  push:
    branches: [main]

env:
  AWS_REGION: us-east-1
  ECR_REPOSITORY_FRONTEND: ecommerce/frontend
  ECR_REPOSITORY_NODE: ecommerce/backend-node
  ECR_REPOSITORY_GO: ecommerce/backend-go
  ECS_SERVICE_FRONTEND: frontend-service
  ECS_SERVICE_NODE: node-service
  ECS_SERVICE_GO: go-service
  ECS_CLUSTER: ecommerce-cluster

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    environment: production

    steps:
    - name: Checkout
      uses: actions/checkout@v4

    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: ${{ env.AWS_REGION }}

    - name: Login to Amazon ECR
      id: login-ecr
      uses: aws-actions/amazon-ecr-login@v2

    - name: Build, tag, and push frontend image
      id: build-frontend
      env:
        ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
        IMAGE_TAG: ${{ github.sha }}
      run: |
        cd frontend
        docker build -t $ECR_REGISTRY/$ECR_REPOSITORY_FRONTEND:$IMAGE_TAG .
        docker push $ECR_REGISTRY/$ECR_REPOSITORY_FRONTEND:$IMAGE_TAG
        echo "image=$ECR_REGISTRY/$ECR_REPOSITORY_FRONTEND:$IMAGE_TAG" >> $GITHUB_OUTPUT

    - name: Build, tag, and push Node.js image
      id: build-node
      env:
        ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
        IMAGE_TAG: ${{ github.sha }}
      run: |
        cd backend-node
        docker build -t $ECR_REGISTRY/$ECR_REPOSITORY_NODE:$IMAGE_TAG .
        docker push $ECR_REGISTRY/$ECR_REPOSITORY_NODE:$IMAGE_TAG
        echo "image=$ECR_REGISTRY/$ECR_REPOSITORY_NODE:$IMAGE_TAG" >> $GITHUB_OUTPUT

    - name: Build, tag, and push Golang image
      id: build-go
      env:
        ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
        IMAGE_TAG: ${{ github.sha }}
      run: |
        cd backend-go
        docker build -t $ECR_REGISTRY/$ECR_REPOSITORY_GO:$IMAGE_TAG .
        docker push $ECR_REGISTRY/$ECR_REPOSITORY_GO:$IMAGE_TAG
        echo "image=$ECR_REGISTRY/$ECR_REPOSITORY_GO:$IMAGE_TAG" >> $GITHUB_OUTPUT

    - name: Deploy to Amazon ECS
      uses: aws-actions/amazon-ecs-deploy-task-definition@v1
      with:
        task-definition: ${{ steps.task-def.outputs.task-definition }}
        service: ${{ env.ECS_SERVICE }}
        cluster: ${{ env.ECS_CLUSTER }}
        wait-for-service-stability: true
```

## 💰 Estimación de Costos AWS (Free Tier)

### **Servicios Gratuitos (12 meses)**
- ✅ **ECS Fargate**: 744 horas/mes (suficiente para 3 servicios)
- ✅ **Application Load Balancer**: 750 horas/mes
- ✅ **ElastiCache**: 750 horas t3.micro
- ✅ **S3**: 5GB storage + 20,000 requests
- ✅ **CloudWatch**: 10 métricas custom
- ✅ **SQS**: 1M requests/mes

### **Servicios con Costo Mínimo**
- 💰 **DocumentDB**: ~$60/mes (t3.medium) - Alternativa: MongoDB Atlas Free Tier
- 💰 **NAT Gateway**: ~$32/mes (opcional para producción)

### **Optimización de Costos**
- Usar **MongoDB Atlas Free Tier** (512MB) en lugar de DocumentDB
- Configurar **auto-scaling** para minimizar uso de recursos
- Implementar **scheduled scaling** (apagar en horarios no productivos)

## 📊 Métricas de Éxito

### **Performance Targets**
- ⚡ **Frontend**: < 3s tiempo de carga inicial
- 🔄 **API Response**: < 200ms promedio
- 🚀 **Golang Service**: < 100ms para pagos
- 📊 **Uptime**: > 99.5%

### **Monitoring**
- 📈 **CloudWatch** para métricas de infraestructura
- 🔍 **Application logs** centralizados
- 🚨 **Alertas** para errores críticos
- 📊 **Dashboard** personalizado con métricas de negocio

## 🎯 Entregables Finales

1. ✅ **Repositorio GitHub** completo con código
2. ✅ **Demo Live** funcionando en AWS
3. ✅ **CI/CD Pipeline** configurado
4. ✅ **Documentación técnica** completa
5. ✅ **Monitoreo** y alertas configuradas
6. ✅ **Tests automatizados** (>80% coverage)

---

## 🚀 ¡Empecemos!

**Primer paso**: Crear el repositorio en GitHub y configurar la estructura inicial.

¿Estás listo para comenzar con la creación del repositorio y la configuración inicial?
