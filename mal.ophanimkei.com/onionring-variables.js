// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (è’œ) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
    'https://ophanimkei.com/', 'https://waxwing.neocities.org/', 'https://starbage.neocities.org/', 'https://zeddybear.neocities.org/', 'https://fizzsea.neocities.org/', 'https://sasaja.neocities.org/', 'https://rh0mbus0fruin.neocities.org/', 'https://lugaw.gay/', 'https://strovi.neocities.org/', 'https://vencake.neocities.org/', 'https://orangecarnation.neocities.org/', 'https://laytonloztew.neocities.org/', 'https://eggdev.neocities.org/', 'https://yuentp.neocities.org/', 'https://himawariness.com/', 'https://sanguineroyal.com/', 'https://hellstarares.neocities.org/', 'https://foreverliketh.is/', 'https://dandelionhill.neocities.org/', 'https://nenrikido.neocities.org/', 'https://witoru.neocities.org/', 'https://thenothingmonster.neocities.org/', 'https://lazer-bunny.neocities.org/', 'https://hunipyon.neocities.org/', 'https://aquariumaesthetic.com/', 'https://pencilz.art/', 'https://flowercentral.art', 'https://4disease.neocities.org/', 'https://chartreuse.neocities.org/', 'https://asters-asterisms.neocities.org/', 'https://schelofthesea.neocities.org/', 'https://butt0n-z.neocities.org/', 'https://themachinetranslator.neocities.org/', 'https://thatoddhaystack.neocities.org/', 'https://doffy.neocities.org/', 'https://whiona.me/', 'https://endski.neocities.org/', 'https://andou.gay/', 'https://sodium-amytal.neocities.org/', 'https://pklucky.neocities.org/', 'https://resevil7.neocities.org/', 'https://mitzyrie.neocities.org/', 'https://zipfian-distribution.neocities.org/', 'https://tsuinosora.neocities.org', 'https://nerucom.neocities.org', 'https://aveyond.neocities.org/', 'https://qso404.neocities.org/', 'https://popocorn.neocities.org/', 'https://toweldiary.neocities.org/', 'https://glitchedguts.neocities.org/', 'https://grittycat.neocities.org/', 'https://dustbunnybedroom.neocities.org/', 'https://sunny-cities.neocities.org/', 'https://uranonaut.neocities.org', 'https://nomnomnami.com/', 'https://renyoi.neocities.org/', 'https://sneerful.neocities.org/', 'https://madoxy.neocities.org/', 'https://akuwarai.nekoweb.org/', 'https://digishellvtuber.neocities.org/', 'https://germpills.neocities.org/', 'https://blue-miaou.neocities.org/', 'https://velvetbow.neocities.org', 'https://dantesno.neocities.org/', 'https://omoribr.blogspot.com'];
    
//the name of the ring
var ringName = 'RPG Maker Webring';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'RPGMaker';

//should the widget include a link to an index page?
var useIndex = false;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://ophanimkei.com/you/RPGmaker';

//should the widget include a random button?
var useRandom = false;