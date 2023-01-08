---
sidebar_position: 2
---

## `Methods`

### removeValue()

```js
Table.removeValue(source: array, value: value) -> none
```

Removes the value from the given array

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

### callback
    Type: Function
    Def:  Callback called on activation
    
### image
    Type: Image()
    Def:  Sprite to represent the lever

### position
    Type: table
    Def:  Position of the sprite on the canvas


