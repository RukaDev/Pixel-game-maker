---
sidebar_position: 2
---

## `Static`

### moveAll()

```js
Enemy.moveAll(enemies: array) -> none
```

Move all the enemies if canMove() returns true

---

### removeAll()

```js
Enemy.removeAll(enemies: array) -> none
```

Removes all the enemies in the given array

---

## `Methods`

### moveVertical()

```js
enemy:moveVertical() -> none
```

Moves the instance vertical

---

### moveHorizontal()

```js
enemy.moveHorizontal() -> none
```

Moves the instance horizontally

---

### cleanup()

```js
enemy:cleanup() -> none
```

Removes all references of the instance

---

### move()

```js
enemy:move() -> none
```

Moves the enemy according to movex and movey

---

## `Properties`

### sprite
    Type: sprite instance
    Def:  Sprite to represent the enemy

### zone
    Type: zone
    Def:  A zone instance

### position
    Type: table
    Def:  Position of the sprite on the canvas


