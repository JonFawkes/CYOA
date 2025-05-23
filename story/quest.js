// Object to store quests

//quests functions

function startNewQuest(questId, questName, initialDescription) {
    if (!quests[questId]) {
        quests[questId] = {
            name: questName,
            description: initialDescription,
            status: "active"
        };
        updateQuestsDisplay();
        console.log(`New quest started: ${questName} (ID: ${questId})`);
    } else {
        console.warn(`Quest with ID "${questId}" already exists.`);
    }
}

function addQuest(questId, description) {
    if (quests[questId] && quests[questId].status === "hidden") {
        quests[questId].status = "active";
        quests[questId].description = description; // Set initial description
        updateQuestsDisplay();
        console.log(`Quest started: ${quests[questId].name}`);
    }
}

function updateQuestDescription(questId, description) {
    if (quests[questId]) {
        quests[questId].description = description; // Update description
        updateQuestsDisplay();
        console.log(`Quest ${questId} description updated: ${description}`);
    }
}

function completeQuest(questId, completionDescription) {
    if (quests[questId]) {
        quests[questId].status = "completed";
        quests[questId].description = completionDescription; // Update the description
        updateQuestsDisplay();
        console.log(`Quest completed: ${quests[questId].name}`);
    }
}

function updateQuestsDisplay() {
    const questsDiv = document.getElementById('quests');
    let questsHTML = '<h2>Quests</h2>';
    let hasActiveQuests = false;

    for (const questId in quests) {
        const quest = quests[questId];
        if (quest.status !== "hidden") {
            hasActiveQuests = true;
            const displayId = `quest-description-${questId}`;
            const isCollapsed = localStorage.getItem(`quest-collapsed-${questId}`) === 'true' && quest.status === 'completed';
            questsHTML += `<div class="quest-entry">`;
            questsHTML += `<strong class="quest-title" onclick="toggleQuestDescription('${displayId}', '${questId}')">${quest.name}</strong> <span class="quest-status">(${quest.status})</span><br>`;
            questsHTML += `<div id="${displayId}" class="quest-description" style="display: ${isCollapsed ? 'none' : 'block'};" data-quest-id="${questId}">${quest.description}</div>`;
            questsHTML += `</div><br>`;
        }
    }

    if (!hasActiveQuests) {
        questsHTML += "No active quests found.";
    }

    questsDiv.innerHTML = questsHTML;
}

function toggleQuestDescription(elementId, questId) {
    const descriptionDiv = document.getElementById(elementId);
    if (descriptionDiv) {
        const isCurrentlyHidden = descriptionDiv.style.display === 'none';
        descriptionDiv.style.display = isCurrentlyHidden ? 'block' : 'none';
        localStorage.setItem(`quest-collapsed-${questId}`, isCurrentlyHidden ? 'false' : 'true');
    }
}