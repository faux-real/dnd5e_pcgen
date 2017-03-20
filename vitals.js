var races = [
		"Dwarf",
		"Elf",
		"Halfling",
		"Human",
		"Dragonborn",
		"Gnome",
		"Half-Elf",
		"Half-Orc"];

var subDwarf = [
		"Hill",
		"Mountain"];

var subElf = [
		"High",
		"Wood",
		"Dark"];

var subHalfling = [
		"Lightfoot",
		"Stout"];

var subDragonborn = [
		"Black",
		"Blue",
		"Brass",
		"Bronze",
		"Copper",
		"Gold",
		"Green",
		"Red",
		"Silver",
		"White"];

var subGnome = [
		"Forest",
		"Rock"];

var classes = [
		"Barbarian",
		"Bard",
		"Cleric",
		"Druid",
		"Fighter",
		"Monk",
		"Paladin",
		"Ranger",
		"Rogue",
		"Sorcerer",
		"Warlock",
		"Wizard"];

var subCleric = [
		"Knowledge",
		"Life",
		"Light",
		"Nature",
		"Tempest",
		"Trickery",
		"War"];

var subFighter = [
		"Archery",
		"Defense",
		"Dueling",
		"Protection",
		"Two-Weapon-Fighting",
		"Great-Weapon-Fighting"];

var subSorcerer = [
		"DraconicBloodline",
		"WildMagic"];

var subWarlock = [
		"Archfey",
		"Fiend",
		"GreatOldOne"];

var backgrounds = [
		"Acolyte",
		"Charlatan",
		"Criminal",
		"Entertainer",
		"FolkHero",
		"Hermit",
		"Noble",
		"Outlander",
		"Sage",
		"Sailor",
		"Soldier",
		"Urchin"];

var nhMartialWeapons = [
	"Battleaxe",
	"Warhammer",
	"Longsword",
	"Flail",
	"Morningstar",
	"Rapier",
	"Scimitar",
	"Shortsword",
	"Trident",
	"War Pick",
	"Whip"];

var thMartialWeapons = [
	"Battleaxe",
	"Warhammer",
	"Glaive",
	"Halberd",
	"Longsword",
	"Pike",
	"Trident",
	"Greatclub"];

var lMartialWeapons = [
	"Scimitar",
	"Shortsword",
	"Scimitar",
	"Shortsword",
	"Dagger",
	"Handaxe",
	"Light Hammer",
	"Sickle"];

var simpleWeapons = [
	"Club",
	"Dagger",
	"Handaxe",
	"Javelin",
	"Light Hammer",
	"Mace",
	"Quarterstaff",
	"Sickle",
	"Spear"];

var lSimpleWeapons = [
	"Club",
	"Dagger",
	"Handaxe",
	"Light Hammer",
	"Sickle"];

var bardSpells = [
	"Vicious Mockery, Minor Illusion, Cure Wounds(1), Healing Word(1), Detect Magic(1), Sleep(1)",
	"Light, Minor Illusion, Cure Wounds(1), Healing Word(1), Charm Person(1), Sleep(1)",
	"Vicious Mockery, Light, Cure Wounds(1), Healing Word(1), Detect Magic(1), Sleep(1)",
	"Vicious Mockery, Minor Illusion, Cure Wounds(1), Dissonant Whispers(1), Faerie Fire(1), Sleep(1)"];

var knowledgeSpells = [
	"Guidance, Light, Sacred Flame, Command(1), Identify(1), Cure Wounds(1), Bless(1)",
	"Guidance, Light, Sacred Flame, Command(1), Identify(1), Detect Magic(1), Inflict Wounds(1)",
	"Guidance, Light, Sacred Flame, Command(1), Identify(1), Detect Magic(1), Bless(1)",
	"Guidance, Light, Sacred Flame, Command(1), Identify(1), Cure Wounds(1), Inflict Wounds(1)"];

var lifeSpells = [
	"Spare the Dying, Sacred Flame, Light, Bless(1), Cure Wounds(1), Healing Word(1), Detect Magic(1)",
	"Spare the Dying, Sacred Flame, Light, Bless(1), Cure Wounds(1), Bane(1), Guiding Bolt(1)",
	"Spare the Dying, Sacred Flame, Light, Bless(1), Cure Wounds(1), Healing Word(1), Bane(1)",
	"Spare the Dying, Sacred Flame, Light, Bless(1), Cure Wounds(1), Healing Word(1), Guiding Bolt(1)"];

var lightSpells = [
	"Light, Resistance, Sacred Flame, Thaumaturgy, Burning Hands (1), Faerie Fire(1), Bane(1), Guiding Bolt(1)",
	"Light, Resistance, Sacred Flame, Thaumaturgy, Burning Hands (1), Faerie Fire(1), Healing Word(1), Shield of Faith(1)",
	"Light, Resistance, Sacred Flame, Thaumaturgy, Burning Hands (1), Faerie Fire(1), Bane(1), Healing Word(1)",
	"Light, Resistance, Sacred Flame, Thaumaturgy, Burning Hands (1), Faerie Fire(1), Shield of Faith(1), Guiding Bolt(1)"];

var natureSpells = [
	"Shillelagh, Guidance, Mending, Thaumaturgy, Animal Friendship(1), Speak With Animals(1), Bless(1), Healing Word(1)",
	"Shillelagh, Guidance, Mending, Thaumaturgy, Animal Friendship(1), Speak With Animals(1), Guiding Bolt(1), Shield of Faith(1)",
	"Shillelagh, Guidance, Mending, Thaumaturgy, Animal Friendship(1), Speak With Animals(1), Bless(1), Shield of Faith(1)",
	"Shillelagh, Guidance, Mending, Thaumaturgy, Animal Friendship(1), Speak With Animals(1), Bless(1), Guiding Bolt(1)"];

