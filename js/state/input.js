// Input Module - обработка пользовательского ввода
window.Input = {
    canvas: null,
    isDragging: false,
    
    init: function(canvas) {
        this.canvas = canvas;
        this.canvas.addEventListener('click', this.onCanvasClick.bind(this));
        this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
        console.log('🖱️ Input system initialized');
    },
    
    onCanvasClick: function(e) {
        if (GameState.currentState !== 'battle') {
            UI.showMessage('⚔️ Click "Start Battle" first!', 1500);
            return;
        }
        
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        
        // Проверяем, клик на своей стороне
        if (Config.isPlayerSide(y)) {
            this.handleDeploy(x, y);
        } else {
            UI.showMessage('📯 Deploy on YOUR side (bottom half)!', 1200);
        }
    },
    
    handleDeploy: function(x, y) {
        const unitType = GameState.selectedUnit;
        const cost = this.getUnitCost(unitType);
        
        if (!GameState.canDeploy(cost)) {
            UI.showMessage(`⚠️ Not enough elixir! Need ${cost}`, 1000);
            console.log(`Not enough elixir! Have ${Math.floor(GameState.elixir)}, need ${cost}`);
            return;
        }
        
        // Создаем временного юнита для теста (будет заменен на этапе 2)
        const unit = {
            x: x,
            y: y,
            type: unitType,
            isPlayer: true,
            hp: 500,
            maxHp: 500,
            attackTimer: 0
        };
        
        if (GameState.spendElixir(cost)) {
            GameState.addUnit(unit);
            console.log(`✅ Deployed ${unitType} at (${Math.floor(x)},${Math.floor(y)})`);
            UI.showMessage(`📯 ${unitType.toUpperCase()} deployed!`, 800);
            
            if (window.SoundFX) SoundFX.play('deploy');
            if (window.Effects) Effects.addDeployEffect(x, y);
        }
    },
    
    getUnitCost: function(type) {
        const costs = { knight: 3, archer: 3, mage: 4 };
        return costs[type] || 3;
    },
    
    onMouseMove: function(e) {
        if (!GameState.isActive) return;
        
        const rect = this.canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (this.canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (this.canvas.height / rect.height);
        
        // Меняем курсор при наведении на свою сторону
        if (Config.isPlayerSide(y) && GameState.currentState === 'battle') {
            this.canvas.style.cursor = 'crosshair';
        } else {
            this.canvas.style.cursor = 'default';
        }
    },
    
    getMousePosition: function(e) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left) * (this.canvas.width / rect.width),
            y: (e.clientY - rect.top) * (this.canvas.height / rect.height)
        };
    }
};
