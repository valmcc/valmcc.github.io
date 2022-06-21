// import kaboom lib
// import kaboom from "https://unpkg.com/kaboom@next/dist/kaboom.mjs";
import kaboom from "./kaboom.mjs";


// initialize kaboom context
kaboom({
    width:240,
    height: 160,
    scale: 3,
    crisp: true,
    global: true,
    font: 'sink',
    focus: false,
});

let desktop = true;

// Load Sprites
loadSprite("textbox", "textbox.png");
loadSprite("bg", "backdrop/lilroom.png");
loadSprite("fridge", "backdrop/fridge.png", {
    sliceX: 2,
    sliceY: 1,
});
loadSprite("phone","backdrop/phone.png", {
    sliceX: 2,
    sliceY: 1,
})
loadSprite("table","backdrop/table.png")
loadSprite("decisionbox", "decisionbox.png");
loadSprite("interior", "tilemaps/Interiors_free_16x16.png", {
    sliceX: 16,
    sliceY: 89,
});
loadSprite("char","tilemaps/Bob_16x16.png", {
    sliceX: 24,
    sliceY: 14,
})
loadSprite("cat","tilemaps/cat.png", {
    sliceX:4,
    sliceY:1,
    anims: {
        fat_0: {from: 0, to: 0},
        fat_1: {from: 1, to: 1},
        fat_2: {from: 2, to: 2},
        fat_3: {from: 3, to: 3},
    }});
loadSprite("cat_maybe","tilemaps/cat_maybe.png", {
    sliceX:4,
    sliceY:1,
    anims: {
        fat_0: {from: 0, to: 0},
        fat_1: {from: 1, to: 1},
        fat_2: {from: 2, to: 2},
        fat_3: {from: 3, to: 3},
    }});
loadSprite("cat_mia","tilemaps/cat_mia.png", {
    sliceX:4,
    sliceY:1,
    anims: {
        fat_0: {from: 0, to: 0},
        fat_1: {from: 1, to: 1},
        fat_2: {from: 2, to: 2},
        fat_3: {from: 3, to: 3},
    }});
loadSprite("cat_milo","tilemaps/cat_milo.png", {
    sliceX:4,
    sliceY:1,
    anims: {
        fat_0: {from: 0, to: 0},
        fat_1: {from: 1, to: 1},
        fat_2: {from: 2, to: 2},
        fat_3: {from: 3, to: 3},
    }});
loadSprite("cat_mittens","tilemaps/cat_mittens.png", {
    sliceX:4,
    sliceY:1,
    anims: {
        fat_0: {from: 0, to: 0},
        fat_1: {from: 1, to: 1},
        fat_2: {from: 2, to: 2},
        fat_3: {from: 3, to: 3},
    }});
loadSprite("cat_unusual","tilemaps/cat_unusual.png", {
    sliceX:4,
    sliceY:1,
    anims: {
        fat_0: {from: 0, to: 0},
        fat_1: {from: 1, to: 1},
        fat_2: {from: 2, to: 2},
        fat_3: {from: 3, to: 3},
    }});
loadSprite("cat_bongle","tilemaps/cat_bongle.png", {
    sliceX:4,
    sliceY:1,
    anims: {
        fat_0: {from: 0, to: 0},
        fat_1: {from: 1, to: 1},
        fat_2: {from: 2, to: 2},
        fat_3: {from: 3, to: 3},
    }});
loadSprite("poof", "tilemaps/poof.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
        poof: {from: 0, to: 3},
    }})
loadSprite("ham", "foods/ham.png")
loadSprite("catfood", "foods/catfood.png")
loadSprite("catfoodprem", "foods/catfoodprem.png")
loadSprite("tuna", "foods/tuna.png")
loadSprite("chicdrum", "foods/chicdrum.png")
loadSprite("giblets", "foods/giblets.png")
loadSprite("salmon", "foods/salmon.png")
loadSprite("bream", "foods/fish.png")
loadSprite("lobster", "foods/lobster.png")
loadSprite("hotdog", "foods/hotdog.png")
loadSprite("screen", "backdrop/screen.png")
loadSprite("screen", "backdrop/screen.png")
loadSprite("cursor", "sprites/cursor.png")
loadSprite("blanket", "sprites/purple_blanket.png")
loadSprite("tree", "sprites/tree.png")

loadSprite("book", "sprites/book.png")
loadSprite("caffeinebottle", "sprites/caffeinebottle.png")
loadSprite("chefhat", "sprites/chefhat.png")
loadSprite("choppingboard", "sprites/choppingboard.png")
loadSprite("coffee", "sprites/coffee.png")
loadSprite("energydrink", "sprites/energydrink.png")
loadSprite("mealprep", "sprites/mealprep.png")

loadSprite("trophy", "sprites/trophu.png")

loadSprite("smokepuff", "sprites/smokepuff.png", {
    sliceX:8,
    sliceY:1,
    anims: {
        puff: {from: 2, to: 7},
    }})
loadSprite("buy_notif", "sprites/notification_buy.png")
loadSprite("love_notif", "sprites/notification.png")
loadSprite("sleep_notif", "sprites/notification_sleep.png")

loadSprite("present", "sprites/present.png")
loadSprite("stereo", "sprites/stereo.png")


// Load Sounds
loadSound("talk_blip", "audio/talk_blip.mp3");
loadSound("click", "audio/click.mp3");
loadSound("ground_click", "audio/ground_click.mp3");
loadSound("windows", "audio/windows.mp3");
loadSound("menu_hover", "audio/boop.mp3");
loadSound("menu_click", "audio/ui_click.mp3");
loadSound("slurp", "audio/slurp.mp3");
loadSound("laptop", "audio/laptop.mp3");
loadSound("close_fridge", "audio/close_fridge.wav");
loadSound("open_fridge", "audio/open_fridge.wav");
loadSound("ringanswer", "audio/ringanswer.mp3");
loadSound("ringring", "audio/ringring.wav");
loadSound("aslansong","audio/slansong.mp3")
loadSound("rainnoise","audio/rainnoise.mp3")
loadSound("lilswitch","audio/lilswitch.wav")
loadSound("bigswitch","audio/bigswitch.wav")
loadSound("pop_present","audio/pop_present.wav")

// Purchasable items
// Laptop
// Order [price, name, function, description, ]
let laptopItems1 = [[5              , 'AUTO-FEED'          , addAutoClicker, "The AUTO-FEED automatically presses the FEED button from time to time. Purchase?"] ,
                [7              , 'AUTO-FEED +1'      , addAutoClicker, "Adds another AUTO-FEED! Purchase?"] ,
                [9              , 'AUTO-FEED +2'     , add2xAutoClicker, "Adds two AUTO-FEEDs! They seem to be keeping each other company. Purchase?"] ,
                [20, 'PURPLE BLANKET', addBlanket, "PURPLE BLANKET lets cats rest off extra food!"],
                [40              , 'AUTO-FEED +2'    , add2xAutoClicker, "Another pack of two AUTO-FEEDs! They seem excited to make cat food! Purchase?"] ,
                [120              , 'AUTO-FEED +3'    , add3xAutoClicker, "A pack of three AUTO-FEEDs! You wonder where they're all coming from. Purchase?"] ,
                [260              , 'AUTO-FEED +3'   , add3xAutoClicker, "Another pack of three AUTO-FEEDs! Purchase?"] ,
                [400              , 'AUTO-FEED +4'    , add4xAutoClicker, "Adds four AUTO-FEEDs! Wow! You don't know if you have space for them all. Purchase?"] ,
                ['N/A', 'SOLD OUT', null, "No more things are available at the moment!"]];

