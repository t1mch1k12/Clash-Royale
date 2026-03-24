// Game State Module - состояние игры
window.GameState = {
    // Состояния
    currentState: 'menu', // menu, battle, result
    isActive: false,
    winner: null,
    
    // Ресурсы
    elixir: 5,
    maxElixir: 10,
    lastElixirTime: 0,
    
    // Здоровье башен
    playerTowerHP: 1500,
    enemyTowerHP: 1500,
    playerKingHP: 2000,
    enemyKingHP: 2000,
    
    // Юниты на поле
    units: [],
    
    // Выбранный юнит
    selectedUnit: 'knight',
    
    // Методы смены состояния
    setState: function(state) {
        this.currentState = state;
        console.log(`🎮 Game state changed to: ${state}`);
        
        if (state === 'battle') {
            this.startBattle();
        }
    },
    
    startBattle: function() {
        this.isActive = true;
        this.winner = null;
        this.elixir = Config.game?.startElixir || 5;
        this.playerTowerHP = 1500;
        this.enemyTowerHP = 1500;
        this.units = [];
        this.lastElixirTime = performance.now() / 1000;
        console.log('⚔️ Battle started!');
        
        if (window.UI) UI.updateDisplay();
    },
    
    endBattle: function(winner) {
        this.isActive = false;
        this.winner = winner;
        this.setState('result');
        console.log(`🏆 Battle ended! Winner: ${winner}`);
        
        if (window.SoundFX) {
            if (winner === 'player') SoundFX.play('victory');
            else SoundFX.play('defeat');
        }
    },
    
    updateElixir: function(delta) {
        if (!this.isActive) return;
        
        const regenRate = Config.game?.elixirRegen || 0.8;
        this.elixir = Math.min(this.maxElixir, this.elixir + delta * regenRate);
        
        if (window.UI) UI.updateElixirDisplay();
    },
    
    canDeploy: function(cost) {
        return this.isActive && this.elixir >= cost;
    },
    
    spendElixir: function(cost) {
        if (this.canDeploy(cost)) {
            this.elixir -= cost;
            if (window.UI) UI.updateElixirDisplay();
            return true;
        }
        return false;
    },
    
    addUnit: function(unit) {
        this.units.push(unit);
    },
    
    getUnits: function() {
        return this.units;
    }
};
