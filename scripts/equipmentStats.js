// equipmentStats.js
const equipmentStats = {
  "Leather Cap": {
    image: 'images/equipment/headgear/cap.gif',
    description: `<b>Leather Cap</b><p/>it's a leather cap. Slot: Top. <p/> Bonuses: VIT +1, HP+5`, 
    slot: "HeadUp",
    type: 'equipment',
    bonuses: {
      VIT: 1,
      maxHP: 5
    }
  },
  "Helmet": {
    description: "A hard helmet", 
    image: 'images/equipment/headgear/helm.gif',
    slot: "HeadUp",
    type: 'equipment',
    bonuses: {
      DEX: 1,
      maxMP: 500,
	maxHP: 500,
	ATK: 100,
	MATK: 100,
	hit: 100,
	critRate: 100,
	critDamage: 100,
	ASPD: 100,
	DEF: 100,
	MDEF: 100,
	speed: 100,
	flee: 100,
    }
  },
  "Rusty Sword": {
    slot: "MainHand",
    image: 'images/equipment/weapons/sword.gif',
    type: 'equipment',
    description: "A worn sword, still sharp enough to cut.",
    bonuses: {
      STR: 2,
      ATK: 3,
	critRate: 1,
	critDamage: 1,
    },
    requirements: { // Add the requirements here
    	job: "knight"
    },
  },
  "Broadsword": {
   slot: "MainHand",
   image: 'images/equipment/weapons/broadsword.gif',
   type: "equipment",
    description: "A big sword that requires both hands",
   twoHanded: true, // Indicates this weapon takes both hands
   bonuses: {
    ATK: 25,
    STR: 5
   },
},
  "Blade": {
   slot: "MainHand",
   image: 'images/equipment/weapons/blade.gif',
   type: "equipment",
    description: "A long sharp blade",
   bonuses: {
    ATK: 15,
    STR: 15
   },
},
  "Small Shield": {
    slot: "OffHand",
    image: 'images/equipment/offhand/guard.gif',
    type: 'equipment',
    description: "A basic shield for defense.",
    bonuses: {
      VIT: 1
    },
  },
  "Cloth Armor": {
    slot: "Body",
    type: 'equipment',
    description: "Simple cloth armor.",
    bonuses: {
      maxHP: 10
    },
  },
  "Leather Boots": {
    slot: "Shoes",
    type: 'equipment',
    description: "Boots made for travel.",
    bonuses: {
      DEX: 1
    },
  },
  "Silver Ring": {
    slot: "accessory",
    image: 'images/equipment/accessories/silverring.gif',
    type: 'equipment',
    description: "A ring with a faint magical glow.",
    bonuses: {
      INT: 1,
      maxMP: 5
    },
  },
  "Gold Ring": {
    slot: "accessory",
    image: 'images/equipment/accessories/goldring.gif',
    type: 'equipment',
    description: "A magic gold ring.",
    bonuses: {
      STR: 1,
      maxHP: 5
    },
  },
  // Add more equipment items here
};


//Equipment logic

