//Main story display
function showNode(id) {
    const node = storyNodes[id];
    if (!node) {
        console.error(`Story node with id "${id}" not found!`);
        return;
    }

    displayNodeText(node);
    clearOptions();
    updateStatsDisplay();
    updateInventoryDisplay();

    if (node.options) {
        node.options.forEach(option => {
            const button = createOptionButton(option);
            const optionsDiv = document.getElementById('options');
            optionsDiv.appendChild(button);
        });
    } else {
        const optionsDiv = document.getElementById('options');
        optionsDiv.innerHTML = "<i>(End of story)</i>";
    }
}

function displayNodeText(node) {
    const storyDiv = document.getElementById('story');
    storyDiv.innerHTML = typeof node.text === 'function' ? node.text() : node.text;
}


function openTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabContents.forEach(content => {
        content.classList.add('hidden');
    });

    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabName + '-content').classList.remove('hidden');
    document.querySelector(`.tab-button[onclick="openTab('${tabName}')"]`).classList.add('active');

    if (tabName === 'inventory') {
        updateInventoryDisplay();
    } else if (tabName === 'quests') {
        updateQuestsDisplay();
    } else if (tabName === 'options') {
        // Populate the input fields when the options tab is opened
        document.getElementById('playerName').value = playerInfo.name || '';
        document.getElementById('playerSurname').value = playerInfo.surname || '';
        document.getElementById('playerPronouns').value = playerInfo.pronouns || 'they/them'; // Set default if undefined
        console.log('Options tab opened.');
    } else if (tabName === 'stats') {
        // Populate stats display
        updateDetailedStats(); 
    } else if (tabName === 'skills') {
        updateSkillsDisplay(); 
    } else if (tabName === 'friends') { 
        	updateFriendsDisplay();
    }
}

 // Tooltip functions
 function createTooltipContainer() {
  if (!document.getElementById('tooltip')) {
   const tooltipDiv = document.createElement('div');
   tooltipDiv.id = 'tooltip';
   tooltipDiv.style.position = 'absolute';
   tooltipDiv.style.backgroundColor = 'black';
   tooltipDiv.style.color = 'white';
   tooltipDiv.style.padding = '5px';
   tooltipDiv.style.borderRadius = '5px';
   tooltipDiv.style.zIndex = '10';
   tooltipDiv.style.visibility = 'hidden';
   document.body.appendChild(tooltipDiv);
  }
 }

function showTooltip(event, text) {
	const tooltip = document.getElementById('tooltip');
	tooltip.innerHTML = text;
	tooltip.style.left = event.pageX + 10 + 'px';
	tooltip.style.top = event.pageY + 10 + 'px';
	tooltip.style.visibility = 'visible';
}

function hideTooltip() {
	const tooltip = document.getElementById('tooltip');
	tooltip.style.visibility = 'hidden';
}

