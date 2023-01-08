---
sidebar_position: 4
---

# Game

## Core Functions

Each game contains three core functions

### Setup

Used to setup all the assets, images, and other info used in the game. Images is passed as a paramter and represents the pre-loaded images set in the pre-game file.

```js title="src/js/scripts/home.js"
setupGame(images) {
    new Level(
        images.background,
        images.foreground,
        {x: -15, y: -1600}
    )

    // Zones
    var boundaryZone = new Zone(boundaryData)
    var crystalZone = new Zone(crystalData)

    // Player
    var player = new Player({
        boundaryZones: [boundaryZone],
        playerImage: images.player
    })

    // Crystal
    var crystal = new Crystal({
        image: images.crystal,
        positionZone: crystalZone,
        frame: {xmax: 3, ymax: 1},
        velocity: 40,
        scale: 2
    })

    startGame(player, crystal)
}
```

### Start

This is where the core game logic is. It controls how the game functions, and all the assets created in the setup are passed as the parameter.

```js title="src/js/scripts/home.js"
startGame(player, crystal) {
    const canvas = Canvas.getInstance()
    const input = Input.getInstance()

    // Core loop
    function step() {
        const animId = window.requestAnimationFrame(step)

        // Crystal
        if (crystal.reached(player.playerSprite)) {
            if (crystal.isLast()) {
                endGame(animId)
            } else {
                crystal.nextPosition()
            }
        }

        // Movement
        if (input.isPressed(['w', 'a', 's', 'd'])) {
            var {x, y} = player.calculatePosition(input.lastKey)
            if (player.canMove(x, y)) {
                player.animate(input.lastKey)
                canvas.moveElements(x, y)
            }
        } else {
            player.stop()
        }

        canvas.drawElements()
    }
}
```

### End

This function is called within the startGame() function whenever the user determines the game is complete. It will return back to the world map while playing a fade out effect on the canvas and setting any additional data.

```js title="src/js/scripts/home.js"
endGame(animId) {
    window.cancelAnimationFrame(animId)
    fadeOut('home')
}
```