let laptopItems2 = [[10, 'EXTRA-FEED', addBar, "The EXTRA-FEED adds another FEED button! Purchase?"],
                [12, 'FRIDGE', addFridge, "Buy a FRIDGE that allows you to obtain more food options! Purchase?"],
                [70, 'EXTRA-FEED X2', addBar, "The EXTRA-FEED adds another FEED button! Purchase?"],
                [100, 'PLANT', addPlant, "Indoor PLANT makes the cats more happy and give presents! Purchase?"],
                [160, 'EXTRA-FEED X3', addBar, "The EXTRA-FEED adds another FEED button! Purchase?"],
                [180, 'PHONE', addPhone, "Buy a PHONE that allows you to obtain more cats! Purchase?"],
                [300, 'EXTRA-FEED X4', addBar, "The EXTRA-FEED adds another FEED button! Purchase?"],
                [9000, 'CAT TROPHY', addBoughtItems, "A golden cat trophy that says 'congrats on winning!'. It's smaller than expected. Purchase?"],
                ['N/A', 'SOLD OUT', null, "No more things are available at the moment!"]];

// Fridge
let fridgeItems1 = [[5                 , 'COOK-LESSONS'          , incrementFeedTimerSpeed, "COOK-LESSONS make you prepare cat food faster! Purchase?"] ,
                [20                 , 'COFFEE'      , incrementFeedTimerSpeed, "COFFEE makes you prepare cat food even speedier! Purchase?"] ,
                [50                , 'CHEF-CLASSES'     , incrementFeedTimerSpeed, "CHEF-CLASSES make you a cat chef! You will cook even faster! Purchase?"] ,
                [100                , 'MEAL-PREP'    , incrementFeedTimerSpeed, "MEAL-PREP means more time to make cat food! Purchase?"] ,
                [200               , 'ENERGY-DRINK'    , incrementFeedTimerSpeed, "ENERGY-DRINK makes you even faster at cooking (and jittery)! Purchase?"] ,
                [400                , 'PROD-BOOK'    , incrementFeedTimerSpeed, "PROD-BOOK teaches you productivity life-hacks! More time to make cat food! Purchase?"] ,
                [600               , 'CAFFEINE-TAB'   , incrementFeedTimerSpeed, "CAFFEINE-TABs make you extremely speedy at preparing cat food! Purchase?"] ,
                ['N/A', 'SOLD OUT', null, "No more things are available at the moment!"]];

let fridgeItems2 = [[5, 'PREMIUM FOOD', incrementFoodProgression, "PREMIUM FOOD adds tastier cat food! Purchase?"],
                [10, 'TUNA', incrementFoodProgression, "TUNA adds some tasty fish! Purchase?"],
                [20, 'CHICKEN', incrementFoodProgression, "Yum! Cats love CHICKEN as a treat! Purchase?"],
                [60, 'HAM', incrementFoodProgression, "HAM adds tasty smoked ham cat food! Purchase?"],
                [120, 'BREAM', incrementFoodProgression, "Fresh BREAM from the stream nearby! Purchase?"],
                [200, 'CHIC GIBLETS', incrementFoodProgression, "Cats are a fan of CHIC GIBLETS! Purchase?"],
                [300, 'SALMON', incrementFoodProgression, "Some tasty SALMON! The price is higher than expected. Purchase?"],
                [350, 'HOTDOG', incrementFoodProgression, "The cats insist on having eating HOTDOG. Purchase?"],
                [500, 'LOBSTER', incrementFoodProgression, "Some fresh LOBSTER! The price is more expensive than you remember. Purchase?"],
                ['N/A', 'SOLD OUT', null, "No more things are available at the moment!"]];

// phone
let phoneItems1 = [[200                 , 'MILO THE CAT'          , addCatMilo, "MILO is a happy black cat that loves food! Make a donation?"] ,
                [400                 , 'MAYBE THE CAT'      , addCatMaybe, "MAYBE is an old cat that loves to sleep! Make a donation?"] ,
                [700                 , 'BONGLE THE CAT'     , addCatBongle, "BONGLE is a silly cat who has a silly name! Make a donation?"] ,
                ['N/A', 'SOLD OUT', null, "No more things are available at the moment!"]];

let phoneItems2 = [[250, 'MIA THE CAT', addCatMia, "MIA is a rotund cat who is a little shy! Make a donation?"],
                [500, 'MITTENS THE CAT', addCatMittens, "MITTENS is a slinky cat that likes tuna! Make a donation?"],
                [900, 'UNUSUAL CAT', addCatUnusual, "This cat doesn't look like a cat at all! Make a donation?"],
                ['N/A', 'SOLD OUT', null, "No more things are available at the moment!"]];


// sound consts
// const blipSound = play("talk_blip");
// Constant Variables
let TEXTSPEED = 0.5;

// Silly Variables
let lastDecision = 0;
let dialogTree = '';
let foodSemaphore = false;
let laptopInUse = false;
let laptopReclick = false;
let fridgeInUse = false;
let fridgeReclick = false;
let phoneInUse = false;
let phoneReclick = false;
let destCursor = vec2(0,0);
let uiBlipSemaphore = false;
let uiBlipSemaphore2 = false;
let tick = 0;
let tick_2 = 0;
let itemPurchased = false;
let musicStopSemaphore = false;
let musicPlaying = false;

// Game Variables
let feedtimer = 0;
let feedtimer2 = 0;
let feedtimer3 = 0;
let feedtimer4 = 0;

// Stored Variables
let firstTimeUsedLaptop = true;
let firstTimeUsedPhone = true;
let firstTimeUsedFridge = true;
let money = 0;
let countAutoClicker = 0;
let laptop2Progression = 0;
let laptop1Progression = 0;
let fridge2Progression = 0;
let fridge1Progression = 0;
let phone2Progression = 0;
let phone1Progression = 0;
let barProgression = 0;
let foodProgression = 0;
let feedtimerSpeed = 0.4;
let catMiloUnlocked = false;
let catMaybeUnlocked = false;
let catBongleUnlocked = false;
let catMiaUnlocked = false;
let catMittensUnlocked = false;
let catUnusualUnlocked = false;
let fridgeUnlocked = false;
let phoneUnlocked = false;
let sleepingUnlocked = false;
let plantUnlocked = false;
let stereoUnlocked = false;
let bar1AutoClick = 0
let bar2AutoClick = 0
let bar3AutoClick = 0

// Consts for talking functions
const dialog = addDialog();
const dialog2 = addDialog();
const decision = addDecision(() => resolveDecision('10'),() => resolveDecision('01'));

// floor area
var polygon = [[19,80],
        [40,80],
        [49,67],
        [124,67],
        [125,90],
        [150,91],
        [150,67],
        [170,68],
        [170,83],
        [200,84],
        [210,146],
        [8,146],
        ]

function inside(point, vs) {
    var x = point.x, y = point.y;
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
};

function randBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function doSometimes(percentage){
    if (percentage > Math.random()){
        return true
    } else{
        return false
    }
}
function randBetweenInt(min, max) {
    return Math.round((Math.random() * (max - min) + min));
}


function generate_loc_on_ground(){
    let loc = vec2(randBetween(0,240), randBetween(0,140))
    // debug.log(inside(loc, polygon))
    while (!inside(loc, polygon)){
        loc = vec2(randBetween(0,240), randBetween(0,140))
    }
    return loc
}

