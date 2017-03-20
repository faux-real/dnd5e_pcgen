var acolyteTrait = [
		"I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.",
		"I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
		"I see omens in every event and action. The gods try to speak to us, we just need to listen.",
		"Nothing can shake my optimistic attitude.",
		"I quote (or misquote) sacred texts and proverbs in almost every situation.",
		"I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods",
		"I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me",
		"I've spent so long in the temple that I have little practical experience dealing with people in the outside world."];

var acolyteIdeal = [
		"Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
		"Charity. I always try to help those in need, no matter what the personal cost. (Good)",
		"Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)",
		"Power. I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)",
		"Faith. I trust that my deity will guide my actions, I have faith that if I work hard, things will go well. (Lawful)",
		"Aspiration. I seek to prove myself worthy of my god's favor by matching my actions against his or her teachings. (Any)"];

var acolyteFlaw = [
		"I judge others harshly, and myself even more severely.",
		"I put too much trust in those who wield power within my temple's hierarchy.",
		"My piety sometimes leads me to blindly trust those that profess faith in my god.",
		"I am inflexible in my thinking.",
		"I am suspicious of strangers and expect the worst of them.",
		"Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."];

var charlatanTrait = [
		"I fall in and out of love easily, and am always pursuing someone.",
		"I have a joke for every occasion, especially occasions where humor is inappropriate.",
		"Flattery is my preferred trick for getting what I want.",
		"I'm a born gambler who can't resist taking a risk for a potential payoff.",
		"I lie about almost everything, even when there's no good reason to.",
		"Sarcasm and insults are my weapons of choice.",
		"I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
		"I pocket anything I see that might have some value."];

var charlatanIdeal = [
		"Independence. I am a free spirit— no one tells me what to do. (Chaotic)",
		"Fairness. I never target people who can't afford to lose a few coins. (Lawful)",
		"Charity. I distribute the money I acquire to the people who really need it. (Good)",
		"Creativity. I never run the same con twice. (Chaotic)",
		"Friendship. Material goods come and go. Bonds of friendship last forever. (Good)",
		"Aspiration. I'm determined to make something of myself. (Any)"];

var charlatanFlaw = [
		"I can't resist a pretty face.",
		"I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
		"I'm convinced that no one could ever fool me the way I fool others.",
		"I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
		"I can't resist swindling people who are more powerful than me.",
		"I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."];

var criminalTrait = [
		"I always have a plan for what to do when things go wrong.",
		"I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
		"The first thing I do in a new place is note the locations of everything valuable-or where such things could be hidden.",
		"I would rather make a new friend than a new enemy.",
		"I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
		"I don't pay attention to the risks in a situation. Never tell me the odds.",
		"The best way to get me to do something is to tell me I can't do it.",
		"I blow up at the slightest insult."];

var criminalIdeal = [
		"Honor. I don't steal from others in the trade. (Lawful)",
		"Freedom. Chains are meant to be broken, as are those who would forge them. (Chaotic)",
		"Charity. I steal from the wealthy so that I can help people in need. (Good)",
		"Greed. I will do whatever it takes to become wealthy. (Evil)",
		"People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
		"Redemption. There's a spark of good in everyone. (Good)"];

var criminalFlaw = [
		"When I see something valuable, I can't think about anything but how to steal it.",
		"When faced with a choice between money and my friends, I usually choose the money.",
		"If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
		"I have a “tell” that reveals when I'm lying.",
		"I turn tail and run when things look bad.",
		"An innocent person is in prison for a crime that I committed. I'm okay with that."];

var entertainerTrait = [
		"I know a story relevant to almost every situation.",
		"Whenever I come to a new place, I collect local rumors and spread gossip.",
		"I'm a hopeless romantic, always searching for that 'special someone.'",
		"Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
		"I love a good insult, even one directed at me.",
		"I get bitter if I'm not the center of attention.",
		"I'll settle for nothing less than perfection.",
		"I change my mood or my mind as quickly as I change key in a song."];

var entertainerIdeal = [
		"Beauty. When I perform, I make the world better than it was. (Good)",
		"Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
		"Creativity. The world is in need of new ideas and bold action. (Chaotic)",
		"Greed. I'm only in it for the money and fame. (Evil)",
		"People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)",
		"Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)"];

var entertainerFlaw = [
		"I'll do anything to win fame and renown.",
		"I'm a sucker for a pretty face.",
		"A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
		"I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
		"I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
		"Despite my best efforts, I am unreliable to my friends."];

