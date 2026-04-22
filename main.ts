/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Katherine
 * Created on: Apr 2026
 * This program make the pixils move...but without alolot of code!!
*/

// variables
let counting1 = 0
let counting2 = 0
let sprite: game.LedSprite = null

// begining
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// moves like a CLOCKKKK when a is pressed..CLOCKITTT
input.onButtonPressed(Button.A, function () {

    // clear
    basic.clearScreen()
    sprite = game.createSprite(0, 0)
    counting1 = 0
    counting2 = 0

    // loopdyloopdyloop
    while (counting1 < 4) {
        counting1 = 0
        counting2 = 0
        while (counting2 < 4) {
            sprite.move(1)
            basic.pause(300)
            counting2++
        }
        sprite.turn(Direction.Right, 90)
    }
    sprite.delete()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