//inventory display
 function updateInventoryDisplay() {
  const inventoryDivs = {
   all: document.getElementById('inventory-all'),
   consumable: document.getElementById('inventory-consumable'),
   equipment: document.getElementById('inventory-equipment'),
   misc: document.getElementById('inventory-misc'),
   keyItem: document.getElementById('inventory-keyItem')
  };

  // Clear all tabs
  for (const tab in inventoryDivs) {
   inventoryDivs[tab].innerHTML = '';
  }

  if (Object.keys(inventory).length) {
   Object.entries(inventory).forEach(([item, count]) => {
    let imageFilename = 'images/placeholder.png';
    let description = '';
    let isConsumable = false;
    let canEquip = true; // Assume item can be equipped initially
    let itemType = 'misc'; // Default to misc

    if (itemEffects.hasOwnProperty(item)) {
     imageFilename = itemEffects[item].image || 'images/placeholder.png';
     description = itemEffects[item].description || '';
     isConsumable = itemEffects[item].consumable;
     if (itemEffects[item].type) {
      itemType = itemEffects[item].type;
     }
    } else if (equipmentStats.hasOwnProperty(item)) {
     imageFilename = equipmentStats[item].image || 'images/placeholder.png';
     description = equipmentStats[item].description || '';
     isConsumable = false;
     itemType = equipmentStats[item].type;

     // Check equip requirements
     if (equipmentStats[item].requirements) {
      for (const req in equipmentStats[item].requirements) {
       if (req === 'job' || req === 'gender') {
        if (playerInfo[req] !== equipmentStats[item].requirements[req]) {
         canEquip = false;
         break;
        }
       } else if (playerStats[req] !== equipmentStats[item].requirements[req]) {
        canEquip = false;
        break;
       }
      }
     }
    }

    if (itemEffects.hasOwnProperty(item) || equipmentStats.hasOwnProperty(item)) {
     const itemTitle = `${item} x${count}`;
     let itemElement = `<img src="${imageFilename}" width="48" height="48" alt="${item}" title="${itemTitle}"`;
     if (description) {
      itemElement += ` onmouseover="showTooltip(event, '${description.replace(/'/g, "\\'")}')" onmouseout="hideTooltip()" style="cursor: pointer;"`;
     } else {
      itemElement += ` style="cursor: default;"`;
     }

     let wrapperStyle = 'position: relative; display: inline-block; margin-right: 10px;';
     let onclickAction = '';

     if (isConsumable) {
      onclickAction = ` onclick="useItem('${item}', itemEffects['${item}'])"`;
     } else if (canEquip) {
      onclickAction = ` onclick="equipItem('${item}')" style="cursor: pointer;"`;
     } else {
      wrapperStyle += ' opacity: 0.5;'; // Make semi-transparent if cannot equip
     }

     itemElement = `<div style="${wrapperStyle}">
        ${itemElement}${onclickAction}>
        <span class="item-quantity">x ${count}</span>
       </div>`;

     // Append to 'All' tab and specific type tab
     inventoryDivs.all.innerHTML += itemElement;
     if (inventoryDivs.hasOwnProperty(itemType)) {
      inventoryDivs[itemType].innerHTML += itemElement;
     } else {
      inventoryDivs.misc.innerHTML += itemElement; // Default to 'misc'
     }

    } else {
     inventoryDivs.all.innerHTML += `${item} x${count}<br>`; // For non-image items
     if (inventoryDivs.hasOwnProperty(itemType)) {
      inventoryDivs[itemType].innerHTML += `${item} x${count}<br>`;
     } else {
      inventoryDivs.misc.innerHTML += `${item} x${count}<br>`;
     }
    }
   });
  } else {
   inventoryDivs.all.innerHTML = 'Empty';
  }

  // Ensure the tooltip container exists
  createTooltipContainer();
 }

function openInventoryTab(tabName) {
    const tabContents = document.getElementsByClassName('inventory-tab');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }
    document.getElementById(`inventory-${tabName}`).style.display = 'block';

    const tabButtons = document.getElementsByClassName('inventory-tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    event.currentTarget.classList.add('active');
}



