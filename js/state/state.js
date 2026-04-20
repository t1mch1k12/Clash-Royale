// СОСТОЯНИЕ - данные игры
window.GameState = {
    isActive: false,
    elixir: 5,
    playerTowerHP: 1500,
    enemyTowerHP: 1500,
    selectedUnit: 'knight',
    units: [],
    
    startBattle: function() {
        this.isActive = true;
        this.playerTowerHP = 1500;
        this.enemyTowerHP = 1500;
        this.elixir = 5;
        this.units = [];
        console.log('Battle started!');
    },
    
    endBattle: function(winner) {
        this.isActive = false;
        console.log(winner === 'player' ? 'Victory!' : 'Defeat!');
    },

    /**
     * Проверяет, может ли игрок разместить юнита в указанной позиции
     * @param {number} x - X координата
     * @param {number} y - Y координата
     * @param {string} lane - Дорожка
     * @returns {boolean}
     */
    canPlaceAt(x, y, lane) {
        // Проверка, что позиция на своей половине поля
        if (y < window.CONFIG.GAME.height / 2) {
            return false;
        }
        
        // Проверка, что позиция на правильной дорожке
        const isLeftLane = (lane === 'left' && x < window.CONFIG.GAME.width / 2);
        const isRightLane = (lane === 'right' && x > window.CONFIG.GAME.width / 2);
        
        if (!isLeftLane && !isRightLane && lane !== 'king') {
            return false;
        }
        
        return true;
    },
        
    getUnits: function() {
        return this.units;
    }
};