var folkheroTrait = [
		"I judge people by their actions, not their words.",
		"If someone is in trouble, I'm always ready to lend help.",
		"When I set my mind to something, I follow through no matter what gets in my way.",
		"I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
		"I'm confident in my own abilities and do what I can to instill confidence in others.",
		"Thinking is for other people. I prefer action.",
		"I misuse long words in an attempt to sound smarter.",
		"I get bored easily. When am I going to get on with my destiny?"];

var folkheroIdeal = [
		"Respect. People deserve to be treated with dignity and respect. (Good)",
		"Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)",
		"Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)",
		"Might. If I become strong, I can take what I want—what I deserve. (Evil)",
		"Sincerity. There's no good in pretending to be something I'm not. (Neutral)",
		"Destiny. Nothing and no one can steer me away from my higher calling. (Any)"];

var folkheroFlaw = [
		"The tyrant who rules my land will stop at nothing to see me killed.",
		"I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
		"The people who knew me when I was young know my shameful secret, so I can never go home again.",
		"I have a weakness for the vices of the city, especially hard drink.",
		"Secretly, I believe that things would be better if I were a tyrant lording over the land.",
		"I have trouble trusting in my allies."];

var hermitTrait = [
		"I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
		"I am utterly serene, even in the face of disaster.",
		"The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
		"I feel tremendous empathy for all who suffer.",
		"I'm oblivious to etiquette and social expectations.",
		"I connect everything that happens to me to a grand, cosmic plan.",
		"I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
		"I am working on a grand philosophical theory and love sharing my ideas."];

var hermitIdeal = [
		"Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)",
		"Logic. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)",
		"Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)",
		"Power. Solitude and contemplation are paths toward mystical or magical power. (Evil)",
		"Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral)",
		"Self-Knowledge. If you know yourself, there's nothing left to know. (Any)"];

var hermitFlaw = [
		"Now that I've returned to the world, I enjoy its delights a little too much.",
		"I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
		"I am dogmatic in my thoughts and philosophy.",
		"I let my need to win arguments overshadow friendships and harmony.",
		"I'd risk too much to uncover a lost bit of knowledge.",
		"I like keeping secrets and won't share them with anyone."];

var nobleTrait = [
		"My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
		"The common folk love me for my kindness and generosity.",
		"No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
		"I take great pains to always look my best and follow the latest fashions.",
		"I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
		"Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
		"My favor, once lost, is lost forever.",
		"If you do me an injury, I will crush you, ruin your name, and salt your fields."];

var nobleIdeal = [
		"Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
		"Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
		"Independence. I must prove that I can handle myself without the coddling of my family. (Chaotic)",
		"Power. If I can attain more power, no one will tell me what to do. (Evil)",
		"Family. Blood runs thicker than water. (Any)",
		"Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)",
		"",
		""];

var nobleFlaw = [
		"I secretly believe that everyone is beneath me.",
		"I hide a truly scandalous secret that could ruin my family forever.",
		"I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
		"I have an insatiable desire for carnal pleasures.",
		"In fact, the world does revolve around me.",
		"By my words and actions, I often bring shame to my family."];

var outlanderTrait = [
		"I'm driven by a wanderlust that led me away from home.",
		"I watch over my friends as if they were a litter of newborn pups.",
		"I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
		"I have a lesson for every situation, drawn from observing nature.",
		"I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
		"I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
		"I feel far more comfortable around animals than people.",
		"I was, in fact, raised by wolves."];

var outlanderIdeal = [
		"Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)",
		"Greater Good. It is each person's responsibility to make the most happiness for the whole tribe. (Good)",
		"Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)",
		"Might. The strongest are meant to rule. (Evil)",
		"Nature. The natural world is more important than all the constructs of civilization. (Neutral)",
		"Glory. I must earn glory in battle, for myself and my clan. (Any)"];

var outlanderFlaw = [
		"I am too enamored of ale, wine, and other intoxicants.",
		"There's no room for caution in a life lived to the fullest.",
		"I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
		"I am slow to trust members of other races, tribes, and societies.",
		"Violence is my answer to almost any challenge.",
		"Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."];

var sageTrait = [
		"I use polysyllabic words that convey the impression of great erudition.",
		"I've read every book in the world's greatest libraries—or I like to boast that I have.",
		"I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
		"There's nothing I like more than a good mystery.",
		"I'm willing to listen to every side of an argument before I make my own judgment.",
		"I... speak... slowly... when talking... to idiots, which... almost... everyone... is... compared... to me.",
		"I am horribly, horribly awkward in social situations.",
		"I'm convinced that people are always trying to steal my secrets."];

