var argv = require('minimist')(process.argv.slice(2));

function RNGeesus (low, high){
		return Math.floor(Math.random() * (high - low +1) + low);
}

function DungeonGoals(value){
experience = "";
switch(value){
	case 1: 
	experience = "Stop the dungeon's mounstrous inhabitatns from raiding the surface world";
	break;
	case 2: 
	experience = "Foil a villain's evil scheme";
	break;
	case 3: 
	experience = "Destroy a magical threat insde the dugeon";
	break;
	case 4: 
	experience = "Acquire treasure";
	break;
	case 5: 
	experience = "Find a particular item for a specific purpose";
	break;
	case 6: 
	experience = "Retrieve a stolen item hidden in the dungeon";
	break;
	case 7: 
	experience = "Find information needed for a special purpose";
	break;
	case 8: 
	experience = "Rescue a captive";
	break;
	case 9: 
	experience = "Discover the fate of a previous adventuring party";
	break;
	case 10: 
	experience = "Find an NPC who disappeared in the area";
	break;
	case 11: 
	experience = "Slay a dragon or some other challenging monster";
	break;
	case 12: 
	experience = "Discover the nature and origin of a strange location or phenomenon";
	break;
	case 13: 
	experience = "Pursue fleeing foes taking refuge in the dungeon";
	break;
	case 14: 
	experience = "Escape from captivity in the dungeon";
	break;
	case 15: 
	experience = "Clear a ruin so it can be rebuilt and reoccupied";
	break;
	case 16: 
	experience = "Discover why a villain is interested in the dungeon";
	break;
	case 17: 
	experience = "Win a bet or complete a rite of passage by surviving in the dungeon for a certain amount of time";
	break;
	case 18: 
	experience = "Parley with a villain	in the dungeon";
	break;
	case 19: 
	experience = "Hide froma  threat outside the dungeon";
	break;
	case 20: 
	experience = DungeonGoals(RNGeesus(1,19)) + DungeonGoals(RNGeesus(1,19));
	break;
	default: experience = "Something didn't go right sorry spin again";
}
	return experience;
}

function WildernessGoals(value){
experience = "";
switch(value){
	case 1: 
	experience = "Locate a dungeon or other site of interest " + DungeonGoals(RNGeesus(1,20));
	break;
	case 2: 
	experience = "Asses the scope of a natural or unnatural disaster";
	break;
	case 3: 
	experience = "Escort an NPC to a destination";
	break;
	case 4: 
	experience = "Arrive at a destination without being seen by the villain's forces";
	break;
	case 5: 
	experience = "Stop monsters from raiding caravans and farms";
	break;
	case 6: 
	experience = "Establish trade with a distant town";
	break;
	case 7: 
	experience = "Protect a caravan travleing to a distant town";
	break;
	case 8: 
	experience = "Map a new land";
	break;
	case 9: 
	experience = "Find a place to establish a colony";
	break;
	case 10: 
	experience = "Find a natural resource";
	break;
	case 11: 
	experience = "Hunt a specific monster";
	break;
	case 12: 
	experience = "Return home from a distant place";
	break;
	case 13: 
	experience = "Obtain information froma  reclusive hermit";
	break;
	case 14: 
	experience = "Find an object that was lost in the wilds";
	break;
	case 15: 
	experience = "Discover the fate of a missing group of explorers";
	break;
	case 16: 
	experience = "Pursue fleeing foes";
	break;
	case 17: 
	experience = "Assess then size of an approaching army";
	break;
	case 18: 
	experience = "Escape the reign of a tyrant";
	break;
	case 19: 
	experience = "Protect a wilderness site from attackers";
	break;
	case 20: 
	experience = WildernessGoals(RNGeesus(1,19)) + WildernessGoals(RNGeesus(1,19));
	break;
	default: experience = "Something didn't go right sorry spin again";
}
	return experience;
}

function OtherGoals(value){
experience = "";
switch(value){
	case 1:
	experience = "Seize control of a fortified location such as a fortress, town, or ship";
	break;
	case 2:
	experience = "Defend a location from attackers";
	break;
	case 3:
	experience = "Retrieve an object from inside a secure location in a settlement. ";
	break;
	case 4:
	experience = "Retrieve an object from inside a secure location in a settlement";
	break;
	case 5:
	experience = "Salvage an object or goods from a lost vessel or caravan";
	break;
	case 6:
	experience = "Break a prisoner out of a jail or prison camp";
	break;
	case 7:
	experience = "Escape froma  a jail or a prison camp";
	break;
	case 8:
	experience = "Successfully travel through an obstacle course to gain recognition or reward.";
	break;
	case 9:
	experience = "Find the source of strange occurrences in a haunted house or other location";
	break;
	case 10:
	experience = "Infiltrate a fortified location";
	break;
	case 11:
	experience = "Interfere with the operation of a business";
	break;
	case 12:
	experience = "Rescue a character, monster, or object from a natural or unnatural disaster";
	break;
	default: experience = "Something didn't go right sorry spin again";
}

	return experience;
}

function Villains(value){
experience = "";
switch(value){
	case 1:
	experience = "Beast or monstrosity with no particular agenda";
	break;
	case 2:
	experience = "Abberration bent on corruption or domination";
	break;
	case 3:
	experience = "Fiend bent on corruption or destruction";
	break;
	case 4:
	experience = "Dragon bent on domination and plunder";
	break;
	case 5:
	experience = "Giant bent on plunder";
	break;
	case 6:
	case 7:
	experience = "Undead with any agenda";
	break;
	case 8:
	experience = "Fey with a myserious goal";
	break;
	case 9:
	case 10:
	experience = "Humanoid cultist";
	break;
	case 11:
	case 12:
	experience = "Humanoid conqueror";
	break;
	case 13:
	experience = "Humanoid seeking revenge";
	break;
	case 14:
	case 15:
	experience = "Humanoid schemer seeking to rule";
	break;
	case 16:
	experience = "Humanoid criminal mastermind";
	break;
	case 17:
	case 18:
	experience = "Huamnoid raider or ravager";
	break;
	case 19:
	experience = "Humanoid under a curse";
	break;
	case 20:
	experience = "Misguided Huamnoid zealot";
	break;
	default: experience = "Something didn't go right sorry spin again";
}

	return experience;
}

