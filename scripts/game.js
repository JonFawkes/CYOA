function changeVitals(calculatedStats, hpChange, mpChange) {
    if (hpChange !== 0) {
        calculatedStats.currentHP = Math.max(0, Math.min(calculatedStats.currentHP + hpChange, calculatedStats.maxHP));
    }
    if (mpChange !== 0) {
        calculatedStats.currentMP = Math.max(0, Math.min(calculatedStats.currentMP + mpChange, calculatedStats.maxMP));
    }
    // Optionally, return the updated values:
    return { currentHP: calculatedStats.currentHP, currentMP: calculatedStats.currentMP };
}

function recalculateStats() {
    console.log("Recalculating player stats...");

    // Reset base stats (your existing calculations)
    calculatedStats.maxHP = Math.round(playerStats.STR * 2 + playerStats.VIT * 5 + 10);
    calculatedStats.maxMP = Math.round(playerStats.INT * 3 + playerStats.LUK + 10);
    calculatedStats.ATK = Math.round(playerStats.STR + playerStats.DEX + 5);
    calculatedStats.MATK = Math.round(playerStats.INT + playerStats.LUK + 5);
    calculatedStats.hit = Math.round(playerStats.DEX * 5 + 50);
    calculatedStats.critRate = Math.max(0, Math.round(playerStats.LUK * 10 - 50));
    calculatedStats.critDamage = Math.round(playerStats.LUK + playerStats.DEX + 100);
    calculatedStats.DEF = Math.round((playerStats.VIT + playerStats.STR) * 2);
    calculatedStats.MDEF = Math.round(((playerStats.VIT / 2) + playerStats.INT) * 2);
    calculatedStats.speed = Math.max(1, Math.round(playerStats.DEX * 1.5 - 10));
    calculatedStats.flee = Math.round(playerStats.AGI + playerStats.LUK / 2);
    calculatedStats.ASPD = Math.round(playerStats.AGI * 2 + playerStats.DEX / 2);

    // --- NEW: Apply Passive Skill Effects ---
    // Iterate through all skills the player knows
    for (const skillId in playerInfo.skills) {
        const playerSkillLevel = playerInfo.skills[skillId]; // Get the player's current level for this skill
        const skillData = skills[skillId]; // Get the skill's base definition from skills.js

        // Check if the skill exists, is passive, and has effects defined
        if (skillData && skillData.passive && skillData.effects) {
            console.log(`Applying passive effects for ${skillId} (Lv. ${playerSkillLevel})...`);
            // Iterate through each effect defined for this passive skill
            for (const effectKey in skillData.effects) {
                const effectValue = skillData.effects[effectKey];

                // Apply the effect to the corresponding calculated stat
                // We multiply by playerSkillLevel to get the cumulative bonus.
                if (calculatedStats.hasOwnProperty(effectKey) && typeof calculatedStats[effectKey] === 'number') {
                    calculatedStats[effectKey] += effectValue * playerSkillLevel;
                    console.log(`  Increased ${effectKey} by ${effectValue * playerSkillLevel}. New ${effectKey}: ${calculatedStats[effectKey]}`);
                } else {
                    console.warn(`  Passive skill '${skillId}' has an effect for unknown or non-numeric stat: ${effectKey}`);
                }
            }
        }
    }

    // Apply equipment bonuses (your existing code)
    const equipmentBonuses = calculateEquipmentBonuses(); // Assuming this function exists and works
    for (const stat in equipmentBonuses) {
        if (calculatedStats.hasOwnProperty(stat)) {
            calculatedStats[stat] += equipmentBonuses[stat];
        }
    }

    // Clamp current HP and MP to the new max values (your existing code)
    changeVitals(calculatedStats, 0, 0);

    // --- NEW: Update the UI to reflect changes ---
    updateStatsDisplay();
}

function increaseStat(statName) {
    if (playerStats.availableStatPoints > 0) {
        playerStats[statName]++;
        playerStats.availableStatPoints--;
        recalculateStats();
        updateStatsDisplay();
    } else {
        // Optionally, provide feedback to the player that they have no more stat points
        console.log("No available stat points!");
    }
}

