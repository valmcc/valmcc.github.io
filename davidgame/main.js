// main.js
import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
// Get the container element
const container = document.getElementById("game-container");

// Calculate game dimensions based on container
const gameWidth = 640;
const gameHeight = 480;

// Initialize kaplay with responsive settings
kaplay({
  width: gameWidth,
  height: gameHeight,
  letterbox: true,
  background: "#c3a7b1",
  // Use full container size but maintain aspect ratio
  stretch: false,
  pixelDensity: 2,
  // scale: Math.min(container.clientWidth / gameWidth, container.clientHeight / gameHeight),
  canvas: document.getElementById("canvas"),
  font: "Comic Sans MS"
});

// Handle window resize
window.addEventListener("resize", () => {
  const scale = Math.min(container.clientWidth / gameWidth, container.clientHeight / gameHeight);
  k.scale = scale;
});
loadSound("wingame", "wingame.wav");
loadSound("sea_bg_sound", "sea_bg_sound.wav");
loadSound("bobberdown", "bobberdown.wav");
loadSound("cast_rod", "cast_rod.wav");
loadSound("getfish", "getfish.wav");
loadSound("losefish", "losefish.wav");
loadSound("fishalert", "fishalert.wav");
loadSound("reeling", "reeling.mp3");

loadSprite("water", "water.png");
loadSprite("boat", "boat.png");
loadSprite("fish", "fish.png");
loadSprite("backdrop", "backdrop.png");
loadSprite("boatfish", "boatfish.png");
loadSprite("rod", "rod.png",    
  {sliceX: 5,
    sliceY: 1,
    anims: {
        cast: {
            from: 0,
            to: 4,
        },
        idle: {
            from: 2,
            to: 4,
            loop: true,
        },
        reeling: {
            from: 2,
            to: 4,
            loop: true,
        },
    },
});


const boat = add([
  sprite("boat"),
  pos(400,200),
  z(11),
  'boat',
  { baseY: 200, index: 0 }
]);
add([
  sprite("backdrop"),
  pos(0,0),
  z(0),
]);
add([
  sprite("water"),
  pos(0,300+32),
  outline(4),
  z(10),
  'water',
  { baseY: 300+32, index: 0 }
]);
add([
  sprite("water"),
  pos(0,300+32+32),
  outline(4),
  z(12),
  'water',
  { baseY: 300+32+32, index: 1 }
]);
add([
  sprite("water"),
  pos(0,300+32+32+32),
  outline(4),
  z(13),
  'water',
  { baseY: 300+32+32+32, index: 2 }
]);

onUpdate("water", (w) => {
  const t = time();
  w.pos.x = 20 * Math.sin(t * 0.5 + w.index)-40;
  w.pos.y = w.baseY + 5 * Math.sin(t * 2 + w.index);
});

onUpdate("boat", (b) => {
  const t = time();
  b.pos.x = 10 * Math.sin(t * 0.5 + b.index)+400;
  b.pos.y = b.baseY + 5 * Math.sin(t * 2 + b.index);
});

// Fishing game variables
let state = "TITLE"; // TITLE, IDLE, CAST, WAITING, BITE, MINIGAME, COOLDOWN
let fishingRod = null;
let fishingLine = null;
let exclamationMark = null;
let fishingBar = null;
let catchZone = null;
let fishIcon = null;
let progressBar = null;
let progressBarBg = null;
let progress = 50;
let catchZoneVelocity = 0;
let fishY = 0;
let fishVelocity = 0;
let fishDirectionTimer = 0;
let fishDifficulty = "EASY"; // EASY, MEDIUM, HARD

// Fish collection
let fishCaught = 0;
let boatFish = [];
const FISH_NAMES = [
    "Weird 8 fish",
    "Poolcue fish",
    "DJ fish",
    "Crypto fish",
    "Yellow 8 fish",
    "Pilot fish",
    "Golf fish",
    "Sauna fish",
    "Painter fish",
    "Rapper fish",
];
FISH_NAMES.forEach(item => loadSprite(item, item + ".png"));

// Load title sprite
loadSprite("title", "title.png");

// Add background sound instance
let seaBgSound = null;

// Add title screen
const titleScreen = add([
    sprite("title"),
    pos(0,0),
    z(1000),
    "titleScreen"
]);
titleScreen.add([
    text(`press/click to play`),
    pos(10, 10),
    color(255,255,255),
    z(10000),])