var sageIdeal = [
		"Knowledge. The path to power and self-improvement is through knowledge. (Neutral)",
		"Beauty. What is beautiful points us beyond itself toward what is true. (Good)",
		"Logic. Emotions must not cloud our logical thinking. (Lawful)",
		"No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)",
		"Power. Knowledge is the path to power and domination. (Evil)",
		"Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)"];

var sageFlaw = [
		"I am easily distracted by the promise of information.",
		"Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
		"Unlocking an ancient mystery is worth the price of a civilization.",
		"I overlook obvious solutions in favor of complicated ones.",
		"I speak without really thinking through my words, invariably insulting others.",
		"I can't keep a secret to save my life, or anyone else's."];

var sailorTrait = [
		"My friends know they can rely on me, no matter what.",
		"I work hard so that I can play hard when the work is done.",
		"I enjoy sailing into new ports and making new friends over a flagon of ale.",
		"I stretch the truth for the sake of a good story.",
		"To me, a tavern brawl is a nice way to get to know a new city.",
		"I never pass up a friendly wager.",
		"My language is as foul as an otyugh nest.",
		"I like a job well done, especially if I can convince someone else to do it."];

var sailorIdeal = [
		"Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
		"Fairness. We all do the work, so we all share in the rewards. (Lawful)",
		"Freedom. The sea is freedom—the freedom to go anywhere and do anything. (Chaotic)",
		"Mastery. I'm a predator, and the other ships on the sea are my prey. (Evil)",
		"People. I'm committed to my crewmates, not to ideals. (Neutral)",
		"Aspiration. Someday I'll own my own ship and chart my own destiny. (Any)"];

var sailorFlaw = [
		"I follow orders, even if I think they're wrong.",
		"I'll say anything to avoid having to do extra work.",
		"Once someone questions my courage, I never back down no matter how dangerous the situation.",
		"Once I start drinking, it's hard for me to stop.",
		"I can't help but pocket loose coins and other trinkets I come across.",
		"My pride will probably lead to my destruction."];

var soldierTrait = [
		"I'm always polite and respectful.",
		"I'm haunted by memories of war. I can't get the images of violence out of my mind.",
		"I've lost too many friends, and I'm slow to make new ones.",
		"I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
		"I can stare down a hell hound without flinching.",
		"I enjoy being strong and like breaking things.",
		"I have a crude sense of humor.",
		"I face problems head-on. A simple, direct solution is the best path to success."];

var soldierIdeal = [
		"Greater Good. Our lot is to lay down our lives in defense of others. (Good)",
		"Responsibility. I do what I must and obey just authority. (Lawful)",
		"Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)",
		"Might. In life as in war, the stronger force wins. (Evil)",
		"Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)",
		"Nation. My city, nation, or people are all that matter. (Any)"];

var soldierFlaw = [
		"The monstrous enemy we faced in battle still leaves me quivering with fear.",
		"I have little respect for anyone who is not a proven warrior.",
		"I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.",
		"My hatred of my enemies is blind and unreasoning.",
		"I obey the law, even if the law causes misery.",
		"I'd rather eat my armor than admit when I'm wrong."];

var urchinTrait = [
		"I hide scraps of food and trinkets away in my pockets.",
		"I ask a lot of questions.",
		"I like to squeeze into small places where no one else can get to me.",
		"I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.",
		"I eat like a pig and have bad manners.",
		"I think anyone who's nice to me is hiding evil intent.",
		"I don't like to bathe.",
		"I bluntly say what other people are hinting at or hiding."];

var urchinIdeal = [
		"Respect. All people, rich or poor, deserve respect. (Good)",
		"Community. We have to take care of each other, because no one else is going to do it. (Lawful)",
		"Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)",
		"Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)",
		"People. I help the people who help me—that's what keeps us alive. (Neutral)",
		"Aspiration. I'm going to prove that I'm worthy of a better life."];

var urchinFlaw = [
		"If I'm outnumbered, I will run away from a fight.",
		"Gold seems like a lot of money to me, and I'll do just about anything for more of it.",
		"I will never fully trust anyone other than myself.",
		"I'd rather kill someone in their sleep than fight fair.",
		"It's not stealing if I need it more than someone else.",
		"People who can't take care of themselves get what they deserve."];

