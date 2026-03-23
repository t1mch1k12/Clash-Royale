function helloCore() {
   console.log("core mechanics ready");
}
// Функция для рисования башни игрока (синяя)
window.drawPlayerTower = function(ctx, x, y) {
    // TODO: Синяя башня с зубцами
    
    // Основание
    ctx.fillStyle = '#3a6ea5';
    ctx.fillRect(x - 20, y - 40, 40, 60);
    
    // Зубцы наверху
    ctx.fillStyle = '#2a4f7a';
    ctx.fillRect(x - 20, y - 50, 10, 10);
    ctx.fillRect(x - 5, y - 55, 10, 12);
    ctx.fillRect(x + 10, y - 50, 10, 10);
    
    // Флаг
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.moveTo(x + 15, y - 60);
    ctx.lineTo(x + 30, y - 55);
    ctx.lineTo(x + 15, y - 50);
    ctx.fill();
}
window.drawEnemyTower = function(ctx, x, y) {
    // TODO: Красная башня с зубцами
    
    // Основание
    ctx.fillStyle = '#a53a3a';
    ctx.fillRect(x - 20, y - 40, 40, 60);
    
    // Зубцы наверху
    ctx.fillStyle = '#7a2a2a';
    ctx.fillRect(x - 20, y - 50, 10, 10);
    ctx.fillRect(x - 5, y - 55, 10, 12);
    ctx.fillRect(x + 10, y - 50, 10, 10);
    
    // Флаг с черепом
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x + 22, y - 55, 3, 0, Math.PI * 2);
    ctx.fill();
}
window.drawKingTower = function(ctx, x, y, isPlayer) {
    const color = isPlayer ? '#4a7db5' : '#b54a4a';
    const darkColor = isPlayer ? '#2a4f7a' : '#7a2a2a';
    
    // Основание больше
    ctx.fillStyle = color;
    ctx.fillRect(x - 25, y - 50, 50, 70);
    
    // Корона наверху
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.moveTo(x - 15, y - 60);
    ctx.lineTo(x, y - 75);
    ctx.lineTo(x + 15, y - 60);
    ctx.fill();
}
helloCore();