function meetsRequirements(requirements) {
    if (!requirements) {
        return true;
    }

    for (const key in requirements) {
        if (requirements.hasOwnProperty(key)) {
            const value = requirements[key];

            switch (key) {
                case 'stat':
                    // Original 'stat' check: Requires stat to be GREATER THAN OR EQUAL TO the value
                    const [statName, requiredValue] = value.split(' ');
                    if (!playerStats[statName] || playerStats[statName] < parseInt(requiredValue)) {
                        return false; // Requirement NOT met if stat is less than required value
                    }
                    break;
                case 'statLessThan': // NEW: Check if a stat is LESS THAN a given value
                    const [lessThanStatName, lessThanValue] = value.split(' ');
                    if (playerStats[lessThanStatName] >= parseInt(lessThanValue)) {
                        return false; // Requirement NOT met if stat is NOT less than (i.e., >=) required value
                    }
                    break;
                case 'inventory':
                    // Original 'inventory' check: Requires item to be present (at least 1)
                    if (!inventory[value] || inventory[value] < 1) {
                        return false;
                    }
                    break;
                case 'notInventory': // NEW: Check if a specific item is NOT in inventory
                    if (inventory[value] && inventory[value] >= 1) {
                        return false; // Requirement NOT met if item IS present
                    }
                    break;
                case 'questObjective':
                    // Original 'questObjective' check: Requires objective to be true/completed
                    const [questId, objectiveName] = value.split('.');
                    if (!quests[questId] || !quests[questId].progress || !quests[questId].progress[objectiveName]) {
                        return false;
                    }
                    break;
                case 'job':
                    // Original 'job' check: Requires player's job to BE the value
                    if (playerInfo.job !== value) {
                        return false;
                    }
                    break;
                case 'notJob': // NEW: Check if player's job is NOT a specific value
                    if (playerInfo.job === value) {
                        return false; // Requirement NOT met if job IS the specified value
                    }
                    break;
                case 'zenny':
                    // Original 'zenny' check: Requires player to have enough zenny
                    if (playerInfo.zenny < value) {
                        return false;
                    }
                    break;
                case 'zennyLessThan': 
                    if (playerInfo.zenny >= value) { 
                        return false; 
                    }
                    break;
                case 'gender':
                    // Original 'gender' check: Requires player's gender to BE the value
                    if (playerInfo[key] !== value) {
                        return false;
                    }
                    break;
                case 'notGender': // NEW: Check if player's gender is NOT a specific value
                    if (playerInfo[key] === value) {
                        return false; // Requirement NOT met if gender IS the specified value
                    }
                    break;
                case 'quest':
                    // Original 'quest' check: Requires quest to exist (be active/completed)
                    if (!quests[value]) {
                        return false;
                    }
                    break;
                case 'notQuest': // NEW: Check if a specific quest is NOT active/completed
                    if (quests[value]) { // If the quest exists (is active/completed)
                        return false; // Requirement NOT met if quest IS present
                    }
                    break;
                case 'friend':
                    // Original 'friend' check: Requires a specific friend to exist in the array
                    if (!playerInfo.friends.includes(value)) {
                        return false;
                    }
                    break;
                case 'notFriend': // NEW: Check if a specific friend is NOT in the playerInfo.friends array
                    if (playerInfo.friends.includes(value)) {
                        return false; // Requirement NOT met if friend IS present
                    }
                    break;
                default:
                    // Default case for direct playerStats checks (e.g., { STR: 5 } means STR >= 5)
                    if (playerStats.hasOwnProperty(key) && playerStats[key] < value) {
                        return false;
                    }
            }
        }
    }
    return true;
}

function getRequirementText(requirements) {
	if (!requirements) return '';
	return ' (Requires: ' + Object.entries(requirements).map(([key, val]) => `${key} ≥ ${val}`).join(', ') + ')';
        }

