---
sidebar_position: 2
---

## `Methods`

### collision()

```js
boundary:collision(sprite: sprite, x: int, y: int) -> boolean
```

Returns true if the sprite collides with the boundary instance

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