// Persistent fish counter
add([
    text(`Fish caught: ${fishCaught}/8`),
    pos(10, 10),
    color(0,0,0),
    z(100),
    "fishCounter"
]);
const reeling = play('reeling', {loop: true})
reeling.stop()
// Confetti function
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        add([
            rect(5,5),
            pos(rand(0,640), rand(-100,0)),
            color(rand(0,255), rand(0,255), rand(0,255)),
            move(DOWN, rand(200,500)),
            rotate(rand(0,360)),
            z(1000),
            opacity(1),
            lifespan(2, { fade: 1.5 }),
        ]);
    }
}

// Reset fishing objects
function resetFishing() {
    if (fishingRod) destroy(fishingRod);
    if (fishingLine) destroy(fishingLine);
    if (exclamationMark) destroy(exclamationMark);
    if (fishingBar) destroy(fishingBar);
    if (catchZone) destroy(catchZone);
    if (fishIcon) destroy(fishIcon);
    if (progressBar) destroy(progressBar);
    if (progressBarBg) destroy(progressBarBg);
    fishingRod = null;
    fishingLine = null;
    exclamationMark = null;
    fishingBar = null;
    catchZone = null;
    fishIcon = null;
    progressBar = null;
    progressBarBg = null;
    reeling.stop()
}

// Handle mouse clicks
onMousePress(() => {
    if (state === "TITLE") {
        destroy(titleScreen);
        state = "IDLE";
        // Start background sound when game starts
        seaBgSound = play("sea_bg_sound", { loop: true , volume:0.2});
    } else if (state === "IDLE") {
        state = "CAST";
        resetFishing();
        // Create fishing rod and line
        fishingRod = boat.add([
            sprite("rod"),
            scale(2),
            pos(50,-25),
            rotate(30),
            z(12)
        ]);
        fishingRod.play('cast');

        wait(0.3, () => {
        fishingLine = fishingRod.add([
            rect(1, 150),
            pos(17,50),
            rotate(30),
            color(255,255,255),
            z(11)
        ]);
        });
        wait(0.01, () => {play("cast_rod")})
        // Transition to waiting state after 0.5s
        wait(0.5, () => {
            if (state === "CAST") {
                
                state = "WAITING";
                fishingRod.play('idle', { speed: 1 });
                // Play bobber sound after cast delay
                play("bobberdown");
                // Set random bite time (1-5s)
                wait(rand(1,5), () => {
                    if (state === "WAITING") {
                        state = "BITE";
                        // Show exclamation mark
                        play('fishalert')
                        exclamationMark = add([
                            text("!"),
                            pos(boat.pos.x + 80, boat.pos.y - 50),
                            color(255,0,0),
                            scale(2),
                            outline(5),
                            z(100)
                        ]);
                        // Give player 0.5s to react
                        wait(0.5, () => {
                            if (state === "BITE") {
                                resetFishing();
                                state = "IDLE";
                            }
                        });
                    }
                });
            }
        });
    } else if (state === "BITE") {
        // Start mini-game
        state = "MINIGAME";
        reeling.play()
        destroy(exclamationMark);
        exclamationMark = null;
        
        // Initialize mini-game variables
        progress = 50;
        catchZoneVelocity = 0;
        fishY = 150; // start at middle of bar
        fishVelocity = 0;
        fishDirectionTimer = time() + 1; // change direction after 1s
        fishDifficulty = ["EASY", "MEDIUM", "HARD"][Math.floor(rand(0, 3))]; // random difficulty
        
        // Create fishing bar (vertical background)
        fishingBar = add([
            rect(30, 300, {radius:4}),
            pos(50, 50),
            color(75,75,75),
            outline(2),
            z(100)
        ]);
        
        // Create catch zone (green rectangle)
        catchZone = add([
            rect(30, 60, {radius:4}), // 20% of bar height
            pos(50, 120), // start at middle
            color(141,237,167),
            z(101)
        ]);
        
        // Create fish icon
        fishIcon = add([
            sprite('fish'),
            pos(45, fishY), // center in bar
            z(102)
        ]);
        
        // Create progress bar at bottom
        progressBarBg = add([
            rect(200, 20, {radius:4}),
            pos(220, 400),
            color(0,0,0),
            outline(2),
            z(100)
        ]);
        progressBar = add([
            rect(progress * 2, 20, {radius:4}), // 50% width
            pos(220, 400),
            color(68,197,91),
            z(101)
        ]);
        progressBar.add([
            text("fish catching progress"),
            pos(-30,-20),
            color(0,0,0),
            scale(0.5),
            z(102)
        ]);
        
    }
});


onMouseDown(() => {
    if (state === "MINIGAME") {
        // Apply upward force to catch zone
        catchZoneVelocity -= 1.2;
    } 
});