function applyEffects(effects) {
    if (!effects) {
        return;
    }

    let hpChange = 0;
    let mpChange = 0;
    let expChanged = false;

    for (const [key, val] of Object.entries(effects)) {
        switch (key) {
            case 'hp':
                hpChange += val;
                break;
            case 'mp':
                mpChange += val;
                break;
            case 'ITEM':
            case 'EQUIPMENT':
                inventory[val] = (inventory[val] || 0) + 1;
                break;
            case 'job':
                playerInfo.job = val;
                break;
            case 'gender':
                playerInfo.gender = val;
                break;
            case 'hairStyle':
                playerInfo.hairStyle = val;
                break;
            case 'hairColor':
                playerInfo.hairColor = val;
                break;
            case 'costume':
                playerInfo.costume = val;
                break;
            case 'baseEXP':
            case 'jobEXP':
                if (playerStats.hasOwnProperty(key) && typeof playerStats[key] === 'number') {
                    playerStats[key] += val;
                    expChanged = true;
                } else if (playerStats.hasOwnProperty(key)) {
                    playerStats[key] = val;
                    expChanged = true;
                }
                break;
            case 'zenny':
                playerInfo.zenny += val;
                    		if (playerInfo.zenny < 0) {
                        		playerInfo.zenny = 0;
                    		}
                break;
            case 'SKILL':
                // Check if the skill is defined in your global 'skills' object
                if (skills.hasOwnProperty(val)) {
                    // Check if the player already knows the skill
                    if (!playerInfo.skills.hasOwnProperty(val)) {
                        playerInfo.skills[val] = 1; // Add skill to playerInfo with Level 1
                        console.log(`Player learned the skill: ${val}`);
                    } else {
                        console.log(`Player already knows the skill: ${val}`);
                    }
                } else {
                    console.warn(`Attempted to learn undefined skill: ${val}`);
                }
                updateSkillDisplay(); // Always update display after skill changes
                break;
            case 'REMOVE_SKILL': // For removing a skill
                // Check if the player actually has the skill
                if (playerInfo.skills.hasOwnProperty(val)) {
                    delete playerInfo.skills[val]; // Remove the skill property from the object
                    console.log(`Player forgot the skill: ${val}`);
                } else {
                    console.log(`Player does not know the skill: ${val}, so it cannot be removed.`);
                }
                updateSkillDisplay(); // Update the display
                break;
case 'FRIEND': // For adding a friend
    const npcIdToBefriend = val; // Use 'val' as the NPC ID from storyNodes.js

    // Check if the NPC ID is NOT already in the playerInfo.friends array
    if (!playerInfo.friends.includes(npcIdToBefriend)) {
        playerInfo.friends.push(npcIdToBefriend); // Add the NPC ID to the array
        console.log(`EFFECT: Befriended NPC: ${npcIdToBefriend}`);
        console.log("DEBUG: playerInfo.friends after adding friend:", JSON.stringify(playerInfo.friends)); // Verify content
        updateFriendsDisplay(); // Update the friends tab after adding
    } else {
        console.log(`EFFECT: Already friends with NPC: ${npcIdToBefriend}`);
    }
    break;
            default:
                if (playerStats.hasOwnProperty(key) && typeof playerStats[key] === 'number') {
                    playerStats[key] += val;
                } else if (playerStats.hasOwnProperty(key)) {
                    playerStats[key] = val;
                }
        }
    }

    changeVitals(calculatedStats, hpChange, mpChange);
    recalculateStats();
    updateStatsDisplay();

    if (expChanged) {
        checkLevelUp();
    }
}

function clearOptions() {
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
}

function createOptionButton(option) {
    const button = document.createElement('button');
    button.className = 'option-btn';

    let buttonContent = '';
    if (typeof option.text === 'function') {
        const textValue = option.text();
        buttonContent = textValue.startsWith('<img') ? textValue : textValue;
    } else {
        buttonContent = option.text;
    }

    const reqText = getRequirementText(option.requirements);
    let invText = '';
    if (option.inventoryRequired) {
        invText = Array.isArray(option.inventoryRequired)
                  ? ` (Needs items: ${option.inventoryRequired.join(', ')})`
                  : ` (Needs item: ${option.inventoryRequired})`;
    }

    button.innerHTML = buttonContent + reqText + invText;
    button.disabled = !checkOptionAvailability(option);
    button.onclick = () => handleOptionClick(option);

    return button;
}

