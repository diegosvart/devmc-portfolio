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

    // Verificar que Chart.js esté disponible
    if (typeof Chart === 'undefined') {
        console.error('Chart.js no está cargado');
        return;
    }

    // Buscar el canvas
    const canvas = document.getElementById('skillsChart');
    if (!canvas) {
        console.error('Canvas skillsChart no encontrado');
        return;
    }

    // Chart de Skills - 6 Capas del Stack Full-Stack
    const ctx = canvas.getContext('2d');
    
    try {
        const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    '🎨 Frontend', 
                    '⚙️ Backend', 
                    '🗃️ Bases de Datos', 
                    '📦 Contenedores', 
                    '☁️ Cloud', 
                    '🔄 CI/CD'
                ],
                datasets: [{
                    data: [30, 28, 18, 12, 8, 4], // Valores ajustados basados en experiencia
                    backgroundColor: [
                        '#3B82F6', // blue
                        '#10B981', // green
                        '#F59E0B', // yellow
                        '#EF4444', // red
                        '#8B5CF6', // purple
                        '#06B6D4'  // cyan
                    ],
                    borderWidth: 3,
                    borderColor: '#ffffff',
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true,
                            generateLabels: function(chart) {
                                const data = chart.data;
                                if (data.labels.length && data.datasets.length) {
                                    return data.labels.map((label, i) => {
                                        const dataset = data.datasets[0];
                                        return {
                                            text: label,
                                            fillStyle: dataset.backgroundColor[i],
                                            strokeStyle: dataset.borderColor,
                                            lineWidth: dataset.borderWidth,
                                            pointStyle: 'circle',
                                            hidden: false,
                                            index: i
                                        };
                                    });
                                }
                                return [];
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: '#ffffff',
                        borderWidth: 1,
                        displayColors: false,
                        callbacks: {
                            title: function(tooltipItems) {
                                return tooltipItems[0].label;
                            },
                            label: function(context) {
                                // Tecnologías específicas para cada capa
                                const technologies = {
                                    0: [ // Frontend
                                        '• React + TypeScript',
                                        '• Angular',
                                        '• Vue.js',
                                        '• Tailwind CSS',
                                        '• SASS/SCSS'
                                    ],
                                    1: [ // Backend
                                        '• Node.js + Express',
                                        '• Python + FastAPI',
                                        '• Java + Spring Boot',
                                        '• GraphQL',
                                        '• REST APIs'
                                    ],
                                    2: [ // Bases de Datos
                                        '• PostgreSQL',
                                        '• MongoDB',
                                        '• Redis',
                                        '• MySQL'
                                    ],
                                    3: [ // Contenedores
                                        '• Docker',
                                        '• Kubernetes',
                                        '• Docker Compose'
                                    ],
                                    4: [ // Cloud
                                        '• AWS (EC2, S3, Lambda)',
                                        '• Azure',
                                        '• Google Cloud',
                                        '• Vercel'
                                    ],
                                    5: [ // CI/CD
                                        '• GitHub Actions',
                                        '• Jenkins',
                                        '• GitLab CI'
                                    ]
                                };
                                
                                return technologies[context.dataIndex] || [];
                            }
                        }
                    }
                }
            }
        });
        
    } catch (error) {
        console.error('Error al crear el chart:', error);
    }

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