// UI Stuff
const moneyUI = add([
    text("$0"),
    pos(5, 150),
    color(255,255,255),
    'textbox',
    z(1000),
    'money'
]);

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}


function updateMoney(){
    moneyUI.text = '$' + money;
}



function addDialog() {
    function pokeText(t, i, x = 0){
            wait((i*0.04 + x) * TEXTSPEED, () => { 
                if (laptopInUse || fridgeInUse || phoneInUse){
                    txt.text = t.substring(0,i);
                    txt_bg.text = t.substring(0,i);
                    play("talk_blip", {volume: 0.1});
                } else {
                    //pass
                };
            });
    }
    const bg = add([
            sprite('textbox'),
            pos(center().x,125),
            origin("center"),
            'textbox',
            z(1098),
        ]);
    const txt = add([
        text(""),
        pos(18, 127-13),
        color(0,0,0),
        'textbox',
        z(1100),
    ]);
    const txt_bg = add([
        text(""),
        pos(18+1, 127+1-13),
        color(200,200,200),
        'textbox',
        z(1099),
    ]);

    bg.hidden = true;
    txt.hidden = true;
    txt_bg.hidden = true;

    return {
        say(t, inc=true) {
                bg.hidden = false;
                txt.hidden = false;
                txt_bg.hidden = false; 
                // formatting text nicely
                let offset = 0
                let line1break = false
                let line2break = false
                // if there is a space somewhere between character 33 and character 29, change it with a new line
                // console.log(t)
                // spaghetti code to handle the textbox text!
                for (var char of [34,33,32,31,30,29]){
                    if ((t.substr(char,1) ==' ')){
                        // console.log(t.substr(0,char))
                        t = t.substr(0,char) + "\n" + t.substr(char + 1)
                        line1break=true
                        offset += 1
                        break;
                    }
                }
                console.log(t)
                for (var char of [65,64,63,62,61]){
                    if ((t.substr(char,1) ==' ')){
                        t = t.substr(0,char) + "\n" + t.substr(char + 1)
                        line2break=true
                        offset += 1
                        break;
                    }
                }
                console.log(t)
                if (!(t.substr(33,1) ==' ')){
                        if (!line1break){
                            t = t.substr(0,33) + '--' + t.substr(33)
                            offset += 2
                    }
                }
                console.log(t, offset)
                if (!(t.substr(64+offset,1) ==' ')){
                    if (!line2break) {
                        t = t.substr(0,64+offset) + '--' + t.substr(64+offset)
                    }
                }

                console.log(t)
                // console.log(t.substr(0,65+offset))
                // t = t.substr(0,33) + '--' + t.substr(33,32)+ '--' + t.substr(65)
                let t2 = t.replace(/(.{34})/g, "$1\n");
                console.log(JSON.stringify(t2))
                t2 = t2.replace(" \n", "\n")
                t2 = t2.replace(/\n{2,}/g, '\n')
                t2 = t2.replace("\n ", "\n")
                console.log(t2)
                // let t2 = t
                t2 += ""; 

                // hack to get rid of -- s on the end
                if (t2.substr(t2.length-2,2) == "--"){
                    t2 = t2.substr(0,t2.length-2)
                }
                if (t2.substr(t2.length-3,4) == "-\n-"){
                    t2 = t2.substr(0,t2.length-3)
                }
                if (t2.substr(t2.length-2,2) == "--"){
                    t2 = t2.substr(0,t2.length-2)
                }
                if (t2.substr(t2.length-3,4) == "-\n-"){
                    t2 = t2.substr(0,t2.length-3)
                }
                if (t2.substr(t2.length-2,2) == "--"){
                    t2 = t2.substr(0,t2.length-2)
                }
                length = t2.length;
                console.log(t2)
                if (inc){
                    let x = 0;
                    for (var i = 0; i <= length; i++) {
                        if (t2[i-2] == '!'){
                            x += 0.5;
                        } else if (t2[i-2] == '?'){
                            x += 0.5;
                        } else if (t2[i-2] == '.'){
                            x += 0.5;
                        }
                        pokeText(t2, i, x);
                    }
                } else {
                    txt.text = t2;
                    txt_bg.text = t2;                   
                } 
        },
        dismiss() {
            if (!this.active()) {
                return;
            }
            bg.hidden = true;
            txt.hidden = true;
            txt_bg.hidden = true;
            txt.text = "";
            txt_bg.text = "";
            // stops mashing laptop causing funny noises
            wait(.2, () => {laptopInUse = false;
                            fridgeInUse = false;
                            phoneInUse = false;});
            wait(1.0, () => {laptopReclick = false;
                             fridgeReclick = false;
                            phoneReclick = false;});
        },
        active() {
            return !bg.hidden;
        },
        closer() {
            //pass
        },
        destroy() {
            bg.destroy();
            txt.destroy();
            txt_bg.destroy();
        },
    };
}

function play2(soundfile,detune=0,speed=1,volume=.2){
    if(desktop){
     const sound = play(soundfile);
     sound.volume(volume);
     sound.detune(detune);
     sound.speed(speed);
     sound.play();
    }
}

function addDecision(f1,f2){
    lastDecision = 0;

    const bg = add([
            sprite('decisionbox'),
            pos(44+21,70),
            origin("center"),
            'decisionbox',
            z(1098),
        ]); 
    const txt1 = add([
        text(""),
        pos(18, 60),
        color(0,0,0),
        area({ cursor: "pointer", }),
        'decisionbox',
        'sel1',
        z(1100),
    ]);   
    const txt2 = add([
        text(""),
        pos(18, 73),
        color(0,0,0),
        area({ cursor: "pointer", }),
        'decisionbox',
        'sel2',
        z(1100),
    ]); 
    const txt_bg1 = add([
        text(""),
        pos(18+1, 60+1),
        color(200,200,200),
        'decisionbox',
        z(1099),
    ]);
    const txt_bg2 = add([
        text(""),
        pos(18+1, 73+1),
        color(200,200,200),
        'decisionbox',
        z(1099),
    ]);

    txt1.hovers(() => {
        const t = time() * 10;
        if (!uiBlipSemaphore){
            play('menu_hover');
            // debug.log(uiBlipSemaphore);
            uiBlipSemaphore = true;
        };
        txt1.color = rgb(
            wave(0, 255, t),
            wave(0, 255, t + 2),
            wave(0, 255, t + 4),
        );
    }, () => {
        txt1.color = rgb(0,0,0);
        if (uiBlipSemaphore){
            // play('menu_hover');
            // debug.log(uiBlipSemaphore);
            uiBlipSemaphore = false;
        };
    })

    txt2.hovers(() => {
        const t = time() * 10;
        if (!uiBlipSemaphore2){
            play('menu_hover');
            // debug.log(uiBlipSemaphore);
            uiBlipSemaphore2 = true;
        };
        txt2.color = rgb(
            wave(0, 255, t),
            wave(0, 255, t + 2),
            wave(0, 255, t + 4),
        );
    }, () => {
        txt2.color = rgb(0,0,0);
        if (uiBlipSemaphore2){
            // play('menu_hover');
            // debug.log(uiBlipSemaphore);
            uiBlipSemaphore2 = false;
        };
    })

    txt1.clicks(f1);
    txt2.clicks(f2);

    bg.hidden = true;
    txt1.hidden = true;
    txt2.hidden = true;
    txt_bg1.hidden = true;
    txt_bg2.hidden = true;
    return {
        add(t1, t2) {
            wait(0.001, () => {txt1.pos.y = 60;})
            wait(0.001, () => {txt2.pos.y = 73;})
            bg.hidden = false;
            txt1.hidden = false;
            txt2.hidden = false;
            txt_bg1.hidden = false;
            txt_bg2.hidden = false;
            txt1.text = t1;
            txt_bg1.text = t1;
            txt2.text = t2;
            txt_bg2.text = t2;
        },
        active() {
            return !bg.hidden;
        },
        dismiss() {
            if (!this.active()) {
                return;
            }
            bg.hidden = true;
            txt1.hidden = true;
            txt2.hidden = true;
            wait(0.001, () => {txt1.pos.y = 9999});
            wait(0.001, () => {txt2.pos.y = 9999});
            txt_bg1.hidden = true;
            txt_bg2.hidden = true;
        },
        destroy() {
            bg.destroy();
            txt1.destroy();
            txt2.destroy();
            txt_bg1.destroy();
            txt_bg2.destroy();
        },
    }
}

