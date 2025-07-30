// Simple Chart.js fallback implementation
(function() {
    'use strict';
    
    if (window.Chart) {
        return; // Chart.js already loaded
    }
    
    // Simple Chart constructor fallback
    function Chart(ctx, config) {
        this.ctx = ctx;
        this.config = config;
        this.canvas = ctx.canvas;
        
        // Simple doughnut chart implementation
        if (config.type === 'doughnut') {
            this.drawDoughnutChart();
        }
    }
    
    Chart.prototype.drawDoughnutChart = function() {
        const canvas = this.canvas;
        const ctx = this.ctx;
        const data = this.config.data;
        const datasets = data.datasets[0];
        const labels = data.labels;
        const values = datasets.data;
        const colors = datasets.backgroundColor;
        
        // Set canvas size
        const size = Math.min(canvas.width, canvas.height) - 40;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const outerRadius = size / 2;
        const innerRadius = outerRadius * 0.6; // 60% cutout
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Calculate angles
        const total = values.reduce((sum, val) => sum + val, 0);
        let currentAngle = -Math.PI / 2; // Start at top
        
        // Draw segments
        values.forEach((value, index) => {
            const segmentAngle = (value / total) * 2 * Math.PI;
            
            // Draw outer arc
            ctx.beginPath();
            ctx.arc(centerX, centerY, outerRadius, currentAngle, currentAngle + segmentAngle);
            ctx.arc(centerX, centerY, innerRadius, currentAngle + segmentAngle, currentAngle, true);
            ctx.closePath();
            ctx.fillStyle = colors[index];
            ctx.fill();
            
            // Draw subtle border
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            currentAngle += segmentAngle;
        });
        
        // Draw center text
        ctx.fillStyle = '#64748b';
        ctx.font = 'bold 16px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Skills', centerX, centerY - 5);
        ctx.font = '12px Inter, sans-serif';
        ctx.fillText('Breakdown', centerX, centerY + 10);
        
        // Create legend
        this.drawLegend(labels, colors);
    };
    
    Chart.prototype.drawLegend = function(labels, colors) {
        const legendContainer = document.createElement('div');
        legendContainer.className = 'chart-legend';
        legendContainer.style.cssText = `
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            margin-top: 16px;
            font-size: 12px;
        `;
        
        labels.forEach((label, index) => {
            const legendItem = document.createElement('div');
            legendItem.style.cssText = `
                display: flex;
                align-items: center;
                gap: 6px;
                color: #64748b;
            `;
            
            const colorBox = document.createElement('div');
            colorBox.style.cssText = `
                width: 12px;
                height: 12px;
                border-radius: 2px;
                background-color: ${colors[index]};
                flex-shrink: 0;
            `;
            
            const labelText = document.createElement('span');
            labelText.textContent = label;
            labelText.style.fontSize = '11px';
            
            legendItem.appendChild(colorBox);
            legendItem.appendChild(labelText);
            legendContainer.appendChild(legendItem);
        });
        
        // Insert legend after canvas
        this.canvas.parentNode.appendChild(legendContainer);
    };
    
    Chart.prototype.update = function() {
        // Re-draw chart when updated
        if (this.config.type === 'doughnut') {
            this.drawDoughnutChart();
        }
    };
    
    // Make Chart available globally
    window.Chart = Chart;
    
    console.log('Chart.js fallback loaded');
})();