var nRace;
var nClass;
var nBackground;
var weapon;
var str;
var dex;
var con;
var ont;
var wis;
var cha;
var vlass;

function saveStuff(){
	nRace = document.getElementById("nRace").value - 1;
	nClass = document.getElementById("nClass").value - 1;
	nBackground = document.getElementById("nBackground").value - 1;
	str = document.getElementById("str").value;
	dex = document.getElementById("dex").value;
	con = document.getElementById("con").value;
	ont = document.getElementById("int").value;
	wis = document.getElementById("wis").value;
	cha = document.getElementById("cha").value;
	//console.log("Stuff saved:" + nRace + " "
	//							+ nClass + " "
	//							+ nBackground + " "
	//							+ str + " "
	//							+ dex + " "
	//							+ con + " "
	//							+ ont + " "
	//							+ wis + " "
	//							+ cha + " ")
}

saveStuff();

function diceRoll(sides){
	return Math.floor(Math.random() * sides);
}

function rollD6(){
	var total = 0;
	for(i=0;i<3;i++){
		total += diceRoll(6) + 1;
	}
	return total;
}

function fightingStyle(coolness){
	var styles = ["dw", "sb", "sw"];
	var style = styles[diceRoll(3)];
	var dwList = lSimpleWeapons;
	var sbList = simpleWeapons;
	var swList = simpleWeapons;
	switch(vlass){
		case "Bard":
			while(style == "sb")
				style = styles[diceRoll(3)];
			swList.push("Longsword", "Rapier", "Shortsword");
			break;
		case "Cleric":
			if(coolness == ("Tempest"))
				coolness = "martial";
			if(coolness == ("War"))
				coolness = "martial";
			else if(coolness == "Trickery")
				style = "dw";
			break;
		case "Druid":
			swList.push("Scimitar");
			sbList.push("Scimitar");
			break;
		case "Fighter":
			switch(coolness){
				case "Archery":
					if(style != styles[2])
						style = styles[2];
					var weapons = ["Crossbow", "Shortbow"];
					var weapon = weapons[diceRoll(2)];
					console.log(weapon)
					break;
				case "Defense":
					coolness = "martial";
					break;
				case "Dueling":
					while(style == "dw")
						style = styles[diceRoll(3)];
					coolness = "martial";
					break;
				case "Protection":
					style = "sb";
					coolness = "martial";
					break;
				case "Two-Weapon-Fighting":
					style = "dw";
					coolness = "martial"
					break;
				case "Great-Weapon-Fighting":
					var weapon = thMartialWeapons[diceRoll(8)];
					console.log(weapon)
					break;
			}
			break;
		case "Monk":
			if(style != styles[2])
				style = styles[2];
			swList.push("Shortsword");
			break;
		case "Ranger":
			if(style != styles[2])
				style = styles[2];
			var weapons = ["Crossbow", "Shortbow"];
			var weapon = weapons[diceRoll(2)];
			console.log(weapon)
			break;
		case "Rogue":
			while(style == "sb")
				style = styles[diceRoll(3)];
			swList.push("Longsword", "Rapier", "Shortsword");
			break;
		case "Warlock":
			while(style == "sb")
				style = styles[diceRoll(3)];
			break;
	}
	if(coolness == "martial"){
		switch(style){
			case "dw":
				console.log(lMartialWeapons[diceRoll(8)] + " and " + lMartialWeapons[diceRoll(8)]);
				break;
			case "sb":
				console.log(nhMartialWeapons[diceRoll(8)] + " and a Shield");
				break;
			case "sw":
				console.log(nhMartialWeapons[diceRoll(3)]);
				break;
		}
	}
	else{
		switch(style){
			case "dw":
				console.log(dwList[diceRoll(dwList.length)] + " and " + dwList[diceRoll(dwList.length)])
				break;
			case "sb":
				console.log(sbList[diceRoll(sbList.length)] + " and a Shield");
				break;
			case "sw":
				console.log(swList[diceRoll(swList.length)]);
				break;
		}
	}
}

function armor(types){
	if(types != 0)
		var worn = diceRoll(types) + 1;
	else
		return "No Armor";
	switch(worn){
		case 1:
			return "Leather Armor";
			break;
		case 2:
			return "Hide Armor";
			break;
		case 3:
			return "Chain Mail";
			break;
	}
}