function resolveDecision(i){
    play('menu_click');
    decision.dismiss();
    // debug.log(i);
    lastDecision = i;
    // dialog.dismiss();
    dialogTree += i;
    // debug.log('dialogtree is' + dialogTree)
}

function locktogrid(pos){
    let x = Math.floor(pos.x/16)*16
    let y = Math.floor(pos.y/16)*16
    return(vec2(x,y))
}

function progressbar(f){
    const bar_bg = add([
        rect(102,11),
        color(0,0,0),
        z(49),
        area({ cursor: "pointer", }),
        pos(999,999),
        'bar'
        ]);
    const bar = add([
        rect(100,9),
        color(128,240,184),
        z(50),
        area({ cursor: "pointer", }),
        pos(999,999),
        'bar',
        ]);
    const txt = add([
        text("vds"),
        color(255,255,255),
        z(100),
        origin("center"),
        pos(999,999),
        'bartext',
    ]);
    bar.clicks(f);
    
    return({
        add(position, t){
            bar.pos = position;
            bar_bg.pos = position.add(-1,-1);
            txt.pos = position.add(50,5);
            txt.text = t;
        },
        update(value){
            value = Math.max(0, Math.min(value, 100));
            bar.scale = vec2(value/100,1);
            bar.color = rgb(100+28*value/100,
                100+140*value/100,
                100+84*value/100)
        },
        ready(){
            const t = time() * 10;
            bar.color = rgb(
                wave(0, 255, t),
                wave(0, 255, t + 2),
                wave(0, 255, t + 4),

            );
            foodSemaphore = false;
        }
    })
}

let dest = vec2(100,30);

const bg = add([
        sprite("bg"),
    ]);
function addFridge(){
    fridgeUnlocked=true
    console.log(fridgeUnlocked)
    const fridge = add([
    sprite('fridge'),
    z(51),
    pos(120,21),
    area({cursor:"pointer", height:60, },)]);
    fridge.clicks(() => useFridge())
    fridge.hovers(() => {
        fridge.frame = 1;
        if (!fridge.open){play('open_fridge'), {volume:0.1}}
        fridge.open = true;
    }, () => {
        fridge.frame = 0;
        if (fridge.open){play('close_fridge'), {volume:0.1}}
        fridge.open = false;
    })

}

function addBoughtItems(){
    // adds items bought
    if (fridge1Progression >= 1){
        add([sprite("choppingboard"),  pos(202,50), z(52),]);}
    if (fridge1Progression >= 2){
        add([sprite("coffee"),  pos(176,43), z(52),]);}
    if (fridge1Progression >= 3){
        add([sprite("chefhat"),  pos(156,59), z(52),]);}
    if (fridge1Progression >= 4){
        add([sprite("mealprep"),  pos(2,129), z(129+5),]);}
    if (fridge1Progression >= 5){
        add([sprite("energydrink"),  pos(213,127), z(52),]);}
    if (fridge1Progression >= 6){
        add([sprite("book"),  pos(170,50), z(52),]);}
    if (fridge1Progression >= 7){
        add([sprite("caffeinebottle"),  pos(41,58), z(52),]);}
    if (laptop2Progression >= 8){
        add([sprite("trophy"),  pos(125,14), z(100),]);}
}
// addFridge()

const ringing = play('ringring',{volume:0.0, loop:true})
ringing.stop()

function addPhone(){
    phoneUnlocked = true
    const table = add([
        sprite('table'),
        z(51),
        pos(211,111),
        ]);

    const phone = add([
        sprite('phone'),
        z(52),
        pos(214,102),
        area({ cursor: "pointer"}),
        ]);


    phone.hovers(() => {
            if(!phoneInUse){
            phone.frame = 1;
        }
            if (!phone.on && !phoneInUse && phoneUnlocked){
                // debug.log(!phone.on, !phoneInUse, phoneUnlocked)
                ringing.volume(0.4)
                ringing.play()
            }
            phone.on = true
            ;
        }, () => {
            if (phone.on){
                ringing.stop()
                // play('ringanswer',{volume:0.4})
            }
            phone.on = false
            phone.frame = 0;
        })
    phone.clicks(() => usePhone())
}
// addPhone()

const laptop = add([
    sprite('screen'),
    pos(194,49),
    origin('center'),
    area({ width: 30, height: 30, cursor:"pointer" })])

laptop.clicks(() => useLaptop());

laptop.hovers(() => {
        const t = time() * 10;
        laptop.color = rgb(
            wave(0, 255, t),
            wave(0, 255, t + 2),
            wave(0, 255, t + 4),
        );
        if (!laptop.on){
                play('laptop', {volume:0.2})
            }
        laptop.on = true
    }, () => {
        laptop.on = false
        laptop.color = 0;
    })

add([
        rect(230,140),
        pos(5,60),
        area(),
        opacity(0),
        'floor'
    ]);
const dialog_closer = add([
    rect(240,50),
    pos(0, 0),
    color(255,0,0),
    z(1100),
    area()
    ]);
const dialog_closer2 = add([
    rect(240,100),
    pos(150, 0),
    color(255,255,0),
    z(1100),
    area()
    ]);
const dialog_closer3 = add([
    rect(240,15),
    pos(0, 90),
    color(255,255,0),
    z(1100),
    area()
    ]);
dialog_closer.hidden = true;
dialog_closer2.hidden = true;
dialog_closer3.hidden = true;


dialog_closer.clicks(() => {
                dialog.dismiss();
                decision.dismiss();
            })
dialog_closer2.clicks(() => {
                dialog.dismiss();
                decision.dismiss();
            })
dialog_closer3.clicks(() => {
                dialog.dismiss();
                decision.dismiss();
            })

function addCat(name,spritename="cat",fatness=0,min_fatness=0,max_fatness=10,r=255,g=255,b=255){
    console.log('adding cat',name)
    add([
        sprite(spritename),
        area({ scale: 0.4 }),
        origin("center"),
        pos(generate_loc_on_ground()),
        color(r, g, b),
        // solid(),
        z(10),
        "cat",
        {
        anim: "fat_0",
        dest: generate_loc_on_ground(),
        show_love: false,
        sleeping: false,
        fatness: fatness,
        min_fatness: min_fatness,
        max_fatness: max_fatness,
        speed: 1,
        }
    ]);
}

