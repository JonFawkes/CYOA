const skills = {
  "Fireball": {
    image: 'images/skills/fireball.gif',
    description: `Summon a ball of fire`,
    attributes: ["fire", "magic"],
    effects: { Damage: 100 },
    cost: { mp: 20 }, 
    cooldown: 2000,
    range: 10,  
    Level: 1,
    maxLevel: 10,
  },
  "Dual Wield": {
    image: 'images/skills/dualwield.gif',
    description: `Allows you to equip a one-handed weapon in your offhand`,
    attributes: [],
    effects: {},
    passive: true,
  },
  "Sword Mastery": {
    image: 'images/skills/swordmastery.gif',
    description: `Increases your ATK by 5 per skill level`,
    attributes: [],
    effects: { ATK: 5 },
    maxLevel: 10,
    passive: true,
  },
};


//Skills logic


function levelUpSkill(skillId) {
    console.log(`Attempting to level up ${skillId}...`);

    // 1. Check if the player actually knows the skill
    if (!playerInfo.skills.hasOwnProperty(skillId)) {
        console.warn(`Player does not know skill: ${skillId}. Cannot level up.`);
        // Optional: Provide UI feedback (e.g., a temporary message on screen)
        return;
    }

    const currentSkillLevel = playerInfo.skills[skillId];
    const skillData = skills[skillId]; // Get the base skill data (e.g., maxLevel) from skills.js

    // 2. Check if skill data exists (safety check)
    if (!skillData) {
        console.error(`Skill data for '${skillId}' not found in the global 'skills' object. Cannot level up.`);
        return;
    }

    // 3. Check if player has enough skill points (cost is 1 point per level)
    if (playerStats.availableSkillPoints < 1) {
        console.log("Not enough skill points to level up.");
        // Optional: Provide UI feedback "Not enough skill points!"
        return;
    }

    // 4. Check if the skill is already at its maximum level
    if (currentSkillLevel >= skillData.maxLevel) {
        console.log(`${skillId} is already at max level (${skillData.maxLevel}).`);
        // Optional: Provide UI feedback "Skill is already at max level!"
        return;
    }

    // All checks passed! Proceed with leveling up the skill.
    playerStats.availableSkillPoints--; // Deduct 1 skill point
    playerInfo.skills[skillId]++;      // Increment skill level
    console.log(`Leveled up ${skillId} to Level ${playerInfo.skills[skillId]}!`);

    // --- Optional: Recalculate player stats if leveling a skill affects them ---
    // This is important for passive skills or skills that grant stat bonuses.
    // You will need to implement the logic inside recalculateStats() to read skill effects.
    recalculateStats(); // Ensure this function correctly re-evaluates all player stats

    // Update the UI to reflect changes
    updateStatsDisplay();    // To reflect changes in availableSkillPoints (if shown in stats tab)
    updateSkillDisplay();    // To refresh the skills tab and show the new level and skill points
    //saveGame();              // Important: Save the game state after a skill level up
}