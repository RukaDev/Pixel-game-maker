---
sidebar_position: 2
---

## `Methods`

### animate()

```js
player:animate(key: int) -> none
```

Sets the spritesheet to the new key value

---

### stop()

```js
player:stop() -> none
```

Stops the player 

---

### canAttack() 

```js
player:canAttack() -> boolean
```

Returns true if the player can attack

---


### calculatePosition()

```js
player:calculatePosition(lastKey: string) -> array
```

Calculates the next x, y position of the player

---

### canMove()

```js
player:canMove() -> boolean
```

Returns true if the player can move

---

### attack()

```js
player:attack(enemies) -> none
```

Plays attack animation and runs hit detection on the passed enemies

### attackFinished()

```js
player:attackFinished() -> none
```

Finishes a player attack

---

## `Properties`

### playerSprite
    Type: sprite instance
    Def:  Sprite to represent the player

### attackSprite
    Type: sprite instance
    Def:  Sprite to represent player attacks

### zone
    Type: zone
    Def:  A zone instance

### position
    Type: table
    Def:  Position of the sprite on the canvas


