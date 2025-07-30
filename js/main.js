// js/main.js
document.addEventListener('DOMContentLoaded', function () {
    const FONT_COLOR = '#0f172a';
    const GRID_COLOR = '#e2e8f0';

    const PALETTE = {
        blue: '#00A6ED',
        green: '#7FB800',
        yellow: '#FFB400',
        red: '#F72C25',
        purple: '#7e22ce'
    };

    const SHARED_CHART_OPTIONS = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: FONT_COLOR,
                    font: {
                        family: "'Inter', sans-serif",
                        size: 14
                    }
                }
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleFont: { size: 16, family: "'Inter', sans-serif" },
                bodyFont: { size: 14, family: "'Inter', sans-serif" },
                callbacks: {
                    title: function (tooltipItems) {
                        const item = tooltipItems[0];
                        let label = item.chart.data.labels[item.dataIndex];
                        if (Array.isArray(label)) {
                            return label.join(' ');
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            x: {
                ticks: { color: FONT_COLOR, font: { family: "'Inter', sans-serif" } },
                grid: { color: GRID_COLOR }
            },
            y: {
                ticks: { color: FONT_COLOR, font: { family: "'Inter', sans-serif" } },
                grid: { color: GRID_COLOR }
            }
        }
    };

    function wrapLabel(label, maxWidth = 16) {
        if (label.length <= maxWidth) {
            return label;
        }
        const words = label.split(' ');
        const lines = [];
        let currentLine = '';
        for (const word of words) {
            if ((currentLine + word).length > maxWidth) {
                lines.push(currentLine.trim());
                currentLine = '';
            }
            currentLine += word + ' ';
        }
        lines.push(currentLine.trim());
        return lines.filter(line => line.length > 0);
    }

    // Chart Drawing
    const ctxFrontend = document.getElementById('frontendChart');
    if (ctxFrontend) new Chart(ctxFrontend, { type: 'doughnut', data: { labels: ['React', 'Angular', 'Vue.js'], datasets: [{ label: 'Popularidad de Frameworks', data: [65, 20, 15], backgroundColor: [PALETTE.blue, PALETTE.red, PALETTE.green], borderColor: '#f8fafc', borderWidth: 4, hoverOffset: 8 }] }, options: { ...SHARED_CHART_OPTIONS, scales: {} } });
    const ctxBackend = document.getElementById('backendChart');
    if (ctxBackend) new Chart(ctxBackend, { type: 'bar', data: { labels: ['Node.js (TS)', 'Python', 'Java', 'C# / .NET', 'Go'], datasets: [{ label: 'Uso en Proyectos Nuevos (%)', data: [45, 25, 15, 10, 5], backgroundColor: [PALETTE.green, PALETTE.blue, PALETTE.red, PALETTE.purple, PALETTE.yellow], borderRadius: 4 }] }, options: { ...SHARED_CHART_OPTIONS, indexAxis: 'y', plugins: { ...SHARED_CHART_OPTIONS.plugins, legend: { display: false } } } });
    const ctxDatabase = document.getElementById('databaseChart');
    if (ctxDatabase) new Chart(ctxDatabase, { type: 'pie', data: { labels: [wrapLabel('Bases de Datos Relacionales (SQL)'), wrapLabel('Bases de Datos No Relacionales (NoSQL)')], datasets: [{ label: 'Tipos de Bases de Datos', data: [60, 40], backgroundColor: [PALETTE.purple, PALETTE.yellow], borderColor: '#f8fafc', borderWidth: 4, hoverOffset: 8 }] }, options: { ...SHARED_CHART_OPTIONS, scales: {} } });
    const ctxCloud = document.getElementById('cloudChart');
    if (ctxCloud) new Chart(ctxCloud, { type: 'bar', data: { labels: ['AWS', 'Azure', 'GCP'], datasets: [{ label: 'Cuota de Mercado (%)', data: [40, 22, 11], backgroundColor: [PALETTE.yellow, PALETTE.blue, PALETTE.red], borderRadius: 4 }] }, options: { ...SHARED_CHART_OPTIONS, scales: { x: { ticks: { font: { size: 10 } } }, y: { display: false } }, plugins: { ...SHARED_CHART_OPTIONS.plugins, legend: { display: false } } } });

    // Accordion Logic with Detailed Content
    const accordionData = [
        {
            title: '🎨 Frontend',
            content: `
                        <div class="space-y-4">
                            <div class="tech-detail"><strong class="text-slate-900">React:</strong> Librería de UI para crear componentes reutilizables. Usa un DOM virtual para un rendimiento óptimo. Ideal para SPAs (Single Page Applications) y aplicaciones móviles con React Native.</div>
                            <div class="tech-detail"><strong class="text-slate-900">Angular:</strong> Framework completo mantenido por Google. Usa TypeScript y una arquitectura basada en componentes y módulos. Perfecto para aplicaciones empresariales grandes y escalables.</div>
                            <div class="tech-detail"><strong class="text-slate-900">Vue.js:</strong> Framework progresivo, fácil de aprender. Combina lo mejor de React y Angular. Excelente para proyectos que necesitan crecer con el tiempo y para una integración sencilla.</div>
                            <div class="tech-detail"><strong class="text-slate-900">Ionic:</strong> Framework para crear apps móviles multiplataforma (iOS, Android, Web) usando tecnologías web. Permite reutilizar código y acelerar el desarrollo.</div>
                        </div>`
        },
        {
            title: '⚙️ Backend',
            content: `
                        <div class="space-y-4">
                            <div class="tech-detail"><strong class="text-slate-900">Node.js (Express/NestJS):</strong> Entorno que ejecuta JS en el servidor. Express es minimalista, mientras que NestJS ofrece una arquitectura robusta y escalable. Ideal para APIs rápidas y aplicaciones en tiempo real.</div>
                            <div class="tech-detail"><strong class="text-slate-900">Python (Django/FastAPI):</strong> Django es un framework "con todo incluido" para un desarrollo rápido y seguro. FastAPI es moderno y de alto rendimiento, ideal para crear APIs ultra-rápidas.</div>
                            <div class="tech-detail"><strong class="text-slate-900">Java (Spring Boot):</strong> El estándar para aplicaciones empresariales robustas y microservicios. Facilita la creación de aplicaciones autocontenidas y listas para producción.</div>
                            <div class="tech-detail"><strong class="text-slate-900">C# (ASP.NET Core):</strong> Framework de alto rendimiento de Microsoft. Multiplataforma y perfecto para construir servicios en la nube, APIs y aplicaciones web robustas.</div>
                            <div class="tech-detail"><strong class="text-slate-900">GraphQL:</strong> Lenguaje de consulta para APIs que permite a los clientes pedir exactamente los datos que necesitan, optimizando la transferencia de datos.</div>
                        </div>`
        },
        {
            title: '🗃️ Bases de Datos',
            content: `
                        <div class="space-y-4">
                            <div class="tech-detail"><strong class="text-slate-900">SQL (PostgreSQL, MySQL):</strong> Bases de datos relacionales que organizan los datos en tablas. Son la opción ideal para datos estructurados y transacciones que requieren consistencia (ACID).</div>
                            <div class="tech-detail"><strong class="text-slate-900">NoSQL (MongoDB, Redis):</strong> MongoDB es una base de datos de documentos, ideal para datos flexibles y no estructurados. Redis es un almacén en memoria clave-valor, usado para caché de alta velocidad y sesiones.</div>
                        </div>`
        },
        {
            title: '📦 Contenedores',
            content: `
                        <div class="space-y-4">
                            <div class="tech-detail"><strong class="text-slate-900">Docker:</strong> Plataforma para "empaquetar" aplicaciones y sus dependencias en contenedores. Asegura que la aplicación funcione igual en cualquier entorno, desde desarrollo hasta producción.</div>
                            <div class="tech-detail"><strong class="text-slate-900">Kubernetes (K8s):</strong> Sistema para orquestar contenedores a gran escala. Automatiza el despliegue, escalado y gestión de aplicaciones contenerizadas, asegurando alta disponibilidad.</div>
                        </div>`
        },
        {
            title: '☁️ Cloud',
            content: `
                        <div class="space-y-4">
                            <div class="tech-detail"><strong class="text-slate-900">AWS, Azure, GCP:</strong> Proveedores que ofrecen infraestructura como servicio. Permiten desplegar aplicaciones globalmente sin gestionar hardware. Ofrecen servicios de cómputo, almacenamiento, bases de datos, machine learning y más.</div>
                        </div>`
        },
        {
            title: '🔄 CI/CD',
            content: `
                        <div class="space-y-4">
                            <div class="tech-detail"><strong class="text-slate-900">GitHub Actions, GitLab CI, Jenkins:</strong> Herramientas que automatizan el ciclo de vida del software. Crean "pipelines" que compilan el código, ejecutan pruebas y lo despliegan a producción automáticamente tras cada cambio, aumentando la velocidad y fiabilidad.</div>
                        </div>`
        }
    ];

    const accordionContainer = document.getElementById('accordion');
    accordionData.forEach(item => {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden';

        accordionItem.innerHTML = `
                    <div class="accordion-toggle cursor-pointer flex justify-between items-center p-5">
                        <h3 class="text-xl font-bold text-slate-800">${item.title}</h3>
                        <div class="text-2xl text-slate-500">
                            <span class="icon-plus">+</span>
                            <span class="icon-minus">-</span>
                        </div>
                    </div>
                    <div class="accordion-content">
                        <div class="p-5 pt-0 text-slate-600">${item.content}</div>
                    </div>
                `;
        accordionContainer.appendChild(accordionItem);
    });

    accordionContainer.addEventListener('click', function (e) {
        const toggle = e.target.closest('.accordion-toggle');
        if (!toggle) return;

        const item = toggle.parentElement;

        item.classList.toggle('active');
    });
});