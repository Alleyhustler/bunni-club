// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring https://angeleyesprings.neocities.org

//the full URLs of all the sites in the ring
var sites = [
'https://angeleyesprings.neocities.org',
'https://tsunderoid.neocities.org',
'https://idelides.xyz',
'https://lizonline.neocities.org',
'https://amivicky.neocities.org',
'https://allyratworld.com',
'https://cabbagesorter.neocities.org',
'https://lovesick.cafe',
'https://ophanimkei.com',
'https://shydeer.neocities.org',
'https://aquamiki.neocities.org/',
'https://inkcaps.neocities.org/',
'https://caitsith.neocities.org/',
'https://vencake.neocities.org/',
'https://aquariumaesthetic.com/',
'https://husbandoism.life/',
'https://exulansis.neocities.org/',
'https://fujoshi.nekoweb.org/',
'https://www.rinet.biz/',
'https://travelinghealer.teacake.org/',
'https://snowibunni.neocities.org/',
'https://cherie.nekoweb.org/',
'https://ribbondoll.neocities.org/',
'https://kakikudoku.neocities.org',
'https://nenrikido.neocities.org/',
'https://nekonokuni.neocities.org/',
'https://angelhotspot.neocities.org/',
'https://gogogal.online/',
'https://milk-tea.neocities.org/',
'https://ferdvonvestra.neocities.org/',
'https://shuripurin.neocities.org/',
'https://starlitmarmalade.neocities.org/',
'https://melody-nomas.neocities.org/',
'https://dollblooms.neocities.org/',
'https://hunipyon.neocities.org/',
'https://planetaryinfluence.neocities.org/',
'https://abyssbloom.neocities.org/',
'https://rainydaydeer.neocities.org/',
'https://sugarbunniiee.nekoweb.org/',
'https://tsunderetion.neocities.org/',
'https://illomen.neocities.org/',
'https://lambbones.neocities.org/',
'https://rainmirage.art/',
'https://pinkfiremage.neocities.org',
'https://prismatic.pink/',
'https://babycarrot.nekoweb.org/index.html',
'https://lydels.neocities.org/',
'https://cinnamoelle.neocities.org/',
'https://benitengu.neocities.org/',
'https://minonii.neocities.org',
'https://humanfinny.neocities.org/',
'https://angelovin.neocities.org/',
'https://coolsocks.lol/',
'https://gattonero.moe/',
'https://sunfishdreamworld.neocities.org/',
'https://chezimu.neocities.org/',
'https://sterkiherz.neocities.org/',
'https://lorrinsisland.neocities.org/',
'https://milkpowderbun.com/',
'https://moonie.neocities.org',
'https://midosuji.neocities.org/'
];

//the name of the ring
var ringName = 'ShouJosei Café';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'shoujosei-ring';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://angeleyesprings.neocities.org/webring/shoujosei';

//should the widget include a random button?
var useRandom = false;