onMousePress(() => {
    if (state === "MINIGAME") {
        fishingRod.play('reeling', { speed: 10 });
    } 
});


onMouseRelease(() => {
    if (state === "MINIGAME") {
        fishingRod.play('reeling', { speed: 1 });
    } 
});

// Handle mini-game updates
onUpdate(() => {
    if (state === "MINIGAME") {
        // Apply gravity to catch zone
        catchZoneVelocity += 0.7;
        
        // Apply friction
        catchZoneVelocity *= 0.9;
        
        // Update catch zone position
        catchZone.pos.y += catchZoneVelocity;
        
        // Keep catch zone within fishing bar
        if (catchZone.pos.y < 50) {
            catchZone.pos.y = 50;
            catchZoneVelocity = 0;
        } else if (catchZone.pos.y > 300 - 60 + 50) { // bar height - zone height + bar top
            catchZone.pos.y = 300 - 60 + 50;
            catchZoneVelocity = 0;
        }
        
        // Update fish movement
        if (time() > fishDirectionTimer) {
            // Change direction based on difficulty
            let speed;
            switch(fishDifficulty) {
                case "EASY": speed = rand(0.5, 1.5); break;
                case "MEDIUM": speed = rand(1, 2.5); break;
                case "HARD": speed = rand(2, 3); break;
            }
            fishVelocity = rand() > 0.5 ? speed : -speed;
            fishDirectionTimer = time() + rand(0.5, 2);
        }
        
        // Update fish position
        fishY += fishVelocity;
        if (fishY < 50) fishY = 50;
        if (fishY > 300 - 20 + 50) fishY = 300 - 20 + 50; // bar height - fish height + bar top
        fishIcon.pos.y = fishY;
        
        // Check if fish is in catch zone
        const fishCenter = fishY + 10; // middle of fish
        const zoneTop = catchZone.pos.y;
        const zoneBottom = catchZone.pos.y + 60;
        
        if (fishCenter > zoneTop && fishCenter < zoneBottom) {
            progress += 0.7; // fill progress
        } else {
            progress -= 0.7; // drain progress
        }
        
        // Clamp progress between 0-100
        if (progress > 100) progress = 100;
        if (progress < 0) progress = 0;
        
        // Update progress bar
        progressBar.width = progress * 2;
        
        // Check win/lose conditions
        if (progress >= 100) {
            fishCaught++;
            
            // Random fish type
            const fishType = Math.floor(rand(0, FISH_NAMES.length));
            const fishName = FISH_NAMES[fishType];
            
            // Play fish caught sound
            play("getfish");
            
            // Create confetti
            createConfetti();
            stop('reeling')
            // Show centered caught fish popup
            const popup = add([
                rect(350, 250, {radius: 20}),
                pos(145, 115), // centered at (640-350)/2=145, (480-250)/2=115
                color(249,147,138),
                z(200),
                "popup"
            ]);
            popup.add([
                text(`You caught a ${fishName}!`, { width: 330 }),
                pos(10, 10),
                color(0,0,0),
                scale(0.5),
                z(201)
            ]);
            popup.add([
                sprite(fishName),
                pos(175, 70), // centered in popup (350-100)/2=125 -> 125+50=175
                scale(0.5),
                z(201)
            ]);
            
            // Add fish to boat stack
            const fishOnBoat = boat.add([
                sprite("boatfish"),
                pos(130, -boatFish.length * 10 + 150),
                scale(1),
                z(13)
            ]);
            boatFish.push(fishOnBoat);
            
            resetFishing();
            state = "COOLDOWN";
            
            // Update persistent fish counter
            const fishCounterObj = get("fishCounter")[0];
            if (fishCounterObj) {
                fishCounterObj.text = `Fish caught: ${fishCaught}/8`;
            }
            
            // Win condition
            if (fishCaught >= 8) {
                // Play win game sound
                play("wingame");
                add([
                    text("You win! Happy BDAY!!"),
                    pos(200, 200),
                    color(0,255,0),
                    z(100),
                    opacity(1),
                    lifespan(5, { fade: 0.5 }),
                ]);
            }
            
            // Cooldown before next cast
            wait(2, () => {
                destroy(popup);
                state = "IDLE";
            });
        } else if (progress <= 0) {
            // Play lose fish sound
            wait(0.01, () => {play("losefish")})
            add([
                text("The fish got away!"),
                pos(200, 200),
                color(255,0,0),
                z(100),
                opacity(1),
                lifespan(1, {
                fade: 0.5 
                }),
            ]);
            resetFishing();
            state = "IDLE";
        }
        
    }
});
