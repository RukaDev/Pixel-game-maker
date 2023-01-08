---
sidebar_position: 1
---

## `Static`

### getAllCrystals()

```js
Crystal.getAllCrystals() -> array
```

Returns all active crystals

### canActivateAll()
```js
Lever.canActivateAll(levers: table) -> none
```

Checks if each lever can be activated, and if so will activate them.

## `Methods`

### cleanup()

```js
crystal:cleanup() -> null
```

Cleans up the crystal instance

---

### isLast()

```js
crystal:isLast() -> boolean
```

Returns true if instance is the last crystal left.

---

### activate()

```js
lever:activate() -> null
```

Plays an animation and calls the callback property if given.

---

## `Properties`

### sprite
    Type: sprite instance
    Def:  Sprite to represent the crystal

### positionZone
    Type: zone instance
    Def:  The set of positions a crystal takes in order

### boundary
    Type: boundary instance
    Def:  The crystal's hitbox

### position
    Type: table
    Def:  Position of the sprite on the canvas


