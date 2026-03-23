function helloGraphics() {
    console.log("Graphics and Assets Mechanics ready");
}

// Функция для рисования арены
window.drawArena = function(ctx) {
    // Трава
    ctx.fillStyle = '#228b22';
    ctx.fillRect(0, 0, 800, 600);
    
    // Разметка
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(400, 0);
    ctx.lineTo(400, 600);
    ctx.stroke();
    
    // Круги в центре
    ctx.beginPath();
    ctx.arc(400, 300, 50, 0, Math.PI * 2);
    ctx.stroke();
}

// Функция для рисования моста
window.drawBridge = function(ctx) {
    const canvas = ctx.canvas;
    
    // Деревянный мост посередине
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(350, 250, 100, 100);
    
    // Доски
    ctx.strokeStyle = '#d2691e';
    ctx.lineWidth = 3;
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(350, 250 + i * 20);
        ctx.lineTo(450, 250 + i * 20);
        ctx.stroke();
    }
}

// Функция для рисования реки
window.drawRiver = function(ctx) {
    // Голубая полоса через центр
    ctx.fillStyle = '#4169e1';
    ctx.globalAlpha = 0.3;
    ctx.fillRect(300, 0, 200, 600);
    
    // Волны
    ctx.strokeStyle = '#87ceeb';
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.5;
    
    for (let y = 50; y < 600; y += 50) {
        ctx.beginPath();
        ctx.moveTo(320, y);
        ctx.quadraticCurveTo(400, y + 20, 480, y);
        ctx.stroke();
    }
    
    ctx.globalAlpha = 1;
}