function equipItem(itemName) {
    if (!equipmentStats.hasOwnProperty(itemName)) {
        console.error(`Error: equipItem called for unknown item: '${itemName}'.`);
        return;
    }

    const itemData = equipmentStats[itemName];
    const itemSlotType = itemData.slot; // Renamed to clearly differentiate from equipment slot IDs

    // 1. Check if player meets requirements for the item
    if (itemData.requirements && !meetsRequirements(itemData.requirements)) {
        console.log(`Cannot equip '${itemName}': Does not meet requirements.`);
        return;
    }

    // Variables to track which slots will be equipped/unequipped
    let slotsToEquip = []; // The final slot(s) where itemName will be placed
    let slotsToUnequipFirst = []; // Slots that need to be cleared before the new item is placed

    // 2. Determine target slots based on item type and current equipment
    if (itemSlotType === "MainHand") {
        // Case 1: Item is a two-handed weapon
        if (itemData.twoHanded) {
            console.log(`Equipping two-handed weapon: ${itemName}`);
            slotsToEquip.push("MainHand");
            slotsToUnequipFirst.push("MainHand", "OffHand"); // Two-handed clears both
        }
        // Case 2: Item is a one-handed weapon (potential dual-wielding or standard MainHand)
        else {
            const currentMainHandItem = equipment["MainHand"];
            const currentMainHandData = currentMainHandItem !== "Nothing" ? equipmentStats[currentMainHandItem] : null;

            // Dual Wielding Logic:
            // - Current MainHand must be a one-handed weapon
            // - OffHand must be empty
            // - Player must meet STR requirement
            if (currentMainHandData && !currentMainHandData.twoHanded && equipment["OffHand"] === "Nothing" && playerStats.STR >= 10) {
                console.log(`Dual-wielding '${itemName}' in OffHand.`);
                slotsToEquip.push("OffHand"); // New item goes into OffHand
            }
            // Standard MainHand equip:
            // - MainHand is empty
            // - OR replacing a two-handed weapon in MainHand
            // - OR dual-wielding conditions are not met
            else {
                console.log(`Equipping '${itemName}' in MainHand.`);
                slotsToEquip.push("MainHand");
                slotsToUnequipFirst.push("MainHand"); // Clear existing MainHand item

                // If replacing a two-handed weapon, OffHand must also be cleared
                if (currentMainHandData && currentMainHandData.twoHanded && equipment["OffHand"] !== "Nothing") {
                    slotsToUnequipFirst.push("OffHand");
                }
            }
        }
    } else if (itemSlotType === 'accessory') {
        // Find an empty accessory slot or replace Acc1 by default
        if (equipment["Acc1"] === "Nothing") {
            slotsToEquip.push("Acc1");
            console.log(`Equipping '${itemName}' in Acc1.`);
        } else if (equipment["Acc2"] === "Nothing") {
            slotsToEquip.push("Acc2");
            console.log(`Equipping '${itemName}' in Acc2.`);
        } else {
            // Both accessory slots full, replace Acc1 by default for simplicity
            console.log(`Both accessory slots full. Replacing Acc1 with '${itemName}'.`);
            slotsToUnequipFirst.push("Acc1"); // Will unequip Acc1
            slotsToEquip.push("Acc1");      // Then equip new item in Acc1
            // A more advanced version would ask the user which slot to use
        }
    }
    // For all other single-occupancy slots (e.g., HeadUp, Body, Shield, Feet)
    else {
        console.log(`Equipping '${itemName}' in ${itemSlotType}.`);
        slotsToEquip.push(itemSlotType);
        if (equipment[itemSlotType] !== "Nothing") {
            slotsToUnequipFirst.push(itemSlotType); // Need to unequip existing item in this slot
        }
    }

    // If no valid slot was determined (e.g., both accessory slots full and item was not clicked from inventory)
    if (slotsToEquip.length === 0) {
        console.log(`Equip action failed: No valid slot determined for '${itemName}'.`);
        return;
    }

    // Check if the item is already equipped in its intended single slot
    // This prevents unequipping then re-equipping the exact same item when clicking an already equipped item.
    if (slotsToEquip.length === 1 && equipment[slotsToEquip[0]] === itemName) {
        console.log(`'${itemName}' is already equipped in ${slotsToEquip[0]}. No action needed.`);
        return;
    }

    // 3. Perform unequips first to return old items to inventory
    // This uses the unequipItem function to handle returning the old item and clearing the slot
    for (const slotToClear of slotsToUnequipFirst) {
        if (equipment[slotToClear] !== "Nothing") { // Only unequip if something is actually there
            unequipItem(slotToClear);
            // Note: unequipItem already calls recalculateStats, updateInventoryDisplay, updateStatsDisplay.
            // We need to suppress these calls or handle them only ONCE at the very end of equipItem.
            // For now, I'll allow them and then call again at the end, which is redundant but safe.
            // A more optimized approach would involve flags to prevent multiple UI updates.
        }
    }

    // 4. Assign new item to equipment slots
    for (const targetSlot of slotsToEquip) {
        equipment[targetSlot] = itemName;
        console.log(`Successfully equipped '${itemName}' into ${targetSlot}.`);
    }

    // 5. Deduct item from inventory
    if (inventory[itemName] && inventory[itemName] > 0) {
        inventory[itemName]--;
        if (inventory[itemName] === 0) {
            delete inventory[itemName];
        }
    } else {
        console.warn(`Attempted to equip '${itemName}' but it was not found or count was zero in inventory. This indicates a prior logic error.`);
        // If the item wasn't in inventory to begin with, roll back the equipment change
        for (const targetSlot of slotsToEquip) {
            equipment[targetSlot] = "Nothing"; // Rollback equipment change
        }
        return; // Stop execution
    }

    // 6. Recalculate stats and update displays (all at once after changes)
    recalculateStats();
    updateInventoryDisplay();
    updateStatsDisplay();
}

function unequipItem(slot) {
    if (equipment[slot] === "Nothing") {
        console.log(`Nothing to unequip from ${slot}.`);
        return; // Exit if there's nothing to unequip
    }

    let itemName = equipment[slot];
    console.log(`Unequipping '${itemName}' from ${slot}.`);

    equipment[slot] = "Nothing"; // Clear the equipment slot
    inventory[itemName] = (inventory[itemName] || 0) + 1; // Return item to inventory

    recalculateStats(); // Recalculate stats after the item is unequipped
    updateInventoryDisplay();
    updateStatsDisplay();
}


 function applyEquipmentBonuses(itemName, equipping) {
  if (!equipmentStats.hasOwnProperty(itemName) || !equipmentStats[itemName].bonuses) {
   return; // Exit if no bonuses
  }

  const bonuses = equipmentStats[itemName].bonuses;
  const multiplier = equipping ? 1 : -1; // 1 for equipping, -1 for unequipping

  // Apply bonuses to playerStats
  for (const stat in bonuses) {
   if (playerStats.hasOwnProperty(stat)) {
    playerStats[stat] += bonuses[stat] * multiplier;
   }
  }

  // Recalculate all stats using calculateEquipmentBonuses and recalculateStats
  recalculateStats();
 }

//equipment bonuses
 function calculateEquipmentBonuses() {
  const equipmentBonuses = {
   STR: 0,
   AGI: 0,
   VIT: 0,
   INT: 0,
   DEX: 0,
   LUK: 0,
   ATK: 0,
   MATK: 0,
   maxHP: 0,
   maxMP: 0,
   hit: 0,
   critRate: 0,
   critDamage: 0,
   DEF: 0,
   MDEF: 0,
   speed: 0,
   flee: 0,
   ASPD: 0,
  };

  for (const slot in equipment) {
   const itemName = equipment[slot];
   if (itemName !== "Nothing" && equipmentStats.hasOwnProperty(itemName) && equipmentStats[itemName].bonuses) {
    const bonuses = equipmentStats[itemName].bonuses;
    for (const stat in bonuses) {
     equipmentBonuses[stat] = (equipmentBonuses[stat] || 0) + (bonuses[stat] || 0);
    }
   }
  }

  return equipmentBonuses;
 }