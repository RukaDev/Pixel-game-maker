---
sidebar_position: 2
---

### `Static`

## assignCallback()

```js
Trap.assignCallback(traps: array, callback: func) -> none
```

Assigns callbacks to each trap instance

---

## `Methods`

### isActive()

```js
trap:isActive() -> boolean
```

Returns true if the instance is active

---

### reset()

```js
trap:reset() -> none
```

Resets the trap

---

### set()

```js
trap:set() -> none
```

Sets the trap()

---

### hitPlayer()

```js
trap:hitPlayer() -> boolean
```

Returns true if the trap hits the player

---

### setMovement()

```js
trap:setMovement(intervalLength: int, delayLength: int) -> none
```

Sets the trap to be active for intervalLength, and delayed for delayLength

---

## `Properties`

### sprite
    Type: sprite instance
    Def:  Sprite to represent the trap

### zone
    Type: zone
    Def:  A zone instance

### position
    Type: table
    Def:  Position of the sprite on the canvas