function addPlant(){
    add([
    sprite('tree'),
    z(100),
    pos(9,87)]);
    plantUnlocked = true
}

function addBlanket(){
    add([
    sprite('blanket'),
    z(0),
    pos(201,80)]);
    sleepingUnlocked = true

}
const rain = play("rainnoise", {
    volume: 0.8,
    loop: true,
})
const music = play("aslansong", {
    volume: 0.2,
    loop: true,
    stopped:true
})
wait(0.0, () => { music.stop()})


function addStereo(){
    stereoUnlocked = true
    const stereo = add([
    sprite('stereo'),
    z(0), "stereo",
    area({ cursor: "pointer"}),
    pos(22,55)]    );
    stereo.hovers(() => {
        if (!stereo.open){play('lilswitch'), {volume:0.2}}
        stereo.open = true;
    }, () => {
        stereo.open = false;
    })
    }

    clicks('stereo', (p) => {
        play('bigswitch', {volume:0.2})

            // debug.log(musicPlaying)
            if (!musicPlaying){
                music.play();
                musicPlaying=true
            } else {
                music.stop()
                musicPlaying=false
            
        };
    })




function addCatMilo(){
    catMiloUnlocked = true
    addCat('Milo','cat_milo',0,0,4)
}
function addCatMaybe(){
    catMaybeUnlocked = true
    addCat('Maybe','cat_maybe',4,4,10)
}
function addCatBongle(){
    catBongleUnlocked = true
    addCat('Bongle','cat_bongle',2,2,10)
}
function addCatMia(){
    catMiaUnlocked = true
    addCat('Mia','cat_mia',0,0,10)
}
function addCatMittens(){
    catMittensUnlocked = true
    addCat('Mittens','cat_mittens',0,0,10)
}
function addCatUnusual(){
    catUnusualUnlocked = true
    addCat('Unusual','cat_unusual',0,0,10)
}

function clickBar(feedtimer) {
    if (feedtimer > 100){
        if (foodSemaphore) {
            // pass
            } else {
                feedtimer = 0;
                addFood();   
                foodSemaphore = true; 
                play('click',{volume : 0.2});
            };
        };
    return feedtimer;
}

const bar1 = progressbar(() => {
    feedtimer = clickBar(feedtimer);
    });

const bar2 = progressbar(() => {
    feedtimer2 = clickBar(feedtimer2);
    });

const bar3 = progressbar(() => {
    feedtimer3 = clickBar(feedtimer3);
    });

const bar4 = progressbar(() => {
    feedtimer4 = clickBar(feedtimer4);
    });

bar1.add(vec2(5,5), 'FEED');
updateMoney();

action('cat',(cat) => {
    // cat code (per frame)
    cat.moveTo(cat.dest, (1/(cat.fatness+1) * 15+5));
    cat.z = cat.pos.y;
});


function addPresent(x, y){
    add([sprite('smokepuff',{anim: "puff"}), origin("center"), pos(x,y), z(y-5+1),lifespan(.5, { fade: 0.2 })]);
    add([sprite("present"), area({ cursor: "pointer", }), origin("center"), pos(x, y), z(y-5),"present", lifespan(30, { fade: 0.5 }),]);
}
clicks('present', (p) => {
//     // clicking on the present currently adds 30 $ ! (increases with food progression)
//     // add sound
    money = money + 30 * (foodProgression + 1);
    // console.log(30 * foodProgression + 1)
    updateMoney();
    play("pop_present", {volume: 0.4, detune: rand(-1, 1) * 100 - foodProgression * 50,});
    add([sprite('poof',{anim: "poof"}), origin("center"), pos(p.pos.x,p.pos.y-5), z(p.pos.y-5-5+1),lifespan(.5, { fade: 0.2 })]);
    destroy(p);

})


function addFood(){
    // adds a food to the game!
    let foodloc = generate_loc_on_ground()
    every("cat", (c)=>{
        if (doSometimes(0.1)){
            if (!c.sleeping){
                c.dest =  foodloc.add(randBetween(-3,3),randBetween(-8,8));
            }
        }
    })
    let foodType = randBetweenInt(randBetweenInt(0,foodProgression),foodProgression)
    // debug.log(foodType)
    add([sprite('smokepuff',{anim: "puff"}), origin("center"), pos(foodloc), z(foodloc.y-5+1),lifespan(.5, { fade: 0.2 })])
    if (foodType == 0){
        add([sprite("catfood"), area(), origin("center"), pos(foodloc), z(foodloc.y-5),"food", "catfood", lifespan(30, { fade: 0.5 }),]);
    } else if (foodType == 1){
        add([sprite("catfoodprem"), area(), origin("center"), pos(foodloc), z(foodloc.y-5),"food", "catfoodprem", lifespan(30, { fade: 0.5 }),]);
    } else if (foodType == 2){
        add([sprite("tuna"), area(), origin("center"), pos(foodloc), z(foodloc.y-5),"food", "tuna", lifespan(30, { fade: 0.5 }),]);       
    } else if (foodType == 3){
        add([sprite("chicdrum"), area(), origin("center"), pos(foodloc), z(foodloc.y-5),"food", "chicdrum", lifespan(30, { fade: 0.5 }),]);        
    } else if (foodType == 4){
        add([sprite("ham"), area(), origin("center"), pos(foodloc), z(foodloc.y-5),"food", "ham", lifespan(30, { fade: 0.5 }),]);        
    } else if (foodType == 5){
        add([sprite("bream"), area(), origin("center"), pos(foodloc), z(foodloc.y-5),"food", "bream", lifespan(30, { fade: 0.5 }),]);   
    } else if (foodType == 6){
        add([sprite("giblets"), area(), origin("center"), pos(foodloc), z(foodloc.y-5),"food", "giblets", lifespan(30, { fade: 0.5 }),]);        
    } else if (foodType == 7){
        add([sprite("salmon"), area(), origin("center"), pos(foodloc), z(foodloc.y-5),"food", "salmon", lifespan(30, { fade: 0.5 }),]);        
    } else if (foodType == 8){
        add([sprite("hotdog"), area(), origin("center"), pos(foodloc), z(foodloc.y-5),"food", "hotdog", lifespan(30, { fade: 0.5 }),]);        
    } else if (foodType == 9){
        add([sprite("lobster"), area(), origin("center"), pos(foodloc), z(foodloc.y-5),"food", "lobster", lifespan(30, { fade: 0.5 }),]);        
    }
};

clicks('floor', () => {
    if  (!(laptopInUse || fridgeInUse || phoneInUse)){
        if (inside(mousePos(), polygon)){
            every("cat", (c)=>{
            if (doSometimes(1)){
                c.dest =  mousePos();
            }
            })
            play('ground_click',{volume : 0.5});
         }
    }
    // debug.log('clicked');
    // debug.log(dest.x +','+dest.y)
});

function eat_food(c, f, m){
    // add money when the cat eats the food
    // wait(1, () => {
        play('slurp', {volume:0.1, detune:rand(-1, 1) * 100 - c.fatness * 30});
        // pay out based on what sort of food it is
        money += m;
        updateMoney();
        destroy(f);
        c.fatness++
        update_fatness(c);
    // });
}

function update_fatness(c){
    // updates the sprite for the level of cat fatness
    if (c.fatness >= 0) {
        c.play('fat_0')
    }
    if (c.fatness > 2) {
        // debug.log('fat_1')
        c.play('fat_1')
    } 
    if (c.fatness > 4) {
        c.play('fat_2')
    }  
    if (c.fatness > 6) {
        c.play('fat_3')
    } 
    // debug.log(c.fatness)
}

