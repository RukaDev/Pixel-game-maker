---
sidebar_position: 2
---

## `Methods`

### removeBoundary()

```js
zone:removeBoundary(i: int)
```

Removes a boundary instance

---

### mapPosition

```js
zone:mapPosition(elements: array, position: dict) -> Map
```

Maps each element to a boundary within the zone

---



### cleanup()

```js
boundary:cleanup() -> none
```

Removes all references of the instance

---

### proximity()

```js
boundary:proximity(p1: array, amnt: int) -> boolean
```

Returns true if p1 is within amnt of the instance

---

### inside()

```js
boundary:inside(sprite: sprite) -> boolean
```

Returns true if the sprite is within the instance

---

### draw()

```js
boundary:draw() -> none
```

Draws the instance on the canvas

---

## `Properties`

### zone
    Type: zone
    Def:  A zone instance

### position
    Type: table
    Def:  Position of the sprite on the canvas