var generalBadStuff = [
	"is afriad of magic",
	"is acrophobic",
	"is claustrophobic",
	"is afraid of the dark",
	"is necrophobic",
	"has a small bladder",
	"always whispers",
	"makes sound effects",
	"is in love with another party member",
	"has all ready heard every story",
	"cannot sleep alone",
	"makes bad puns during battle",
	"takes credit for everything",
	"can't remember names- makes up replacements instead",
	"interprets everything as an innuendo",
	"is terrified of horses",
	"thinks they are the only funny person in the party",
	"thinks fights are parties",
	"is the bastard child of a noble",
	"thinks the other party members are constructs",
	"wants to try cannibalism",
	"believes they are an orphaned familar",
	"totally has a 'dark secret'",
	"is bipolar",
	"hates killing people",
	"interprets everything as unlucky",
	"doesn't fight opponents of the opposite gender",
	"is completely reckless",
	"makes overcomplicated plans",
	"has a short attention span"];

barbarianBadStuff = [
	"doesn't believe in magic",
	"is a lumberjack",
	"believes they use magic in every attack",
	"thinks they are a god",
	"failed out of wizarding school",
	"was kicked out of their clan",
	"stopped using spells after they killed their instructor with one"];

bardBadStuff = [
	"believes they are the most powerful spellcaster",
	"is in the coolest band",
	"believes they are living in one of their own songs",
	"is really a terrible musician",
	"failed out of wizarding school",
	"was kicked out of their band",
	"believes their instrument is a god"];

clericBadStuff = [
	"believes they are the most powerful spellcaster",
	"can't cast spells with others watching",
	"recently changed patrons",
	"used to be a paladin"];

druidBadStuff = [
	"hates loud noises",
	"believes they are the most powerful spellcaster",
	"can't cast spells with others watching",
	"thinks they are a god",
	"failed out of wizarding school",
	"was kicked out of their clan"];

fighterBadStuff = [
	"doesn't believe in magic",
	"believes they use magic in every attack",
	"failed out of wizarding school",
	"was kicked out of their clan",
	"used to be a paladin",
	"stopped using spells after they killed their instructor with one",
	"only believes in honorable duels",
	"worships their weapon as a diety"];

monkBadStuff = [
	"doesn't believe in magic",
	"believes they use magic in every attack",
	"thinks they are a god",
	"used to be a paladin",
	"only believes in honorable duels",
	"will not stop talking about the benefits of meditation"];

paladinBadStuff = [
	"believes they use magic in every attack",
	"stopped using spells after they killed their instructor with one",
	"only believes in honorable duels",
	"recently changed patrons",
	"worships their weapon as a diety"];

rangerBadStuff = [
	"hates loud noises",
	"is a hanzo main",
	"failed out of wizarding school"];

rogueBadStuff = [
	"doesn't believe in magic",
	"believes they use magic in every attack",
	"is terrified of locks",
	"failed out of wizarding school"];

sorcererBadStuff = [
	"is a pyromaniac",
	"believes they are the most powerful spellcaster",
	"can't cast spells with others watching",
	"thinks they are a god",
	"is the only one who really uses magic- everyone else fakes",
	"recently changed patrons"];

warlockBadStuff = [
	"is a pyromaniac",
	"believes they are the most powerful spellcaster",
	"can't cast spells with others watching"];

wizardBadStuff = [
	"is a pyromaniac",
	"believes they are the most powerful spellcaster",
	"can't cast spells with others watching",
	"is the only one who really uses magic- everyone else fakes"];

strBadStuff = [
	"has a superiority complex",
	"has a napoleon complex",
	"is passive-aggressive",
	"has a weak back"];

dexBadStuff = [
	"wears glasses",
	"can only whisper after an attempted hanging",
	"is recovering from a massive hangover",
	"has arthritis",
	"has a peg leg"];

conBadStuff = [
	"is narcoleptic",
	"has a low pain threshold",
	"has a weak stomach",
	"is hemophobic"];

intBadStuff = [
	"is illiterate",
	"speaks in third person",
	"has trouble coming up with original ideas",
	"steals other people's ideas",
	"often misuses words"];

wisBadStuff = [
	"cannot see well in bright light",
	"has red-white color blindness",
	"can't tell the difference between the living and undead",
	"is incapable of lying",
	"does not experience fear"];

chaBadStuff = [
	"narrates their thoughts",
	"has terrible body odor",
	"has deep scars"];