// increases the feed timer counts
action(() => {
    feedtimer += feedtimerSpeed
    feedtimer2 += feedtimerSpeed
    feedtimer3 += feedtimerSpeed
    feedtimer4 += feedtimerSpeed
    bar1.update(feedtimer);
    bar2.update(feedtimer2);
    bar3.update(feedtimer3);
    bar4.update(feedtimer4);
    if (feedtimer > 100){
        bar1.ready();
    }
    if (feedtimer2 > 100){
        bar2.ready();
    }
    if (feedtimer3 > 100){
        bar3.ready();
    }
    if (feedtimer4 > 100){
        bar4.ready();
    }
    // dodgy collision thingo hack (only performs it every few ticks)
    tick++
    if (tick > 6){
        tick = 0
        every("cat", (c)=>{
            every("catfood", (f)=>{if (c.isColliding(f)){eat_food(c,f,1);}});
            every("catfoodprem", (f)=>{if (c.isColliding(f)){eat_food(c,f,2);}});
            every("tuna", (f)=>{if (c.isColliding(f)){eat_food(c,f,3);}});
            every("chicdrum", (f)=>{if (c.isColliding(f)){eat_food(c,f,5);}});
            every("ham", (f)=>{if (c.isColliding(f)){eat_food(c,f,7);}});
            every("bream", (f)=>{if (c.isColliding(f)){eat_food(c,f,9);}});
            every("giblets", (f)=>{if (c.isColliding(f)){eat_food(c,f,11);}});
            every("salmon", (f)=>{if (c.isColliding(f)){eat_food(c,f,14);}});
            every("hotdog", (f)=>{if (c.isColliding(f)){eat_food(c,f,15);}});
            every("lobster", (f)=>{if (c.isColliding(f)){eat_food(c,f,17);}});
        });
    }
});

function purchaseIfCanAfford(cost, statement){
    if (cost=="N/A"){
        return false
    }
    if ((money - cost)<0){
        updateMoney();
        dialog.say("Not enough funds!")
        return false;
    } else {
        money -= cost;
        updateMoney();
        dialog.say(statement)
        return true;
    }
}

clicks('sel1', () => {switch(dialogTree){
                case '10':
                    if (laptopItems1[laptop1Progression][0]=="N/A"){
                        dialog.dismiss();
                        break;
                    }
                    dialog.say(laptopItems1[laptop1Progression][3]); 
                    wait(2*TEXTSPEED, () => {if (laptopInUse){decision.add("YES PLEASE ($" + laptopItems1[laptop1Progression][0].toString() + ")","NO THANKYOU")}});
                    break;
                case '1010':
                    // dialog.say("You purchased the AUTO-FEEDER!");
                    if (purchaseIfCanAfford(laptopItems1[laptop1Progression][0], "You purchased the " + laptopItems1[laptop1Progression][1]+'!')){
                        laptopItems1[laptop1Progression][2]();
                        laptop1Progression++;
                    };
                    wait(4*TEXTSPEED, () => {dialog.dismiss()});
                    
                    // money -= 2;
                    break; 
                case '0110':
                    if (purchaseIfCanAfford(laptopItems2[laptop2Progression][0], "You purchased the " + laptopItems2[laptop2Progression][1]+'!')){
                        laptopItems2[laptop2Progression][2]();
                        laptop2Progression++;
                        addBoughtItems()
                    };
                    wait(4*TEXTSPEED, () => {dialog.dismiss()});
                    break; 
                case 'F10':
                    if (fridgeItems1[fridge1Progression][0]=="N/A"){
                        dialog.dismiss();
                        break;
                    }
                    dialog.say(fridgeItems1[fridge1Progression][3]); 
                    wait(2*TEXTSPEED, () => {if (fridgeInUse){decision.add("YES PLEASE ($" + fridgeItems1[fridge1Progression][0].toString() + ")","NO THANKYOU")}});
                    break;
                case 'F1010':
                    if (purchaseIfCanAfford(fridgeItems1[fridge1Progression][0], "You purchased the " + fridgeItems1[fridge1Progression][1]+'!')){
                        fridgeItems1[fridge1Progression][2]();
                        fridge1Progression++;
                        addBoughtItems()
                    };
                    wait(4*TEXTSPEED, () => {dialog.dismiss()});
                    break;
                case 'P10':
                    if (phoneItems1[phone1Progression][0]=="N/A"){
                        dialog.dismiss();
                        break;
                    }
                    dialog.say(phoneItems1[phone1Progression][3]); 
                    wait(2*TEXTSPEED, () => {if (phoneInUse){decision.add("YES PLEASE ($" + phoneItems1[phone1Progression][0].toString() + ")","NO THANKYOU")}});
                    break;
                case 'P1010':
                    if (purchaseIfCanAfford(phoneItems1[phone1Progression][0], "You purchased the " + phoneItems1[phone1Progression][1]+'!')){
                        phoneItems1[phone1Progression][2]();
                        phone1Progression++;
                    };
                    wait(4*TEXTSPEED, () => {dialog.dismiss()});
                    
                    // money -= 2;
                    break; 
                case 'F0110':
                    if (purchaseIfCanAfford(fridgeItems2[fridge2Progression][0], "You purchased the " + fridgeItems2[fridge2Progression][1]+'!')){
                        fridgeItems2[fridge2Progression][2]();
                        // addBar();
                        fridge2Progression++;
                    };
                    wait(4*TEXTSPEED, () => {dialog.dismiss()});
                    break;   
                case 'P0110':
                    if (purchaseIfCanAfford(phoneItems2[phone2Progression][0], "You purchased the " + phoneItems2[phone2Progression][1]+'!')){
                        phoneItems2[phone2Progression][2]();
                        // addBar();
                        phone2Progression++;
                    };
                    wait(4*TEXTSPEED, () => {dialog.dismiss()});
                    break;       
                default:
                    dialog.dismiss();                       
                      }});
clicks('sel2', () => {switch(dialogTree){
                case '01':
                    if (laptopItems2[laptop2Progression][0]=="N/A"){
                        dialog.dismiss();
                        break;
                    }
                    dialog.say(laptopItems2[laptop2Progression][3]); 
                    wait(1*TEXTSPEED, () => {decision.add("YES PLEASE ($" + laptopItems2[laptop2Progression][0].toString() + ")","NO THANKYOU")});
                    break;
                case 'F01':
                    if (fridgeItems2[fridge2Progression][0]=="N/A"){
                        dialog.dismiss();
                        break;
                    }
                    dialog.say(fridgeItems2[fridge2Progression][3]); 
                    wait(1*TEXTSPEED, () => {decision.add("YES PLEASE ($" + fridgeItems2[fridge2Progression][0].toString() + ")","NO THANKYOU")});
                    break;
                case 'P01':
                    if (phoneItems2[phone2Progression][0]=="N/A"){
                        dialog.dismiss();
                        break;
                    }
                    dialog.say(phoneItems2[phone2Progression][3]); 
                    wait(1*TEXTSPEED, () => {decision.add("YES PLEASE ($" + phoneItems2[phone2Progression][0].toString() + ")","NO THANKYOU")});
                    break;
                default:
                    dialog.dismiss();
                  }});
