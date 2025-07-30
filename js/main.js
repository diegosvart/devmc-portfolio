// js/main.js

// Dark Mode Toggle
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check for saved dark mode preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    }
    
    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        
        // Save preference
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        
        // Update chart colors if needed
        updateChartColors();
    });
}

// Update chart colors based on theme
function updateChartColors() {
    if (skillsChart) {
        const isDark = document.documentElement.classList.contains('dark');
        
        skillsChart.data.datasets[0].borderColor = isDark ? '#374151' : '#ffffff';
        skillsChart.options.plugins.tooltip.backgroundColor = isDark ? '#374151' : 'rgba(0, 0, 0, 0.8)';
        skillsChart.options.plugins.tooltip.titleColor = '#ffffff';
        skillsChart.options.plugins.tooltip.bodyColor = isDark ? '#d1d5db' : '#ffffff';
        
        skillsChart.update();
    }
}

// Chart.js configuration
let skillsChart;

function initChart() {
    const canvas = document.getElementById('skillsChart');
    if (!canvas) {
        console.error('Canvas skillsChart no encontrado');
        return;
    }

    const ctx = canvas.getContext('2d');
    
    try {
        skillsChart = new Chart(ctx, {
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
                    data: [30, 28, 18, 12, 8, 4],
                    backgroundColor: [
                        '#3B82F6', // blue
                        '#10B981', // green
                        '#F59E0B', // yellow
                        '#EF4444', // red
                        '#8B5CF6', // purple
                        '#06B6D4'  // cyan
                    ],
                    borderWidth: 3,
                    borderColor: document.documentElement.classList.contains('dark') ? '#374151' : '#ffffff',
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: document.documentElement.classList.contains('dark') ? '#374151' : 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: document.documentElement.classList.contains('dark') ? '#d1d5db' : '#ffffff',
                        borderColor: '#3B82F6',
                        borderWidth: 1,
                        cornerRadius: 8,
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
                },
                cutout: '60%',
                animation: {
                    animateRotate: true,
                    duration: 2000
                }
            }
        });
        
    } catch (error) {
        console.error('Error al crear el chart:', error);
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animaciones al hacer scroll
function initScrollAnimations() {
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
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
    initChart();
    initSmoothScrolling();
    initScrollAnimations();
});
