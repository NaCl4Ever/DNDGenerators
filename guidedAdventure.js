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

console.log(DungeonGoals(RNGeesus(1,20)));
console.log(WildernessGoals(RNGeesus(1,20)));