function formatDecisionInitial(inp_string, cost){
    // formats the initial decision text
    let text = inp_string + " $" + cost + "";
    // turn 000 into k
    text.replace('000','k')
    return text

}

function useFridge(){
    if (!fridgeInUse && !fridgeReclick && !phoneInUse && !phoneReclick){
        fridgeInUse = true;
        fridgeReclick = true;
        wait(0.01, () => play('menu_click',{volume:0.4}));
        let time_delay = 1;
        dialog.say("Unusually, the fridge is filled with cat-food labelled with small price tags. What do you buy?", firstTimeUsedFridge);
        dialog.closer();
        dialogTree = 'F';
        if (!firstTimeUsedFridge){
            time_delay = 0.01;
        }
        let decision1 = formatDecisionInitial(fridgeItems1[fridge1Progression][1],fridgeItems1[fridge1Progression][0].toString());
        let decision2 = formatDecisionInitial(fridgeItems2[fridge2Progression][1],fridgeItems2[fridge2Progression][0].toString());

        wait(3.5*time_delay*TEXTSPEED, () => {if (fridgeInUse) {
            decision.add(decision1, decision2);
        }
    });
        firstTimeUsedFridge = false;
    }
}


function useLaptop(){
    if (!laptopInUse && !laptopReclick && !phoneInUse && !phoneReclick){
        laptopInUse = true;
        laptopReclick = true;
        wait(0.01, () => play('windows',{volume:0.4}));

        let time_delay = 1;
        dialog.say("Strangely, the laptop can only browse a cat e-commerce site. What do you buy?", firstTimeUsedLaptop);
        dialog.closer();
        dialogTree = '';
        if (!firstTimeUsedLaptop){
            time_delay = 0.01;
        }
        let decision1 = laptopItems1[laptop1Progression][1] + " $" + laptopItems1[laptop1Progression][0].toString() + "";
        let decision2 = laptopItems2[laptop2Progression][1] + " $" + laptopItems2[laptop2Progression][0].toString() + "";

        wait(3.5*time_delay*TEXTSPEED, () => {if (laptopInUse) {
            decision.add(decision1, decision2);
        }
    });
        firstTimeUsedLaptop = false;
    }
}

function usePhone(){
    if (!laptopInUse && !laptopReclick && !fridgeInUse && !fridgeReclick){
        ringing.stop()
        phoneInUse = true;
        phoneReclick = true;
        wait(0.01, () => play('menu_click',{volume:0.4}));

        let time_delay = 1;
        dialog.say("Oddly, the phone's keypad is jammed and can only phone the cat rescue center. Who to rescue?", firstTimeUsedPhone);
        dialog.closer();
        dialogTree = 'P';
        if (!firstTimeUsedPhone){
            time_delay = 0.01;
        }
        let decision1 = phoneItems1[phone1Progression][1] + " $" + phoneItems1[phone1Progression][0].toString() + "";
        let decision2 = phoneItems2[phone2Progression][1] + " $" + phoneItems2[phone2Progression][0].toString() + "";

        wait(3.5*time_delay*TEXTSPEED, () => {if (phoneInUse) {
            decision.add(decision1, decision2);
        }
    });
        firstTimeUsedPhone = false;
    }
}


function cursorStuff(barNo) {
    //s all the work the cursor should do!
    let destCursor = vec2(40,7);

    loop(randBetween(2,10), () => {
        if (time() > 5){
        destCursor = vec2(randBetween(10,110),
            randBetween(5,10))
        
        if (barNo==1){
            feedtimer=clickBar(feedtimer);
        } else if (barNo==2){
            feedtimer2=clickBar(feedtimer2);
        }else if (barNo==3){
            feedtimer3=clickBar(feedtimer3);
        } else if (barNo==4){
            feedtimer4=clickBar(feedtimer3);
        }
        }
    });
    return {
        // name of the component
        id: "cursorStuff",
        // it requires the "pos" and "area" component
        require: [ "pos", "area", ],
        // "add" is a lifecycle method gets called when the obj is added to scene
        add() {
            // "this" in all methods refer to the obj
            // pass
        },
        // "update" is a lifecycle method gets called every frame the obj is in scene
        update() {
            this.moveTo(vec2(destCursor.x,destCursor.y+barNo*11-11),10);
        },
    };

}
addCat('Aslan')

function add2xAutoClicker(i, load=false){
    addAutoClicker(i, load)
    addAutoClicker(i,load)
}

function add3xAutoClicker(i, load=false){
    addAutoClicker(i, load)
    addAutoClicker(i,load)
    addAutoClicker(i,load)
}
function add4xAutoClicker(i, load=false){
    addAutoClicker(i, load)
    addAutoClicker(i,load)
    addAutoClicker(i,load)
    addAutoClicker(i, load)

}

function addAutoClicker(i,load=false){
    if (!load) {
        countAutoClicker++;
        i = countAutoClicker
    } else {
        //pass
    }
    // debug.log(countAutoClicker)
    let cursorPos  = vec2()
    let barNo = 0;
    cursorPos = vec2(40,7);
    // debug.log(i)
    // randomly assign to the number of bars that exist
    let num_bars = barProgression + 1
    barNo = randBetweenInt(1, num_bars)
    if (barNo==1){
        if (bar1AutoClick <= 4) {
            if (!load) {bar1AutoClick = min(4,bar1AutoClick+1)}
        } else {
            barNo = 2
        }
    }
    if (barNo==2){
        if (bar2AutoClick <= 4) {
            if (!load) {bar2AutoClick = min(4,bar2AutoClick+1)}
        } else {
            barNo = 3
        }
    }
    if (barNo==3){
        if (bar3AutoClick <= 4) {
            if (!load) {bar3AutoClick = min(4,bar3AutoClick+1)}
        } else {
            barNo = 4
        }
    }

    add([sprite('cursor'),
    scale(1.0),
    origin('top'),
    z(900),
    area(),
    pos(cursorPos),
    cursorStuff(barNo),
    "cursor"
    ]);   
}
function addBar(i=0,load=false){
    if (!load){
        barProgression++
    } 
    if (!load){
        i = barProgression

    }
    if (i == 1){
        bar2.add(vec2(5,5+12), 'FEED');
    } else if (i == 2){
        bar3.add(vec2(5,5+24), 'FEED');
    } else if (i == 3){
        bar4.add(vec2(5,5+36), 'FEED');
    };
    if (barProgression > 3){
        barProgression = 3
    }

}

function incrementFoodProgression(){
    foodProgression++;
    // debug.log(foodProgression)
}

function incrementFeedTimerSpeed(){
    feedtimerSpeed = feedtimerSpeed * 1.15  + 0.06;
    
}

loop(10, () => {
    //ensure the cat isn't too fat!
    revery("cat", (c)=>{c.fatness=Math.max(c.min_fatness, c.fatness-1);});

})


// notifications for when you can buy new things
let buy_notif_laptop = add([
    pos(200, 30),
    sprite("buy_notif"),
    'buy_notif_laptop',
])
let buy_notif_fridge = add([
    pos(152, 12),
    sprite("buy_notif"),
    'buy_notif_fridge',
])
let buy_notif_phone = add([
    pos(225, 100),
    sprite("buy_notif"),
    'buy_notif_phone',
])
buy_notif_laptop.hidden=true
buy_notif_fridge.hidden=true
buy_notif_phone.hidden=true

// drawing things for cat (each frame)

