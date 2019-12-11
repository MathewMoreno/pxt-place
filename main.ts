sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Enemy1.destroy()
    Bard.say("Yay!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
let Enemy1: Sprite = null
let Bard: Sprite = null
scene.setBackgroundColor(9)
Bard = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 8 5 2 5 8 a f . . . . 
. . . f 8 a a a a a 8 a f . . . 
. . . f a a f f f f a 8 f . . . 
. . . f a f f d d f f a f . . . 
. . f a f d f d d f d f a f . . 
. . f a f d 3 d d 3 d f a f . . 
. . f a a f d d d d f a a f . . 
. f a a f 3 f f f f 3 f a a f . 
. . f f d 3 b 3 3 b 3 d f f . . 
. . f d d f 3 b b 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 b 3 3 b 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
Bard.setPosition(117, 25)
controller.moveSprite(Bard)
let Message = "I'm ready to heal"
Bard.say(Message)
info.setLife(1)
let SwordsWoman = sprites.create(img`
. . . . . . . . . . . . f c 
. . . . f f f f f . f f c f 
. . . f f c c c c f f c f f 
. . f f b c c c c b f f c c 
. f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c 4 4 c c c c . b 
. . f c c 4 4 4 4 c c f . b 
. . . f b f 4 4 f b f . b c 
. . f 4 1 f d d f 1 . b c b 
. . . f d d d d d c c c e . 
. f e f f b b b e e b c e . 
. e 4 f b 3 3 3 e b e c . . 
. . . f 6 6 6 6 b b b . . . 
. . . f f f f f b b . . . . 
. . . f f f . . . . . . . . 
`, SpriteKind.Projectile)
SwordsWoman.setPosition(40, 40)
SwordsWoman.say("Lets slay those demons")
let Small_Dragon = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 
. 2 2 2 2 . . . . . . . 2 2 2 2 
2 f f 2 2 2 . . . . 2 2 2 4 4 4 
2 5 f 2 2 2 . . 2 2 2 4 4 2 2 2 
2 2 2 2 f 2 2 2 2 2 2 2 2 4 4 4 
2 f f f 2 2 4 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 4 4 4 2 2 . . . . 
. . . 2 2 2 2 2 2 2 4 4 4 2 2 . 
. . 2 4 2 . . . 2 2 2 2 4 4 4 4 
. . 2 4 2 . . . 2 2 . . . . . 4 
`, SpriteKind.Projectile)
Small_Dragon.setPosition(124, 92)
Small_Dragon.say("Growl* Growl*")
let Knight = sprites.create(img`
. . . . c c c c . . . . 
. . b c c b b c c b . . 
. c c b b b b b c c c . 
c c b b b b b b b b c c 
c b b b b b b b b b b c 
b b b b b b b b b b b b 
b b b b b b b b b b b b 
b b 4 f f 4 4 f f b b b 
b b 4 d d d d d d b b b 
. f e d d b b d d e f . 
. f f e 4 4 4 4 c c c c 
b 4 f b 1 1 1 c b b b b 
b b f 1 1 1 1 c b b d b 
4 b b 6 6 6 6 c b b b b 
. . b f f f f f c c c c 
. . . f f . . f f . . . 
`, SpriteKind.Projectile)
Knight.setPosition(35, 89)
Knight.say("Lets Go!!!")
Enemy1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 4 2 . . . . 4 2 . . . . 
. . . . 2 4 2 2 2 2 2 4 . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . 2 4 2 5 2 2 2 5 2 2 . . . 
. . 2 2 4 2 5 5 2 5 5 2 2 2 . . 
. . 2 4 2 2 2 2 2 2 2 2 4 2 . . 
. . 2 4 2 5 5 2 2 2 5 5 2 4 . . 
. . 2 4 2 2 5 5 5 5 5 2 2 2 . . 
. . 2 4 4 4 2 2 2 2 2 2 2 2 . . 
. . . 2 2 2 4 4 2 2 2 2 2 . . . 
. . . . 2 2 2 4 4 4 4 2 . . . . 
. . 2 2 2 4 4 4 2 2 2 2 2 2 . . 
. . 4 . 2 2 2 4 4 2 2 2 . 4 . . 
. . 2 . 2 2 2 2 4 4 4 2 . 2 . . 
`, SpriteKind.Enemy)
game.onUpdateInterval(500, function () {
    Enemy1.follow(Bard, 50)
})