function Allies(value){
experience = "";
switch(value){
	case 1:
	experience = "Skilled adventurer";
	break;
	case 2:
	experience = "Inexperienced adventurer";
	break;
	case 3:
	experience = "Enthusiastic commoner";
	break;
	case 4:
	experience = "Soldier";
	break;
	case 5:
	experience = "Priest";
	break;
	case 6:
	experience = "Sage";
	break;
	case 7:
	experience = "Revenge seeker";
	break;
	case 8:
	experience = "Raving lunatic";
	break;
	case 9:
	experience = "Celestial ally";
	break;
	case 10:
	experience = "Fey ally";
	break;
	case 11:
	experience = "Disguised monster";
	break;
	case 12:
	experience = "Villain posing as an ally";
	break;
	
	default: experience = "Something didn't go right sorry spin again";
}

	return experience;
}

function Patrons(value){
experience = "";
switch(value){
	case 1:
	case 2:
	experience = "Retired adventurer";
	break;
	case 3:
	case 4:
	experience = "Local ruler";
	break;
	case 5:
	case 6:
	experience = "Militar officer";
	break;
	case 7:
	case 8:
	experience = "Temple official";
	break;
	case 9:
	case 10:
	experience = "Sage";
	break;
	case 11:
	case 12:
	experience = "Respected elder";
	break;
	case 13:
	experience = "Deity or celestial";
	break;
	case 14:
	experience = "Mysterious fey";
	break;
	case 15:
	experience = "Old friend";
	break;
	case 16:
	experience = "Former teacher";
	break;
	case 17:
	experience = "Parent or other family member";
	break;
	case 18:
	experience = "Desperate commoner";
	break;
	case 19:
	experience = "Embattled merchant";
	break;
	case 20:
	experience = "Villain posing as a patron";
	break;
	
	default: experience = "Something didn't go right sorry spin again";
}

	return experience;
}

function Climax(value){
experience = "";
switch(value){
	case 1:
	experience = "The adventurers confront the main villain and a group of minions in a bloody battle to the finish";
	break;
	case 2:
	experience = "The adventurers chase the villain while dodging obstacles designed to thwart them, leading to a final confrontation in or outside the villain's regfuge.";
	break;
	case 3:
	experience = "The actions of the adventurers or the villain result in a cataclysmic event that the adventurers must escape. ";
	break;
	case 4:
	experience = "The adventurers race tot he site where the villain is bringing a master plan to its conclusion, arriving ust as that plan is about to be completed.";
	break;
	case 5:
	experience = "The villain and two or three lieutenants perfrom separate rites in a large room. The adventurers must disrupt all the rites at the same time. ";
	break;
	case 6:
	experience = "An ally betrays the adventurers as they're about to achieve their goal.";
	break;
	case 7:
	experience = "A portal opens to another plane of existence. Creatures on the other side spill out, forcing the adventurers to close the portal and deal with the villain at the same time. ";
	break;
	case 8:
	experience = "Traps, hazards, or animated objects turn against the adventurers whiel the main villain attacks";
	break;
	case 9:
	experience = "The dungeon begins to collapse while the adventurers face the main villain, who attempts to escape";
	break;
	case 10:
	experience = "A threat more powerful than the adventurers appears, destroys the main villain, and then turns its attention on the characters.";
	break;
	case 11:
	experience = "The adventurers must choose whether to pursue the fleeing main villain or save an NPC they care about or a group of innocents";
	break;
	case 12:
	experience = "The adventurers must discover the amin villain's secret weakness before they can hope to defeat that villain";
	break;
	
	default: experience = "Something didn't go right sorry spin again";
}

	return experience;
}


function generateQuest(area, allies, locale){
	var quest = "Your randomly generated quest is:" + "\n";
	if(area == 1)
		quest += "Dungeon Goals :" + DungeonGoals(RNGeesus(1,20)) + "\n";
	else
		quest += "Wilderness Goals :" + WildernessGoals(RNGeesus(1,20)) + "\n";
	if(locale !== undefined)
		quest += "Location: " + locale + "\n";
	if(allies == 1)
	{
		for(var x =0; x <  RNGeesus(0,2); x++)
		{
			quest += "Ally " + (x+1) + " :" +  Allies(RNGeesus(1,12)) + "\n";
		}
	}
	quest += "Side Goals : " + OtherGoals(RNGeesus(1,12)) +
	 "\n" + "Patron : " + Patrons(RNGeesus(1,20))  + "\n" + 
	 "Villains : " + Villains(RNGeesus(1,20))  + "\n" ;
	return quest;
}



var locationArg, localeArg, allyArg;

if(process.argv[2] !== undefined)
{
	locationArg = process.argv[2]
}

if(process.argv[3] !== undefined)
{
	// number of allies
	allyArg = process.argv[3];
}
if(process.argv[4] !== undefined)
{
	// area for quest to be
	localeArg = process.argv[4];
}
if(argv.help == true){
	console.log("This tool is designed to generate either a single instance or entire quest line frameworks for a Dungeons and Dragons campaign. You can enter a list of towns and the application will then generate a number of quest for that area based on it's size." );
}
else{
	console.log(generateQuest(locationArg, allyArg, localeArg));
}
console.log(argv);