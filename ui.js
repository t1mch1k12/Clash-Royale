window.drawTowerScore = function(ctx, playerTowers, enemyTowers) {
    // Свои башни (синие)
    for (let i = 0; i < playerTowers; i++) {
        ctx.fillStyle = '#3a6ea5';
        ctx.fillRect(20 + i * 30, 80, 20, 40);
    }
    
    // Оставшиеся (серые)
    for (let i = playerTowers; i < 3; i++) {
        ctx.fillStyle = '#666666';
        ctx.fillRect(20 + i * 30, 80, 20, 40);
    }
    
    // Башни врага (красные справа)
    for (let i = 0; i < enemyTowers; i++) {
        ctx.fillStyle = '#a53a3a';
        ctx.fillRect(700 - i * 30, 80, 20, 40);
    }
    
    // Разделительная линия
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(400, 50);
    ctx.lineTo(400, 120);
    ctx.stroke();
}