function checkOptionAvailability(option) {
    const hasRequiredItem = !option.inventoryRequired ||
        (Array.isArray(option.inventoryRequired) ?
            option.inventoryRequired.every(item => inventory[item] && inventory[item] > 0) :
            inventory[option.inventoryRequired] && inventory[option.inventoryRequired] > 0);
    const meetsReqs = meetsRequirements(option.requirements);
    const genderMatches = !(option.requirements && option.requirements.gender && playerInfo.gender !== option.requirements.gender);
    return meetsReqs && hasRequiredItem && genderMatches;
}

function handleOptionClick(option) {
    // Quest Logic
    if (option.quest) {
        switch (option.quest.action) {
            case 'add':
                addQuest(option.quest.questId, option.quest.description);
                break;
            case 'updateDescription':
                updateQuestDescription(option.quest.questId, option.quest.description);
                break;
            case 'complete':
                completeQuest(option.quest.questId, option.quest.description);
                break;
            case 'startNew':
                startNewQuest(option.quest.questId, option.quest.name, option.quest.description);
                break;
        }
    }

    // Inventory Consumption
    if (option.inventoryRequired && option.consumeInventory !== false) {
        const itemsToRemove = Array.isArray(option.inventoryRequired) ? option.inventoryRequired : [option.inventoryRequired];
        itemsToRemove.forEach(item => {
            if (inventory[item]) inventory[item]--;
            if (inventory[item] === 0) delete inventory[item];
        });
    }

    applyEffects(option.effects);

    let nextId = option.nextId;
    if (option.randomNextIds) {
        nextId = option.randomNextIds[Math.floor(Math.random() * option.randomNextIds.length)];
    } else if (option.nextNodes) {
	let nextNodeId = null;
        for (const condition in option.nextNodes) {
            try {
                if (eval(condition)) {
                    nextId = option.nextNodes[condition];
                    break;
                }
            } catch (error) {
                console.error(`Error evaluating condition: ${condition}`, error);
            }
        }
        if (!nextId && option.nextNodes && option.nextNodes["true"]) {
            nextId = option.nextNodes["true"];
        }
    } else if (typeof nextId === 'function') {
        nextId = nextId();
    }

    if (nextId) {
        showNode(nextId);
    }
}

function checkLevelUp() {
    let leveledUp = false; // Flag to track if any level up occurred

    // Check Base Level
    if (playerStats.baseEXP >= playerStats.baseEXPNext) {
        playerStats.baseLevel++;
        playerStats.baseEXP -= playerStats.baseEXPNext;
        playerStats.baseEXPNext = Math.floor(playerStats.baseEXPNext * 1.5);
        playerStats.availableStatPoints += 5; // Award stat points
        console.log(`Base Level Up! Reached level ${playerStats.baseLevel}`);
        leveledUp = true;
    }

    // Check Job Level
    if (playerStats.jobEXP >= playerStats.jobEXPNext) {
        playerStats.baseJobLevel++;
        playerStats.jobEXP -= playerStats.jobEXPNext;
        playerStats.jobEXPNext = Math.floor(playerStats.jobEXPNext * 1.5);
        // Potentially award job-specific skills or bonuses here
	playerStats.availableSkillPoints += 1;
        console.log(`Job Level Up! Reached job level ${playerStats.baseJobLevel}`);
        leveledUp = true;
    }

    if (leveledUp) {
        updateStatsDisplay(); 
	updateSkillDisplay();
    }
}


function initializeGame() {

    // Initialize playerInfo, load game, update UI, show the first node, etc.
    //playerInfo = {};
    //inventory = {};
    //equipment = {};
    //quests = {};
    loadGame();
    showNode("debug");
    openTab('adventure');
    recalculateStats();
    updateInventoryDisplay();
    updateStatsDisplay();
    updateQuestsDisplay();
    updateSkillDisplay();
    updateFriendsDisplay();
}

//do things to calculate the latest updates
initializeGame(); 