onUpdate('cat',(c)=>{
    if (c.show_love) {add([
        sprite('love_notif'),
        lifespan(0.0166),
        pos(c.pos.x+6,c.pos.y-18),
        z(c.pos.y-18+40),
        'love'
        ])
        }
    if (c.sleeping) {add([
        sprite('sleep_notif'),
        lifespan(0.0166),
        pos(c.pos.x+6,c.pos.y-18),
        z(c.pos.y-18+40),
        'sleep'
        ])
        // stop the cat from moving
        c.dest = c.pos

        }
})
    
function myArrayMin(x) {
  return Math.min(...x.filter(x => typeof x === 'number')); //result is 4
}
// main game loops
loop(1, () => {
    // update fatness sprite for every cat
    revery("cat", (c)=>{update_fatness(c)})

    // give a notification if the player can afford a new item
    if (myArrayMin([laptopItems1[laptop1Progression][0],laptopItems2[laptop2Progression][0]]) <= money){

        buy_notif_laptop.hidden=false
    } else {
        buy_notif_laptop.hidden=true
    }
    if (fridgeUnlocked) {
        if (myArrayMin([fridgeItems1[fridge1Progression][0],fridgeItems2[fridge2Progression][0]]) <= money){
            buy_notif_fridge.hidden=false
        } else {
            buy_notif_fridge.hidden=true
        }
    }
    if (phoneUnlocked) {
        if (myArrayMin([phoneItems1[phone1Progression][0],phoneItems2[phone2Progression][0]]) <= money){
            buy_notif_phone.hidden=false
        } else {
            buy_notif_phone.hidden=true
        }
    }

})

// cat processing loop
loop(3, () => {
    // if cat is fat (happy) maybe show a love heart over the cat
    // sometimes drop a present
    // sometimes go to sleep
    revery("cat", (c)=>{
        if (c.fatness > 3){
            if (doSometimes(0.3)){
                if (plantUnlocked){
                c.show_love=true
                addPresent(c.pos.x,c.pos.y)
            }
            } else if(doSometimes(0.3)){
                if (sleepingUnlocked){
                c.sleeping=true
                // stop sleeping after 5 secs

                wait(5, () => {c.sleeping = false; c.fatness=0; update_fatness(c);});
            }

            } else {
                c.show_love=false
            }
            }
        }
    )
})

loop(5, () => {
    if (time()>10){
        // debug.log('saving!')
        saveGame()
    }
})



function saveGame(){
    setData("firstTimeUsedLaptop" , firstTimeUsedLaptop)
    setData("firstTimeUsedPhone" , firstTimeUsedPhone)
    setData("firstTimeUsedFridge" , firstTimeUsedFridge)
    setData("money" , money)
    setData("countAutoClicker" , countAutoClicker)
    setData("laptop2Progression" , laptop2Progression)
    setData("laptop1Progression" , laptop1Progression)
    setData("fridge2Progression" , fridge2Progression)
    setData("fridge1Progression" , fridge1Progression)
    setData("phone2Progression" , phone2Progression)
    setData("phone1Progression" , phone1Progression)
    setData("foodProgression" , foodProgression)
    setData("feedtimerSpeed" , feedtimerSpeed)
    setData("barProgression" , barProgression)
    setData("catMiloUnlocked", catMiloUnlocked)
    setData("catMaybeUnlocked", catMaybeUnlocked)
    setData("catBongleUnlocked", catBongleUnlocked)
    setData("catMiaUnlocked", catMiaUnlocked)
    setData("catMittensUnlocked", catMittensUnlocked)
    setData("catUnusualUnlocked", catUnusualUnlocked)
    setData("fridgeUnlocked",fridgeUnlocked)
    setData("phoneUnlocked",phoneUnlocked)
    setData("sleepingUnlocked",sleepingUnlocked)
    setData("plantUnlocked",plantUnlocked)
    setData("bar1AutoClick",bar1AutoClick)
    setData("bar2AutoClick",bar2AutoClick)
    setData("bar3AutoClick",bar3AutoClick)

    
}

function loadGame(){
    // debug.log('Loading savedata!')
    if (getData("money") == null) {
     // pass
    } else {
    firstTimeUsedLaptop = getData("firstTimeUsedLaptop")
    firstTimeUsedPhone = getData("firstTimeUsedPhone")
    firstTimeUsedFridge = getData("firstTimeUsedFridge")
    money = getData("money")
    countAutoClicker = getData("countAutoClicker")
    laptop2Progression = getData("laptop2Progression")
    laptop1Progression = getData("laptop1Progression")
    fridge2Progression = getData("fridge2Progression")
    fridge1Progression = getData("fridge1Progression")
    phone2Progression = getData("phone2Progression")
    phone1Progression = getData("phone1Progression")
    foodProgression = getData("foodProgression")
    feedtimerSpeed = getData("feedtimerSpeed")
    barProgression = getData("barProgression")
    catMaybeUnlocked = getData("catMaybeUnlocked")
    catBongleUnlocked = getData("catBongleUnlocked")
    catMiaUnlocked = getData("catMiaUnlocked")
    catMittensUnlocked = getData("catMittensUnlocked")
    catUnusualUnlocked = getData("catUnusualUnlocked")
    fridgeUnlocked = getData("fridgeUnlocked")
    phoneUnlocked = getData("phoneUnlocked")
    sleepingUnlocked = getData("sleepingUnlocked")
    plantUnlocked = getData("plantUnlocked")
    stereoUnlocked = getData("stereoUnlocked")
    bar1AutoClick = getData("bar1AutoClick")
    bar2AutoClick = getData("bar2AutoClick")
    bar3AutoClick = getData("bar3AutoClick")
    // update game stuff
    updateMoney()
    if (countAutoClicker > 16){
        countAutoClicker=16
    }
    for (var i = 0; i< countAutoClicker; i++){
        addAutoClicker(i=i,load=true);
    }
    for (var i = 1; i<= barProgression; i++){
        addBar(i=i,load=true);
    }
    if (catMiloUnlocked){addCatMilo()}
    if (catMaybeUnlocked){addCatMaybe()}
    if (catBongleUnlocked){addCatBongle()}
    if (catMiaUnlocked){addCatMia()}
    if (catMittensUnlocked){addCatMittens()}
    if (catUnusualUnlocked){addCatUnusual()}
    if (fridgeUnlocked) {addFridge()}
    if (phoneUnlocked) {addPhone()}
    if (sleepingUnlocked) {addBlanket()}
    if (plantUnlocked) {addPlant()}
    if (stereoUnlocked) {addStereo()}
    addBoughtItems()
    }
    
}

function return_food_location_list(){
    //food
    let food_list = []
    every(("food") ,(f) => {
        food_list.push(vec2(f.pos.x, f.pos.y))
    })
    // console.log(food_list)
    return food_list

}
// randomly make the cat walk around
loop(randBetween(1,2), () => {
    let food_list = []
    if (time() > 1){
        food_list = return_food_location_list()
            every("cat", (c)=>{
                if (doSometimes(0.2)){
                    c.dest =  generate_loc_on_ground()
                    if (!c.sleeping){
                        if (doSometimes(0.8)){
                            if (food_list.length !== 0){
                                // console.log(food_list)
                                c.dest = choose(food_list)
                        }
                        } 
                        // console.log('going to ', c.dest)
                }
                }
                
            });
    }
});
// localStorage.clear();

wait(0.0, () => { loadGame()})
addStereo()
onUpdate(() => {
    // these events happen every frame!
    cursor("default")
})
