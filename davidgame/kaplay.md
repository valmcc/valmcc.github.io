Basic kaplay info:

### Core Functions

*   **`kaplay(options?: KAPLAYOpt)`**
    *   **Description**: This is the entry point for any Kaplay game. It initializes the Kaplay context, creates a canvas, and imports all Kaplay functions into the global namespace unless configured otherwise.
    *   **Usage**: It can be called without arguments for a default fullscreen setup or with an options object to customize properties like canvas dimensions, background color, and a specific canvas element to use.
    *   **Example**:
        ```javascript
        // Initialize with custom options
        kaplay({
            width: 640,
            height: 480,
            canvas: document.querySelector("#my-game-canvas"),
            background: [0, 0, 0], // Black background
        });
        ```

### Game Objects & Components

*   **`add(components: Comp[]): GameObj`**
    *   **Description**: The primary function for creating game objects. It takes an array of components that define the object's properties and behaviors.
    *   **Components**: These are functions that grant capabilities. Common ones include:
        *   `pos(x, y)`: Sets the object's position.
        *   `sprite(name)`: Gives the object a visual appearance using a loaded sprite.
        *   `text(str)`: Displays text.
        *   `area()`: Defines a collider shape for collision detection.
        *   `body()`: Gives the object solid properties, allowing it to collide with other solid objects and be affected by gravity.
        *   `rotate(angle)`: Sets the rotation in degrees.
        *   `color(r, g, b)`: Sets the object's color (between 0 and 255).
    *   **Example**:
        ```javascript
        // Create a player object with position, sprite, and collision area
        const player = add([
            pos(80, 40),
            sprite("bean"),
            area(),
            body(),
            "player", // A tag for easy retrieval
        ]);
        ```

*   **`destroy(obj: GameObj)`**: Removes a game object from the scene.
*   **`get(tag: string): GameObj[]`**: Returns an array of all game objects that have been given a specific tag.

### Asset Loading

*   **`loadSprite(name: string, src: string, options?: LoadSpriteOpt)`**
    *   **Description**: Loads an image to be used as a sprite. It can load from a local path or a URL. For local files, a static file server is required due to browser security policies.
    *   **Usage**: It can also slice a spritesheet into animations by providing `sliceX`, `sliceY`, and an `anims` object.
    *   **Example**:
        ```javascript
        // Load a simple sprite from a URL
        loadSprite("apple", "https://play.kaplayjs.com/sprites/apple.png");

        // Load and define animations from a local spritesheet
        loadSprite("hero", "hero_sheet.png", {
            sliceX: 9,
            sliceY: 1,
            anims: {
                idle: { from: 0, to: 3 },
                run: { from: 4, to: 8 },
            },
        });
        ```

*   **`loadSound(name: string, src: string)`**: Loads an audio file (e.g., .mp3, .wav) for sound effects or music.
*   **`loadFont(name: string, src: string, options?)`**: Loads a custom font file (e.g., .ttf, .woff).

### Input Handling

*   **`onKeyPress(key: Key | Key[], action: () => void)`**: Executes the action once when a keyboard key is pressed down.
*   **`onKeyDown(key: Key | Key[], action: () => void)`**: Executes the action continuously every frame while a key is held down.
*   **`onMousePress(action: (pos: Vec2) => void)`**: Executes the action once when a mouse button is clicked.
*   **`mousePos(): Vec2`**: Returns the current position of the mouse cursor as a vector.

### Game Logic and Events

*   **`onUpdate(tag: string, action: (obj: GameObj) => void)`**: Registers a function that runs on every frame for every game object with the specified tag.
*   **`onCollide(tag1: string, tag2: string, action: (a: GameObj, b: GameObj) => void)`**: Triggers when two objects with the specified tags and `area` components collide.
*   **`scene(name: string, def: () => void)`**: Defines a new game scene (like a level or a menu). The provided function runs when the scene starts.
*   **`go(name: string, ...args)`**: Transitions the game to a different, previously defined scene.

### Audio and Camera

*   **`play(name: string, options?: AudioPlayOpt)`**: Plays a loaded sound. You can configure properties like volume and whether the sound should loop.
*   **`camPos(p: Vec2)`**: Sets the camera's position.
*   **`camScale(s: Vec2)`**: Zooms the camera in or out.
*   **`shake(intensity: number)`**: Shakes the camera for a screen-shake effect.