

//gramatical pronoun references
function getPronounReference() {
	//alert("Current playerInfo: " + JSON.stringify(playerInfo));
    switch (playerInfo.pronouns) {
        case "n":
            return "they";
        case "f":
            return "she";
        case "m":
            return "he";
        case "o":
            return "they"; // Default for other
        default:
            return "they"; // Default if not set
    }
}

function getPossessivePronoun() {
    switch (playerInfo.pronouns) {
        case "n":
            return "their";
        case "f":
            return "her";
        case "m":
            return "his";
        case "o":
            return "their"; // Default for other
        default:
            return "their"; // Default if not set
    }
}

function getObjectivePronoun() {
    switch (playerInfo.pronouns) {
        case "n":
            return "them";
        case "f":
            return "her";
        case "m":
            return "him";
        case "o":
            return "them"; // Default for other
        default:
            return "them"; // Default if not set
    }
}


function saveGame() {
    const saveData = {
        playerInfo: playerInfo,
        playerStats: playerStats,
        calculatedStats: calculatedStats,
        equipment: equipment,
        inventory: inventory,
        quests: quests
    };
    localStorage.setItem('gameSave', JSON.stringify(saveData));
    console.log('Game saved!');
}

function loadGame() {
    const savedGame = localStorage.getItem('gameSave');
    if (savedGame) {
        const parsedSave = JSON.parse(savedGame);
        playerInfo = parsedSave.playerInfo;
        playerStats = parsedSave.playerStats;
        calculatedStats = parsedSave.calculatedStats;
        equipment = parsedSave.equipment;
        inventory = parsedSave.inventory;
        quests = parsedSave.quests;
        console.log('Game loaded!');
    } else {
        console.log('No saved game found.');
    }
}

function setPlayerName() {
    const nameInput = document.getElementById('playerName');
    const surnameInput = document.getElementById('playerSurname');
    const pronounsSelect = document.getElementById('playerPronouns');

    const sanitizedName = nameInput.value.replace(/[^a-zA-Z]/g, '').trim();
    const sanitizedSurname = surnameInput.value.replace(/[^a-zA-Z]/g, '').trim();

    if (playerInfo) {
        if (sanitizedName === "" || sanitizedSurname === "") {
            alert("Please enter both a name and a surname.");
        } else {
            playerInfo.name = sanitizedName;
            playerInfo.surname = sanitizedSurname;
            playerInfo.pronouns = pronounsSelect.value;
	
            console.log(`Player name set to: ${playerInfo.name} ${playerInfo.surname}, Pronouns: ${playerInfo.pronouns}`);
            //alert(`Name set to: ${playerInfo.name} ${playerInfo.surname}, Pronouns: ${playerInfo.pronouns}`);
            updateStatsDisplay();
            nameInput.value = sanitizedName;
            surnameInput.value = sanitizedSurname;
        }
    } else {
        console.error('playerInfo object is not initialized.');
        alert('Error: Could not set information.');
    }
}

function resetSave() {
    if (confirm("Are you sure you want to reset your save? This will erase all progress.")) {
        localStorage.removeItem('gameSave');
        alert("Save data has been reset. Please reload the page for the changes to take full effect.");
        console.log("Game save reset.");
    }
}