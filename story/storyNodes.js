// storyNodes.js
        const storyNodes = {
            "debug": { //main page
                text: () => `This is a debug page that shows all available options. The adventuerer uses the pronouns ${getPronounReference()}, <img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-novice.png''><img src='images/items/redpotion.gif' style='width: 20px; height: 20px; vertical-align: middle;'>`,
                options: [
  		{text: `become male`,nextId: "debug",effects: {gender: "male",}},
  		{text: "Become female",nextId: "debug",effects: {gender: "female",}},
  		{text: `Become novice`,nextId: "debug",effects: {job: "novice",costume: "novice",}},
  		{text: "Become test 1 ",nextId: "debug",requirements: {notJob: "knight"},effects: {job: "knight",costume: "dragonknight",}},
		{text: "go to items test",nextId: "itemstest"},
		{text: "go to costume test",nextId: "costumetest"},
		{text: "go to hair test",nextId: "hairtest"},
		{text: "go to HP/MP test",nextId: "HPMPTest"},
		{text: "Must be man.",nextId: "debug",requirements: {gender: "male"}},
		{text: "Must be woman.",nextId: "debug",requirements: {gender: "female"}},
		{text: "Attempt a Knightly Deed",nextId: "debug",requirements: {job: "knight"}},
		{text: "Requires stuff",nextId: "debug",requirements: {STR: 6,VIT: 6},inventoryRequired: 'Potion',},
		{text: "Requires Potion in inventory",nextId: "debug",inventoryRequired: 'Potion',},
		{text: "Has a stat requirement",nextId: "debug",requirements: {STR: 6, VIT: 6},	},
		{text: "Try to open the mysterious door",nextId: "debug",inventoryRequired: 'Key',consumeInventory: false },
		{text: "remove 2 STR",nextId: "debug",effects: {STR: -2}},
		{text: "gives 1 in every stat",nextId: "debug",effects: {STR: +1,AGI: +1,VIT: +1,INT: +1,DEX: +1,LUK: +1}},	
		{text: "gives 1 stat points",nextId: "debug",effects: {availableStatPoints: +2}},
		{text: "full heal",nextId: "debug",effects: {hp:999,mp:999}},
		{text: "give 10 EXP",nextId: "debug",effects: {baseEXP:10}},
		{text: "give 10 Job EXP",nextId: "debug",effects: {jobEXP:10}},
		{text: "get 10 zenny",nextId: "debug",effects: {zenny:10}},
		{text: "lose 10 zenny",nextId: "debug",effects: {zenny:-10}},
		{text: "requires 100 zenny",nextId: "debug",requirements: {zenny:100},effects: {zenny:-100}},
		{text: "go on quest",nextId: "village_start", requirements: {notQuest: "firstQuest"}},
		{text: "go to a random option",randomNextIds: ["random1", "random2"]},
		{text: `button with variable ${getPossessivePronoun()}`,randomNextIds: ["debug"]},
		{text: "button only active with quest",requirements: {quest: "firstQuest"},nextId: "debug"},
		{text: "learn fireball",nextId: "debug",effects: { "SKILL": "Fireball" }},
		{text: "learn sword mastery",nextId: "debug",effects: { "SKILL": "Sword Mastery" }},
		{text: "unlearn skill",nextId: "debug",effects: { "REMOVE_SKILL": "Fireball" }},
		{text: "make a friend",nextId: "debug",effects: { "FRIEND": "Bob" },requirements: { notFriend: "Bob" }},
		{text: "make another friend",nextId: "debug",effects: { "FRIEND": "Alice" },requirements: { notFriend: "Alice" }},
		{text: "requires Alice",nextId: "debug",requirements: {friend: "Alice"}},
		]
	},
	"random1":{
		 text: "random1",
                options: [
			{text: "go back to debug main menu",nextId: "debug"},
		]
	},
	"random2":{
		 text: "random2",
                options: [
			{text: "go back to debug main menu",nextId: "debug"},
		]
	},
            "itemstest": { 
                text: `items test `,
                options: [
                    {text: "gain Leather Cap",nextId: "itemstest",effects: {EQUIPMENT: "Leather Cap",}},
                    {text: "gain helmet",nextId: "itemstest",effects: {EQUIPMENT: "Helmet",}},
                    {text: "gain Rusty Sword",nextId: "itemstest",effects: {EQUIPMENT: "Rusty Sword",}},
                    {text: "gain Blade",nextId: "itemstest",effects: {EQUIPMENT: "Blade",}},
                    {text: "gain Broadsword",nextId: "itemstest",effects: {EQUIPMENT: "Broadsword",}},
                    {text: "gain Small shield",nextId: "itemstest",effects: {EQUIPMENT: "Small Shield",}},
                    {text: "gain potion",nextId: "itemstest",effects: {ITEM: 'Potion'}},
                    {text: "gain key",nextId: "itemstest",effects: {ITEM: 'Key'}},
                    {text: "gain SuperPotion",nextId: "itemstest",effects: {ITEM: 'SuperPotion'}},
                    {text: "gain Silver Ring",nextId: "itemstest",effects: {ITEM: 'Silver Ring'}},
                    {text: "gain Gold Ring",nextId: "itemstest",effects: {ITEM: 'Gold Ring'}},
			{text: "gain Rock",nextId: "itemstest",effects: {ITEM: 'Rock'}},
                    {text: "go back to debug main menu",nextId: "debug"},
		]
            },

    "village_start": {
        text: `You arrive at the quiet village. The elder approaches you, looking concerned. You only have ${playerStats.STR} strength.`,
        options: [
            {
                text: "Ask the elder what's wrong.",
            	nextNodes: {
                	"playerStats.STR < 8": "elder_talk",
                	"playerStats.STR > 8": "elder_talk2",
                	"true": "elder_talk_default" // Default case
            	}
            },
            {
                text: "Explore the village first.",
                nextId: "village_explore"
            }
        ]
    },
"elder_talk": {
    text: "You are not strong enough. Come back when you are stronger. ",
    options: [
        {
            text: "Okay, I'll go train",
            nextId: "village_start",
        },
        { text: "I'm busy.", nextId: "village_start" }
    ]
},
"elder_talk2": {
    text: "\"Welcome, traveler,\" the elder says, his voice heavy. \"Our sacred artifact has been stolen...\"",
    options: [
        {
            text: "Yes, I will help.",
            nextId: "elder_accept",
            quest: {
                action: "startNew",
                questId: "firstQuest",
		name: "The first steps",
                description: "Recover the stolen artifact." // Initial description
            }
        },
        { text: "I'm busy.", nextId: "village_start" }
    ]
},
"elder_talk_neutral": {
    text: "You are strong",
    options: [
        {
            text: "Yes, I will help.",
            nextId: "elder_accept",
            quest: {
                action: "startNew",
                questId: "firstQuest",
		name: "The first steps",
                description: "Recover the stolen artifact." // Initial description
            }
        },
        { text: "I'm busy.", nextId: "village_start" }
    ]
},
"elder_accept": {
    text: "The elder nods gratefully. \"The forest lies to the west. Be careful, traveler.\"",
    options: [
        {
            text: "Head west into the forest.",
            nextId: "find_artifact",
            quest: {
                action: "updateDescription",
                questId: "firstQuest",
                description: "Search the forest for the artifact." // Updated description
            }
        }
    ]
},
"find_artifact": {
    text: "You find the artifact!",
    options: [
        {
            text: "Take it.",
            nextId: "artifact_acquired",
            quest: {
                action: "updateDescription",
                questId: "firstQuest",
                description: "Return the artifact to the elder." // Updated description
            }
        }
    ]
},
"artifact_acquired": {
    text: "The artifact hums.",
    options: [
        {
            text: "Return to elder.",
            nextId: "elder_return_artifact",
            quest: {
                action: "updateDescription",
                questId: "firstQuest",
                description: "you have returned the artifact to the elder" // Updated description
            }
	}
    ]
},
"elder_return_artifact": {
    text: "Elder is happy!",
    options: [
        {
            text: "Claim reward.",
            nextId: "quest_complete",
            quest: {
                action: "complete",
                questId: "firstQuest",
		description: "You successfully retrieved the artifact and saved the day",
            }
        }
    ]
},
"quest_complete": {
    text: "You get gold!",
    options: [
        {
            text: "The end.",
            nextId: "debug"
        }
    ]
},
    "village_explore": {
        text: "You take a look around the village. It seems peaceful, though a few villagers look worried.",
        options: [
            {
                text: "Go talk to the elder.",
                nextId: "elder_talk"
            },
            {
                text: "Leave the village.",
                nextId: "debug" 
            }
        ]
    },
    "village_end": {
        text: "You bid farewell to the grateful villagers.",
        options: [
            {
                text: "Continue your adventure.",
                nextId: "debug"
            }
        ]
    },
    "sneak_attempt": {
        text: "You try to move silently past the beasts...",
        options: [
            {
                text: "Success (lucky!).",
                nextId: "artifact_acquired",
                // No combat
                quest: {
                    action: "updateProgress",
                    questId: "firstQuest",
                    objective: "artifact",
                    value: true
                }
            },
            {
                text: "Failure! The beasts attack!",
                nextId: "artifact_acquired", // Or a combat node
                combat: ["forest_beast", "forest_beast"],
                quest: {
                    action: "updateProgress",
                    questId: "firstQuest",
                    objective: "artifact",
                    value: true
                }
            }
        ]
    },


            "HPMPTest": { 
                text: "This tests HP and MP bars",
                options: [
			{text: "Gain 5 MP",nextId: "HPMPTest",effects: {mp: 5,}},
			{text: "Use 4 MP",nextId: "HPMPTest",effects: {mp: -4,}},
			{text: "Gain 5 HP",nextId: "HPMPTest",effects: {hp: 5,}},
			{text: "Take 3 damage",nextId: "HPMPTest",effects: {hp: -3,}},
			{text: "go back to debug main menu",nextId: "debug",},
			]
            },
	"costumetest": { 
                text: "costume test",
                options: [
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-abysschaser.png''>`, nextId: "costumetest", effects: {costume: "abysschaser"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-acolyte.png''>`, nextId: "costumetest", effects: {costume: "acolyte"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-alchemist.png''>`, nextId: "costumetest", effects: {costume: "alchemist"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-archbishop.png''>`, nextId: "costumetest", effects: {costume: "archbishop"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-archbishopAlt.png''>`, nextId: "costumetest", effects: {costume: "archbishopAlt"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-archer.png''>`, nextId: "costumetest", effects: {costume: "archer"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-archmage.png''>`, nextId: "costumetest", effects: {costume: "archmage"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-assassin.png''>`, nextId: "costumetest", effects: {costume: "assassin"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-assassincross.png''>`, nextId: "costumetest", effects: {costume: "assassincross"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-biochemist.png''>`, nextId: "costumetest", effects: {costume: "biochemist"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-biolo.png''>`, nextId: "costumetest", effects: {costume: "biolo"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-blacksmith.png''>`, nextId: "costumetest", effects: {costume: "blacksmith"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-cardinal.png''>`, nextId: "costumetest", effects: {costume: "cardinal"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-champion.png''>`, nextId: "costumetest", effects: {costume: "champion"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m-bard" : "f-dancer"}.png''>`, nextId: "costumetest", effects: {costume: "performer"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m-bard" : "f-dancerAlt"}.png''>`, nextId: "costumetest", effects: {costume: "performerAlt"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-dragonknight.png''>`, nextId: "costumetest", effects: {costume: "dragonknight"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-elementalmaster.png''>`, nextId: "costumetest", effects: {costume: "elementalmaster"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-genetic.png''>`, nextId: "costumetest", effects: {costume: "genetic"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-geneticAlt.png''>`, nextId: "costumetest", effects: {costume: "geneticAlt"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-GM.png''>`, nextId: "costumetest", effects: {costume: "GM"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-guillotinecross.png''>`, nextId: "costumetest", effects: {costume: "guillotinecross"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-guillotinecrossAlt.png''>`, nextId: "costumetest", effects: {costume: "guillotinecrossAlt"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-gunslinger.png''>`, nextId: "costumetest", effects: {costume: "gunslinger"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m-minstrel" : "f-gypsy"}.png''>`, nextId: "costumetest", effects: {costume: "entertainer"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-hanbok.png''>`, nextId: "costumetest", effects: {costume: "hanbok"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-highpriest.png''>`, nextId: "costumetest", effects: {costume: "highpriest"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-highwizard.png''>`, nextId: "costumetest", effects: {costume: "highwizard"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-hunter.png''>`, nextId: "costumetest", effects: {costume: "hunter"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-hypernovice.png''>`, nextID: "costumetest", effects: {costume: "hypernovice"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-imperialguard.png''>`, nextID: "costumetest", effects: {costume: "imperialguard"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-inquisitor.png''>`, nextID: "costumetest", effects: {costume: "inquisitor"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-knight.png''>`, nextID: "costumetest", effects: {costume: "knight"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-lordknight.png''>`, nextID: "costumetest", effects: {costume: "lordknight"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-mage.png''>`, nextID: "costumetest", effects: {costume: "mage"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-mastersmith.png''>`, nextID: "costumetest", effects: {costume: "mastersmith"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-mechanic.png''>`, nextID: "costumetest", effects: {costume: "mechanic"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-mechanicAlt.png''>`, nextID: "costumetest", effects: {costume: "mechanicAlt"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-meister.png''>`, nextID: "costumetest", effects: {costume: "meister"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-merchant.png''>`, nextID: "costumetest", effects: {costume: "merchant"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-monk.png''>`, nextID: "costumetest", effects: {costume: "monk"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-nightwatch.png''>`, nextID: "costumetest", effects: {costume: "nightwatch"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-ninja.png''>`, nextID: "costumetest", effects: {costume: "ninja"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-novice.png''>`, nextID: "costumetest", effects: {costume: "novice"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m-kagerou" : "f-oboro"}.png''>`, nextID: "costumetest", effects: {costume: "chunin"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-paladin.png''>`, nextID: "costumetest", effects: {costume: "paladin"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-priest.png''>`, nextID: "costumetest", effects: {costume: "priest"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-ranger.png''>`, nextID: "costumetest", effects: {costume: "ranger"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-rangerAlt.png''>`, nextID: "costumetest", effects: {costume: "rangerAlt"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-rebellion.png''>`, nextID: "costumetest", effects: {costume: "rebellion"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-rogue.png''>`, nextID: "costumetest", effects: {costume: "rogue"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-royalguard.png''>`, nextID: "costumetest", effects: {costume: "royalguard"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-royalguardAlt.png''>`, nextID: "costumetest", effects: {costume: "royalguardAlt"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-runeknight.png''>`, nextID: "costumetest", effects: {costume: "runeknight"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-runeknightAlt.png''>`, nextID: "costumetest", effects: {costume: "runeknightAlt"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-runeknightAlt2.png''>`, nextID: "costumetest", effects: {costume: "runeknightAlt2"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-sage.png''>`, nextID: "costumetest", effects: {costume: "sage"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-santa.png''>`, nextID: "costumetest", effects: {costume: "santa"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-scholar.png''>`, nextID: "costumetest", effects: {costume: "scholar"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-shadowchaser.png''>`, nextID: "costumetest", effects: {costume: "shadowchaser"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-shadowchaserAlt.png''>`, nextID: "costumetest", effects: {costume: "shadowchaserAlt"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-shadowcross.png''>`, nextID: "costumetest", effects: {costume: "shadowcross"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m-shinkiro" : "f-shiranui"}.png''>`, nextID: "costumetest", effects: {costume: "jonin"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-shura.png''>`, nextID: "costumetest", effects: {costume: "shura"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-shuraAlt.png''>`, nextID: "costumetest", effects: {costume: "shuraAlt"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-skyemperor.png''>`, nextID: "costumetest", effects: {costume: "skyemperor"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-sniper.png''>`, nextID: "costumetest", effects: {costume: "sniper"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-sorcerer.png''>`, nextID: "costumetest", effects: {costume: "sorcerer"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-sorcererAlt.png''>`, nextID: "costumetest", effects: {costume: "sorcererAlt"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-soulascetic.png''>`, nextID: "costumetest", effects: {costume: "soulascetic"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-soullinker.png''>`, nextID: "costumetest", effects: {costume: "soullinker"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-soulreaper.png''>`, nextID: "costumetest", effects: {costume: "soulreaper"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-stalker.png''>`, nextID: "costumetest", effects: {costume: "stalker"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-staremperor.png''>`, nextID: "costumetest", effects: {costume: "staremperor"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-starknight.png''>`, nextID: "costumetest", effects: {costume: "starknight"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-summer1.png''>`, nextID: "costumetest", effects: {costume: "summer1"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-summer2.png''>`, nextID: "costumetest", effects: {costume: "summer2"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-supernovice.png''>`, nextID: "costumetest", effects: {costume: "supernovice"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-swordsman.png''>`, nextID: "costumetest", effects: {costume: "swordsman"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-taekwon.png''>`, nextID: "costumetest", effects: {costume: "taekwon"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-thief.png''>`, nextID: "costumetest", effects: {costume: "thief"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m-troubador" : "f-trouvere"}.png''>`, nextID: "costumetest", effects: {costume: "artist"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m-maestro" : "f-wanderer"}.png''>`, nextID: "costumetest", effects: {costume: "thespian"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m-maestroAlt" : "f-wandererAlt"}.png''>`, nextID: "costumetest", effects: {costume: "thespianAlt"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-warlock.png''>`, nextID: "costumetest", effects: {costume: "warlock"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-warlockAlt.png''>`, nextID: "costumetest", effects: {costume: "warlockAlt"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-wedding.png''>`, nextID: "costumetest", effects: {costume: "wedding"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-windhawk.png''>`, nextID: "costumetest", effects: {costume: "windhawk"}},
			{text: () => `<img src='images/body/${playerInfo.gender === "male" ? "m" : "f"}-wizard.png''>`, nextID: "costumetest", effects: {costume: "wizard"}},
  	          	{text: "Become man", nextId: "costumetest", effects: {gender: "male",}},
  	         	{text: "Become woman", nextId: "costumetest", effects: {gender: "female",}},
			{text: "go back to debug main menu",nextId: "debug"},
			]
            },
	"hairtest": {
                text: "hair test <img src='images/heads/${playerInfo.hairStyle}_${playerInfo.hairColor}.png'>",
                options: [
			{text: () => `<img src='images/heads/f_1_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_1"}},
			{text: () => `<img src='images/heads/f_2_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_2"}},
			{text: () => `<img src='images/heads/f_3_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_3"}},
			{text: () => `<img src='images/heads/f_4_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_4"}},
			{text: () => `<img src='images/heads/f_5_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_5"}},
			{text: () => `<img src='images/heads/f_6_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_6"}},
			{text: () => `<img src='images/heads/f_7_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_7"}},
			{text: () => `<img src='images/heads/f_8_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_8"}},
			{text: () => `<img src='images/heads/f_9_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_9"}},
			{text: () => `<img src='images/heads/f_10_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_10"}},
			{text: () => `<img src='images/heads/f_11_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_11"}},
			{text: () => `<img src='images/heads/f_12_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_12"}},
			{text: () => `<img src='images/heads/f_13_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_13"}},
			{text: () => `<img src='images/heads/f_14_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_14"}},
			{text: () => `<img src='images/heads/f_15_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_15"}},
			{text: () => `<img src='images/heads/f_16_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_16"}},
			{text: () => `<img src='images/heads/f_17_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_17"}},
			{text: () => `<img src='images/heads/f_18_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_18"}},
			{text: () => `<img src='images/heads/f_19_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_19"}},
			{text: () => `<img src='images/heads/f_20_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_20"}},
			{text: () => `<img src='images/heads/f_21_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_21"}},
			{text: () => `<img src='images/heads/f_22_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_22"}},
			{text: () => `<img src='images/heads/f_23_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_23"}},
			{text: () => `<img src='images/heads/f_24_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_24"}},
			{text: () => `<img src='images/heads/f_25_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_25"}},
			{text: () => `<img src='images/heads/f_26_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_26"}},
			{text: () => `<img src='images/heads/f_27_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_27"}},
			{text: () => `<img src='images/heads/f_28_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_28"}},
			{text: () => `<img src='images/heads/f_29_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "f_29"}},
			{text: () => `<img src='images/heads/m_1_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_1"}},
			{text: () => `<img src='images/heads/m_2_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_2"}},
			{text: () => `<img src='images/heads/m_3_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_3"}},
			{text: () => `<img src='images/heads/m_4_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_4"}},
			{text: () => `<img src='images/heads/m_5_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_5"}},
			{text: () => `<img src='images/heads/m_6_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_6"}},
			{text: () => `<img src='images/heads/m_7_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_7"}},
			{text: () => `<img src='images/heads/m_8_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_8"}},
			{text: () => `<img src='images/heads/m_9_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_9"}},
			{text: () => `<img src='images/heads/m_10_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_10"}},
			{text: () => `<img src='images/heads/m_11_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_11"}},
			{text: () => `<img src='images/heads/m_12_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_12"}},
			{text: () => `<img src='images/heads/m_13_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_13"}},
			{text: () => `<img src='images/heads/m_14_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_14"}},
			{text: () => `<img src='images/heads/m_15_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_15"}},
			{text: () => `<img src='images/heads/m_16_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_16"}},
			{text: () => `<img src='images/heads/m_17_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_17"}},
			{text: () => `<img src='images/heads/m_18_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_18"}},
			{text: () => `<img src='images/heads/m_19_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_19"}},
			{text: () => `<img src='images/heads/m_20_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_20"}},
			{text: () => `<img src='images/heads/m_21_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_21"}},
			{text: () => `<img src='images/heads/m_22_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_22"}},
			{text: () => `<img src='images/heads/m_23_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_23"}},
			{text: () => `<img src='images/heads/m_24_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_24"}},
			{text: () => `<img src='images/heads/m_25_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_25"}},
			{text: () => `<img src='images/heads/m_26_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_26"}},
			{text: () => `<img src='images/heads/m_27_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_27"}},
			{text: () => `<img src='images/heads/m_28_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_28"}},
			{text: () => `<img src='images/heads/m_29_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_29"}},
			{text: () => `<img src='images/heads/m_30_${playerInfo.hairColor}.png'>`,nextID: "hairtest",effects: {hairStyle: "m_30"}},
			{text: "change hair color to black",nextId: "hairtest",effects: {hairColor: "black"}},
			{text: "change hair color to blue",nextId: "hairtest",effects: {hairColor: "blue"}},
			{text: "change hair color to brown",nextId: "hairtest",effects: {hairColor: "brown"}},
			{text: "change hair color to green",nextId: "hairtest",effects: {hairColor: "green"}},
			{text: "change hair color to purple",nextId: "hairtest",effects: {hairColor: "purple"}},
			{text: "change hair color to red",nextId: "hairtest",effects: {hairColor: "red"}},
			{text: "change hair color to white",nextId: "hairtest",effects: {hairColor: "white"}},
			{text: "change hair color to yellow",nextId: "hairtest",effects: {hairColor: "yellow"}},
			{text: "go back to debug main menu",nextId: "debug"},
			]
            },
        };