//Sidebar display
	function updateStatsDisplay() {

		let baseMaxHP = calculatedStats.maxHP;
		let baseMaxMP = calculatedStats.maxMP;
		let baseATK = calculatedStats.ATK;
		let baseMATK = calculatedStats.MATK;

		const statsDiv = document.getElementById('stats');

		//draw avatar
		let avatarHTML = `<div id="avatar-placeholder" style="position: relative; width: 100px; height: 150px;">`;

		// Costume
		const currentCostumeBase = costumes[playerInfo.costume];
		if (currentCostumeBase && currentCostumeBase[playerInfo.gender]) {
			const currentCostume = currentCostumeBase[playerInfo.gender];
			avatarHTML += `<img src="${currentCostume.src}" style="position: absolute; top: ${currentCostume.offsetY}px; left: ${currentCostume.offsetX}px; width: auto; height: auto;">`;
		}

		// Hair
		const currentHairStyle = hairStyles[playerInfo.hairStyle];
		const currentHairKey = `${playerInfo.hairStyle}_${playerInfo.hairColor}`; // Create the key
		const currentHair = hairAssets[currentHairKey];

		if (currentHairStyle && currentHair) {
			avatarHTML += `<img src="${currentHair.src}" style="position: absolute; top: ${currentHairStyle.offsetY}px; left: ${currentHairStyle.offsetX}px; width: auto; height: auto;">`;
		}

		avatarHTML += `</div>`; // Close the avatar-placeholder div

		let equipmentDisplay = '<strong>Equipment:</strong><br/>';
		for (const [slot, itemName] of Object.entries(equipment)) {
			if (itemName !== "Nothing") {
				equipmentDisplay += `<span class="equipment-text" onclick="unequipItem(\`${slot}\`)">${slot}: ${itemName}</span><br/>`;
			} else {
				equipmentDisplay += `${slot}: ${itemName}<br/>`;
			}
		}

		const equipmentBonuses = calculateEquipmentBonuses();

		

		//the stuff that actually draws stuff to the screen
		statsDiv.innerHTML =
			avatarHTML +
			`<strong>${playerInfo.name} ${playerInfo.surname}</strong>` +
			`<br><strong>Job:</strong> ${playerInfo.job}` +
			`<br><strong><strike>Z</strike></strong> ${playerInfo.zenny}<p/>` +
			`<div style="margin-bottom: 5px;">HP: ${calculatedStats.currentHP} / ${baseMaxHP} ${equipmentBonuses.maxHP > 0 ? '(+' + equipmentBonuses.maxHP + ')' : ''}<div style="background-color: #ddd; width: 100%; border-radius: 5px; overflow: hidden;"><div style="background-color: #1ff28c; width: ${calculatedStats.currentHP / baseMaxHP * 100}%; height: 10px;"></div></div></div>
			<div style="margin-bottom: 5px;">MP: ${calculatedStats.currentMP} / ${baseMaxMP} ${equipmentBonuses.maxMP > 0 ? '(+' + equipmentBonuses.maxMP + ')' : ''}<div style="background-color: #ddd; width: 100%; border-radius: 5px; overflow: hidden;"><div style="background-color: #228af2; width: ${calculatedStats.currentMP / baseMaxMP * 100}%; height: 10px;"></div></div></div>
			<div style="margin-bottom: 5px;">Level: ${playerStats.baseLevel} | ${playerStats.baseEXP} / ${playerStats.baseEXPNext}<div style="background-color: #ddd; width: 100%; border-radius: 5px; overflow: hidden;"><div style="background-color: #ff8f4f; width: ${playerStats.baseEXP / playerStats.baseEXPNext * 100}%; height: 10px;"></div></div></div>
			<div style="margin-bottom: 5px;">Job Level: ${playerStats.baseJobLevel} | ${playerStats.jobEXP} / ${playerStats.jobEXPNext}<div style="background-color: #ddd; width: 100%; border-radius: 5px; overflow: hidden;"><div style="background-color: #ffd66e; width: ${playerStats.jobEXP / playerStats.jobEXPNext * 100}%; height: 10px;"></div></div></div>
			<strong>Stats:</strong>` +
			`<br>STR:` + playerStats.STR + ` ${equipmentBonuses.STR > 0 ? '(+' + equipmentBonuses.STR + ')' : ''} <button onclick="increaseStat('STR')" ${playerStats.availableStatPoints === 0 ? 'disabled' : ''}>+</button><br/>` +
			`AGI:` + playerStats.AGI + ` ${equipmentBonuses.AGI > 0 ? '(+' + equipmentBonuses.AGI + ')' : ''} <button onclick="increaseStat('AGI')" ${playerStats.availableStatPoints === 0 ? 'disabled' : ''}>+</button><br/>` +
			`VIT:` + playerStats.VIT + ` ${equipmentBonuses.VIT > 0 ? '(+' + equipmentBonuses.VIT + ')' : ''} <button onclick="increaseStat('VIT')" ${playerStats.availableStatPoints === 0 ? 'disabled' : ''}>+</button><br/>` +
			`INT:` + playerStats.INT + ` ${equipmentBonuses.INT > 0 ? '(+' + equipmentBonuses.INT + ')' : ''} <button onclick="increaseStat('INT')" ${playerStats.availableStatPoints === 0 ? 'disabled' : ''}>+</button><br/>` +
			`DEX:` + playerStats.DEX + ` ${equipmentBonuses.DEX > 0 ? '(+' + equipmentBonuses.DEX + ')' : ''} <button onclick="increaseStat('DEX')" ${playerStats.availableStatPoints === 0 ? 'disabled' : ''}>+</button><br/>` +
			`LUK:` + playerStats.LUK + ` ${equipmentBonuses.LUK > 0 ? '(+' + equipmentBonuses.LUK + ')' : ''} <button onclick="increaseStat('LUK')" ${playerStats.availableStatPoints === 0 ? 'disabled' : ''}>+</button><br/>` +
			 '<p/>' +
			equipmentDisplay;  
			updateDetailedStats();
	}