var tempestSpells = [
	"Spare the Dying, Guidance, Mending, Thaumaturgy, Fog Cloud(1), Thunderwave(1), Bless(1), Healing Word(1)",
	"Spare the Dying, Guidance, Mending, Thaumaturgy, Fog Cloud(1), Thunderwave(1), Cure Wounds(1), Guiding Bolt(1)",
	"Spare the Dying, Guidance, Mending, Thaumaturgy, Fog Cloud(1), Thunderwave(1), Cure Wounds(1), Healing Word(1)",
	"Spare the Dying, Guidance, Mending, Thaumaturgy, Fog Cloud(1), Thunderwave(1), Cure Wounds(1), Bless(1)"];

var trickerySpells = [
	"Guidance, Light, Sacred Flame, Charm Person(1), Disguise Self(1), Bane(1), Healing Word(1)",
	"Guidance, Light, Sacred Flame, Charm Person(1), Disguise Self(1), Cure Wounds(1), Bless(1)",
	"Guidance, Light, Sacred Flame, Charm Person(1), Disguise Self(1), Bane(1), Bless(1)",
	"Guidance, Light, Sacred Flame, Charm Person(1), Disguise Self(1), Cure Wounds(1), Healing Word(1)"];

var warSpells = [
	"Spare the Dying, Guidance, Sacred Flame, Divine Favor(1), Shield of Faith(1), Bane(1), Guiding Bolt(1)",
	"Spare the Dying, Guidance, Sacred Flame, Divine Favor(1), Shield of Faith(1), Cure Wounds(1), Healing Word(1)",
	"Spare the Dying, Guidance, Sacred Flame, Divine Favor(1), Shield of Faith(1), Bane(1), Guiding Bolt(1)",
	"Spare the Dying, Guidance, Sacred Flame, Divine Favor(1), Shield of Faith(1), Cure Wounds(1), Guiding Bolt(1)"];


var druidSpells = [
	"Druidcraft, Produce Flame, Cure Wounds(1), Charm Person(1), Goodberry(1), Faerie Fire(1)",
	"Druidcraft, Guidance, Entangle(1), Charm Person(1), Goodberry(1), Animal Friendship(1)",
	"Druidcraft, Shillelagh, Cure Wounds(1), Charm Person(1), Longstrider(1), Fog Cloud(1)",
	"Druidcraft, Produce Flame, Cure Wounds(1), Entangle(1), Healing Word(1), Fog Cloud(1)"];

var draconicbloodlineSpells = [
	"Friends, Prestidigitation, Acid Splash, Ray of Frost, Sleep(1), Chromatic Orb(1)",
	"Friends, Dancing Lights, Chill Touch, Ray of Frost, Fog Cloud(1), Chromatic Orb(1)",
	"Acid Splash, Prestidigitation, Fire Bolt, True Strike, Burning Hands(1), Magic Missile(1)",
	"Poison Spray, Prestidigitation, Acid Splash, Ray of Frost, Sleep(1), Ray of Sickness(1)"];

var wildmagicSpells = [
	"Mage Hand, Fire Bolt, Chill Touch, Minor Illusion, Magic Missile(1), Ray of Sickness(1)",
	"Friends, Prestidigitation, Acid Splash, Ray of Frost, Sleep(1), Chromatic Orb(1)",
	"Acid Splash, Chill Touch, Fire Bolt, Shocking Grasp, Burning Hands(1), Chromatic Orb(1)",
	"Poison Spray, Ray of Frost, Fire Bolt, Shocking Grasp, Magic Missile(1), Chromatic Orb(1)"];

var archfeySpells = [
	"Eldritch Blast, Minor Illusion, Sleep(1), Hex(1)",
	"Eldritch Blast, Mage Hand, Faerie Fire(1), Hex(1)",
	"Eldritch Blast, Friends, Sleep(1), Faerie Fire(1)",
	"Eldritch Blast, Minor Illusion, Charm Person(1), Hex(1)"];

var fiendSpells = [
	"Eldritch Blast, Chill Touch, Sleep(1), Hex(1)",
	"Eldritch Blast, Friends, Burning Hands(1), Hex(1)",
	"Eldritch Blast, Friends, Command(1), Hex(1)",
	"Eldritch Blast, Poison Spray, Charm Person(1), Hex(1)"];

var greatoldoneSpells = [
	"Eldritch Blast, Chill Touch, Armor of Agathys(1), Hex(1)",
	"Eldritch Blast, Friends, Dissonant Whispers(1), Hex(1)",
	"Eldritch Blast, Friends, Tasha's Hideous Laughter(1), Hex(1)",
	"Eldritch Blast, Poison Spray, Charm Person(1), Hex(1)"];

var wizardSpells = [
	"Fire Bolt, Mage Hand, Minor Illusion, Grease(1), Color Spray(1), Mage Armor(1), Shield(1), Magic Missile(1), Sleep(1)",
	"Fire Bolt, Ray of Frost, Poison Spray, Burning Hands(1), Color Spray(1), Mage Armor(1), Shield(1), Magic Missile(1), Tasha's Hideous Laughter(1)",
	"Light, Mage Hand, Minor Illusion, Grease(1), Tenser's Floating Disc(1), Charm Person(1), Comprehend Languages(1), Magic Missile(1), Sleep(1)",
	"Fire Bolt, Mage Hand, Message, False Life(1), Silent Image(1), Mage Armor(1), Shield(1), Magic Missile(1), Identify(1)"];