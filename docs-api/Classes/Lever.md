---
sidebar_position: 2
---

## `Static`

### activateAll()

```js
Lever.activateAll(levers: table) -> none
```

Activates all levers passed, regardless if canActivate() returns true.

### canActivateAll()
```js
Lever.canActivateAll(levers: table) -> none
```

Checks if each lever can be activated, and if so will activate them.

## `Methods`

### isActivated()

```js
lever:isActivated() -> boolean
```

Returns true if the instance has been activated.

---

### canActivate()

```js
lever:canActivate(position: table) -> boolean
```

Returns true if the instance can be activated.

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
    Def:  Sprite to represent the lever

### callback
    Type: Function
    Def:  Callback called on activation

### position
    Type: table
    Def:  Position of the sprite on the canvas