//Stats tab
 function updateDetailedStats() {
  const statsDiv = document.getElementById('detailedStats'); // Target the correct div!

  let equipmentDisplay = '<strong>Equipment:</strong><br/>';
  for (const [slot, itemName] of Object.entries(equipment)) {
   if (itemName !== "Nothing") {
    equipmentDisplay += `<span class="equipment-text" onclick="unequipItem(\`${slot}\`)">${slot}: ${itemName}</span><br/>`;
   } else {
    equipmentDisplay += `${slot}: ${itemName}<br/>`;
   }
  }

  const equipmentBonuses = calculateEquipmentBonuses();


  statsDiv.innerHTML = `
            <table style="width: 100%;">
                <tr>
                    <th style="width: 20%; vertical-align: top;">Stats</th>
                    <th style="width: 40%; vertical-align: top;">Attacking Stats</th>
                    <th style="width: 40%; vertical-align: top;">Defensive Stats</th>
                </tr>
                <tr>
                    <td style="vertical-align: top;">
                        STR: ${playerStats.STR} ${equipmentBonuses.STR > 0 ? '(+' + equipmentBonuses.STR + ')' : ''} <button onclick="increaseStat('STR')" ${playerStats.availableStatPoints === 0 ? 'disabled' : ''}>+</button><br>
                        AGI: ${playerStats.AGI} ${equipmentBonuses.AGI > 0 ? '(+' + equipmentBonuses.AGI + ')' : ''} <button onclick="increaseStat('AGI')" ${playerStats.availableStatPoints === 0 ? 'disabled' : ''}>+</button><br>
                        VIT: ${playerStats.VIT} ${equipmentBonuses.VIT > 0 ? '(+' + equipmentBonuses.VIT + ')' : ''} <button onclick="increaseStat('VIT')" ${playerStats.availableStatPoints === 0 ? 'disabled' : ''}>+</button><br>
                        INT: ${playerStats.INT} ${equipmentBonuses.INT > 0 ? '(+' + equipmentBonuses.INT + ')' : ''} <button onclick="increaseStat('INT')" ${playerStats.availableStatPoints === 0 ? 'disabled' : ''}>+</button><br>
                        DEX: ${playerStats.DEX} ${equipmentBonuses.DEX > 0 ? '(+' + equipmentBonuses.DEX + ')' : ''} <button onclick="increaseStat('DEX')" ${playerStats.availableStatPoints === 0 ? 'disabled' : ''}>+</button><br>
                        LUK: ${playerStats.LUK} ${equipmentBonuses.LUK > 0 ? '(+' + equipmentBonuses.LUK + ')' : ''} <button onclick="increaseStat('LUK')" ${playerStats.availableStatPoints === 0 ? 'disabled' : ''}>+</button><p>
                        Available Stat Points: ${playerStats.availableStatPoints}</p>
                    </td>
                    <td style="vertical-align: top;">
                        ATK: ${calculatedStats.ATK} ${equipmentBonuses.ATK > 0 ? '(+' + equipmentBonuses.ATK + ')' : ''} (Base: ${calculatedStats.ATK - equipmentBonuses.ATK})<br>
                        MATK: ${calculatedStats.MATK} ${equipmentBonuses.MATK > 0 ? '(+' + equipmentBonuses.MATK + ')' : ''} (Base: ${calculatedStats.MATK - equipmentBonuses.MATK})<br>
                        Accuracy: ${calculatedStats.hit} ${equipmentBonuses.hit > 0 ? '(+' + equipmentBonuses.hit + ')' : ''} (Base: ${calculatedStats.hit - (equipmentBonuses.hit || 0)})<br>
                        CRIT Rate: ${calculatedStats.critRate} ${equipmentBonuses.ATK > 0 ? '(+' + equipmentBonuses.critRate + ')' : ''} (Base: ${calculatedStats.critRate - (equipmentBonuses.critRate || 0)})<br>
                        Crit Damage: ${calculatedStats.critDamage} ${equipmentBonuses.critDamage > 0 ? '(+' + equipmentBonuses.critDamage + ')' : ''} (Base: ${calculatedStats.critDamage - (equipmentBonuses.critDamage || 0)})<br>
                        ATKSpeed: ${calculatedStats.ASPD} ${equipmentBonuses.ASPD > 0 ? '(+' + equipmentBonuses.ASPD + ')' : ''} (Base: ${calculatedStats.ASPD - (equipmentBonuses.ASPD || 0)})
                    </td>
                    <td style="vertical-align: top;">
                        HP: ${calculatedStats.maxHP} ${equipmentBonuses.maxHP > 0 ? '(+' + equipmentBonuses.maxHP + ')' : ''} (Base: ${calculatedStats.maxHP - equipmentBonuses.maxHP})<br>
                        MP: ${calculatedStats.maxMP} ${equipmentBonuses.maxMP > 0 ? '(+' + equipmentBonuses.maxMP + ')' : ''} (Base: ${calculatedStats.maxMP - equipmentBonuses.maxMP})<br>
                        DEF: ${calculatedStats.DEF} ${equipmentBonuses.DEF > 0 ? '(+' + equipmentBonuses.DEF + ')' : ''} (Base: ${calculatedStats.DEF - (equipmentBonuses.DEF || 0)})<br>
                        MDEF: ${calculatedStats.MDEF} ${equipmentBonuses.MDEF > 0 ? '(+' + equipmentBonuses.MDEF + ')' : ''} (Base: ${calculatedStats.MDEF - (equipmentBonuses.MDEF || 0)})<br>
                        Move Speed: ${calculatedStats.speed} ${equipmentBonuses.speed > 0 ? '(+' + equipmentBonuses.speed + ')' : ''} (Base: ${calculatedStats.speed - (equipmentBonuses.speed || 0)})<br>
                        Dodge: ${calculatedStats.flee} ${equipmentBonuses.flee > 0 ? '(+' + equipmentBonuses.flee + ')' : ''} (Base: ${calculatedStats.flee - (equipmentBonuses.flee || 0)})
                    </td>
                </tr>
            </table>` 
 }