function makeCharacter(){
	console.log("~~~~~~~~~~");
	console.log("\n");
	var race = races[nRace];
	var subrace;
	switch(race){
		case "Dwarf":
			subRace = subDwarf[diceRoll(2)];
			break;
		case "Elf":
			subRace = subElf[diceRoll(3)];
			break;
		case "Halfling":
			subRace = subHalfling[diceRoll(2)];
			break;
		case "Human":
			subRace = "";
			break;
		case "Dragonborn":
			subRace = subDragonborn[diceRoll(10)];
			break;
		case "Gnome":
			subRace = subGnome[diceRoll(2)];
			break;
		case "Half-Elf":
			subRace = "";
			break;
		case "Half-Orc":
			subRace = "";
			break;
	}
	console.log(subRace + " " + race);

	var gender = ["male", "female"];
	
	vlass = classes[nClass];
	console.log(vlass);
	switch(vlass){
		case "Barbarian":
			fightingStyle("martial");
			console.log(armor(2));
			break;
		case "Bard":
			fightingStyle();
			console.log(armor(1));
			console.log(bardSpells[diceRoll(4)]);
			break;
		case "Cleric":
			var domain = subCleric[diceRoll(7)];
			console.log(domain);
			fightingStyle(domain);
			if(domain == "Life" || domain == "Tempest" || domain == "War")
				console.log(armor(3));
			else
				console.log(armor(2));
			var spells = domain.toLowerCase() + "Spells[" + diceRoll(4) + "]";
			console.log(eval(spells));
			break;
		case "Druid":
			fightingStyle();
			console.log(armor(2));
			console.log(druidSpells[diceRoll(4)]);
			break;
		case "Fighter":
			if(race != "Gnome" && race != "Halfling")
				var style = subFighter[diceRoll(6)];
			else
				var style = subFighter[diceRoll(5)];
			console.log(style);
			fightingStyle(style);
			console.log(armor(3));
			break;
		case "Monk":
			fightingStyle();
			console.log(armor(0));
			break;
		case "Paladin":
			fightingStyle("martial");
			console.log(armor(3));
			break;
		case "Ranger":
			fightingStyle("martial");
			console.log(armor(2));
			break;
		case "Rogue":
			fightingStyle();
			console.log(armor(1));
			break;
		case "Sorcerer":
			var origin = subSorcerer[diceRoll(2)];
			console.log(origin);
			var weapons = ["Quarterstaff", "Quarterstaff", "Dagger and Dagger"];
			var weapon = weapons[diceRoll(3)];
			console.log(armor(0));
			var spells = origin.toLowerCase() + "Spells[" + diceRoll(4) + "]";
			console.log(eval(spells));
			break;
		case "Warlock":
			var archetype = subWarlock[diceRoll(3)];
			console.log(archetype);
			fightingStyle();
			console.log(armor(1));
			var spells = archetype.toLowerCase() + "Spells[" + diceRoll(4) + "]"
			console.log(eval(spells));
			break;
		case "Wizard":
			var weapons = ["Quarterstaff", "Quarterstaff", "Quarterstaff", "Dagger and Dagger"];
			var weapon = weapons[diceRoll(4)];
			console.log(armor(0));
			console.log(wizardSpells[diceRoll(4)]);
			break;
	}
	
	var background = backgrounds[nBackground];
	console.log(background);
	var trait = background.toLowerCase() + "Trait[" + diceRoll(8) + "]";
	console.log(eval(trait));
	var ideal = background.toLowerCase() + "Ideal[" + diceRoll(6) + "]";
	console.log(eval(ideal));
	var flaw = background.toLowerCase() + "Flaw[" + diceRoll(6) + "]";
	console.log(eval(flaw));
	
	var badStuff = [];
	badStuff.push.apply(badStuff,generalBadStuff);
	var classStuff = eval(vlass.toLowerCase() + "BadStuff");
	badStuff.push.apply(badStuff,classStuff);
	var funNumber = 1;
	var funNumberS = [];
	if(str > 14)
		funNumber++;
	else if(str < 10)
		badStuff.push.apply(badStuff,strBadStuff);
	if(dex > 14)
		funNumber++;
	else if(dex < 10)
		badStuff.push.apply(badStuff,dexBadStuff);
	if(con > 14)
		funNumber++;
	else if(con < 10)
		badStuff.push.apply(badStuff,conBadStuff);
	if(ont > 14)
		funNumber++;
	else if(ont < 10)
		badStuff.push.apply(badStuff,intBadStuff);
	if(wis > 14)
		funNumber++;
	else if(wis < 10)
		badStuff.push.apply(badStuff,wisBadStuff);
	if(cha > 14)
		funNumber++;
	else if(cha < 10)
		badStuff.push.apply(badStuff,chaBadStuff);
	
	for(i=0;i<funNumber;i++){
		var newNumber = -1;
		while(funNumberS.indexOf(newNumber) > -1 || newNumber == -1){
			newNumber = diceRoll(badStuff.length);
		}
		if(newNumber != -1)
			funNumberS.push(newNumber);
	}
	
	var badStuffS = [];
	for(i=0;i<funNumberS.length;i++)
		badStuffS.push(badStuff[funNumberS[i]]);
	
	for(i=0;i<funNumberS.length;i++)
		console.log(badStuffS[i]);
	
	
	console.log(
		"STR " + str + 
		" | DEX " + dex + 
		" | CON " + con + 
		" | INT " + ont + 
		" | WIS " + wis +
		" | CHA " + cha );
	
	for(i=badStuff.length;i>0;i--)
		badStuff.pop();
}

function randomCharacter(){
	console.log("\n");
	console.log("~~~~~~~~~~");
	nRace = diceRoll(8);
	nClass = diceRoll(12);
	nBackground = diceRoll(12);
	str = rollD6();
	dex = rollD6();
	con = rollD6();
	ont = rollD6();
	wis = rollD6();
	cha = rollD6();
	console.log("Stats rolled:" + nRace + " "
								+ nClass + " "
								+ nBackground + " "
								+ str + " "
								+ dex + " "
								+ con + " "
								+ ont + " "
								+ wis + " "
								+ cha + " ")
	makeCharacter();
	saveStuff();
}