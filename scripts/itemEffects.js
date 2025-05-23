// itemEffects.js 
        const itemEffects = {
            'Potion': {
			image: 'images/items/redpotion.gif',
			description: 'Heals 10 HP', 
			hp: 10,
			consumable: true,
			type: 'consumable'
            },
            'SuperPotion': {
			image: 'images/items/orangepotion.gif',
                	mp: 25,
			consumable: true,
			type: 'consumable'
            },
            'Key': {
			image: 'images/items/goldkey.gif',
			consumable: false,
			description: "a key to unlock things", 
			type: 'keyItem'
            },
            'Rock': {	
			consumable: false,
			image: 'images/items/stone.gif',
			description: "it is a rock", 
			type: 'misc'
            },
            // Add effects for other usable items here
        };


//Items logic
function useItem(itemName, effects) {
    if (inventory[itemName] && inventory[itemName] > 0) {
        inventory[itemName]--;
        if (inventory[itemName] === 0) delete inventory[itemName];

        let hpChange = 0;
        let mpChange = 0;
        for (const effect in effects) {
            const value = effects[effect];
            if (effect === 'hp') hpChange += value;
            if (effect === 'mp') mpChange += value;
        }
        changeVitals(calculatedStats, hpChange, mpChange); // Use the new function

        updateInventoryDisplay();
        updateStatsDisplay();
    }
}