//Skills tab
function updateSkillDisplay() {
    const skillsDiv = document.getElementById('skills');
    if (!skillsDiv) {
        console.error("Error: 'skills' div not found in the HTML.");
        return;
    }

    skillsDiv.innerHTML = ''; // Clear any existing content

    // Display Available Skill Points - now added directly to skillsDiv first
    const skillPointsDisplay = document.createElement('p');
    skillPointsDisplay.textContent = `Available Skill Points: ${playerStats.availableSkillPoints}`;
    skillPointsDisplay.style.fontWeight = 'bold';
    skillPointsDisplay.style.color = '#FFD700';
    skillPointsDisplay.style.marginBottom = '15px'; // Add some space below it
    skillsDiv.appendChild(skillPointsDisplay);

    // --- NEW: Create a container for the individual skill items ---
    const skillsGridContainer = document.createElement('div');
    skillsGridContainer.id = 'skills-grid-container'; // Assign an ID for CSS targeting
    skillsDiv.appendChild(skillsGridContainer); // Append this container to the main skillsDiv

    const learnedSkillIds = Object.keys(playerInfo.skills);

    if (learnedSkillIds.length > 0) {
        learnedSkillIds.forEach(skillId => {
            if (skills.hasOwnProperty(skillId)) {
                const skillInfo = skills[skillId];
                const playerSkillLevel = playerInfo.skills[skillId];

                const skillContainer = document.createElement('div');
                skillContainer.classList.add('skill-item');

                const skillImage = document.createElement('img');
                skillImage.src = skillInfo.image;
                skillImage.alt = skillId;

                // Update tooltip
                if (skillInfo.description) {
                    let fullDescription = `${skillInfo.description}<br>Level: ${playerSkillLevel} / ${skillInfo.maxLevel || 'N/A'}`;
                    skillImage.addEventListener('mouseover', (event) => showTooltip(event, fullDescription));
                    skillImage.addEventListener('mouseout', hideTooltip);
                }
                skillContainer.appendChild(skillImage);

                const skillNameAndLevel = document.createElement('p');
                skillNameAndLevel.textContent = `${skillId} (Lv. ${playerSkillLevel}/${skillInfo.maxLevel || 'N/A'})`;
                skillContainer.appendChild(skillNameAndLevel);

                // Apply Clickability and Conditional Styling to skillContainer
                const canLevelUp = (playerSkillLevel < skillInfo.maxLevel && playerStats.availableSkillPoints > 0);

                if (canLevelUp) {
                    skillContainer.classList.add('skill-level-up-available');
                    skillContainer.style.cursor = 'pointer';
                    skillContainer.onclick = () => levelUpSkill(skillId);
                } else if (playerSkillLevel >= skillInfo.maxLevel) {
                    const maxLevelText = document.createElement('p');
                    maxLevelText.textContent = 'MAX';
                    maxLevelText.style.color = 'lightgreen';
                    maxLevelText.style.fontSize = '0.8em';
                    maxLevelText.style.fontWeight = 'bold';
                    skillContainer.appendChild(maxLevelText);
                    skillContainer.style.cursor = 'default';
                    skillContainer.onclick = null;
                } else {
                    skillContainer.style.cursor = 'default';
                    skillContainer.onclick = null;
                }

                // Append each individual skill item to the new grid container
                skillsGridContainer.appendChild(skillContainer);
            } else {
                console.warn(`Warning: Skill '${skillId}' found in playerInfo.skills but no base definition in 'skills' object.`);
                const skillText = document.createElement('p');
                skillText.textContent = `(Undefined Skill: ${skillId})`;
                skillText.style.color = 'red';
                skillsGridContainer.appendChild(skillText); // Append to grid container
            }
        });
    } else {
        const noSkillsText = document.createElement('p');
        noSkillsText.textContent = "No skills learned yet.";
        noSkillsText.style.fontStyle = 'italic';
        noSkillsText.style.color = '#aaa';
        skillsGridContainer.appendChild(noSkillsText); // Append to grid container
    }
}


//Friends tab
function updateFriendsDisplay() {
    console.log("--- updateFriendsDisplay called ---");
    console.log("DEBUG: playerInfo.friends at start of updateFriendsDisplay:", JSON.stringify(playerInfo.friends));

    const friendsListDiv = document.getElementById('friends');
    if (!friendsListDiv) {
        console.error("Error: The HTML element with ID 'friends' was not found. Cannot update display.");
        return;
    }

    friendsListDiv.innerHTML = ''; // Clear any existing content

    // You can remove this red debug message now if you wish, it served its purpose.
    // const testMessage = document.createElement('div');
    // testMessage.textContent = "DEBUG: Attempting to display friends...";
    // testMessage.style.color = "red";
    // testMessage.style.fontWeight = "bold";
    // friendsListDiv.appendChild(testMessage);


    const befriendedNPCIds = playerInfo.friends;
    console.log("Befriended NPC IDs in 'playerInfo.friends' array:", befriendedNPCIds);

    if (befriendedNPCIds.length > 0) {
        befriendedNPCIds.forEach(npcId => {
            // Use a try-catch block for each friend to prevent one error from breaking the whole list
            try {
                if (npcs.hasOwnProperty(npcId)) {
                    const npcData = npcs[npcId];

                    const friendContainer = document.createElement('div');
                    friendContainer.classList.add('friend-item'); // Apply CSS class for styling

                    // Create and append NPC image
                    const friendImage = document.createElement('img');
                    // Use npcData.image if it exists and is a string, otherwise use placeholder
                    friendImage.src = (npcData.image && typeof npcData.image === 'string') ? npcData.image : 'images/npcs/placeholder.png'; 
                    friendImage.alt = npcData.name || npcId; // Alt text for accessibility
                    friendImage.width = 48; // Example size
                    friendImage.height = 48; // Example size

                    // IMPORTANT: Handle image loading errors gracefully
                    friendImage.onerror = function() {
                        console.warn(`ERROR: Could not load image for NPC '${npcId}' from path: ${this.src}. Displaying fallback text.`);
                        this.remove(); // Remove the broken image element
                        
                        // Create a text alternative if image fails
                        const fallbackText = document.createElement('p');
                        fallbackText.textContent = `[Image Missing: ${npcData.name || npcId}]`;
                        fallbackText.style.color = "orange"; // Make fallback text stand out
                        friendContainer.prepend(fallbackText); // Add text above name
                    };

                    friendContainer.appendChild(friendImage);

                    // Create and append NPC name
                    const friendName = document.createElement('p');
                    friendName.textContent = npcData.name || `[Unknown Name: ${npcId}]`; // Use name or a fallback text
                    friendContainer.appendChild(friendName);

                    friendsListDiv.appendChild(friendContainer);
                    console.log(`Successfully appended and displayed friend: ${npcData.name || npcId}`);
                } else {
                    console.warn(`Warning: NPC '${npcId}' found in 'playerInfo.friends' but not defined in the 'npcs' object.`);
                    // Display a basic entry for unknown NPCs
                    const unknownFriendText = document.createElement('div');
                    unknownFriendText.textContent = `(Unknown Friend: ${npcId})`;
                    unknownFriendText.style.backgroundColor = "darkred"; // Make unknown friends visible
                    unknownFriendText.style.color = "white";
                    unknownFriendText.style.padding = "5px";
                    unknownFriendText.style.margin = "5px";
                    friendsListDiv.appendChild(unknownFriendText);
                }
            } catch (e) {
                console.error(`ERROR: Failed to display friend '${npcId}':`, e);
                // Fallback display if an unexpected error occurs during creation
                const errorDisplay = document.createElement('div');
                errorDisplay.textContent = `[DISPLAY ERROR for ${npcId}]`;
                errorDisplay.style.backgroundColor = "purple";
                errorDisplay.style.color = "white";
                errorDisplay.style.padding = "5px";
                errorDisplay.style.margin = "5px";
                friendsListDiv.appendChild(errorDisplay);
            }
        });
    } else {
        const noFriendsText = document.createElement('p');
        noFriendsText.textContent = "You haven't befriended anyone yet.";
        noFriendsText.style.color = "white"; // Ensure visibility on dark background
        friendsListDiv.appendChild(noFriendsText);
        console.log("No friends to display in the tab.");
    }
    console.log("--- updateFriendsDisplay finished ---");
}