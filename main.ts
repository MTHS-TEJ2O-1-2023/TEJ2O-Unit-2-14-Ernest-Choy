/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: Oct 2023
 * This program makes pixels move down diagonaly when A button is pressed and up diagonally when B button is pressed.
*/

// variables
let sprite: game.LedSprite = null
let pixelCount = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// on button press A
input.onButtonPressed (Button.A, function() {
  basic.clearScreen()
  pixelCount = 0
  sprite = game.createSprite(0,0)

  // loop
  while (pixelCount <= 5) {
    sprite.set(LedSpriteProperty.X, pixelCount)
    sprite.set(LedSpriteProperty.Y, pixelCount)
    pixelCount = pixelCount + 1
    basic.pause(500)
  }

  // clear
  sprite.delete()
  basic.showIcon(IconNames.Happy)
})

// on button press B
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  pixelCount = 5
  sprite = game.createSprite(0, 0)

    // loop
  while (pixelCount >= 0) {
    sprite.set(LedSpriteProperty.X, pixelCount)
    sprite.set(LedSpriteProperty.Y, pixelCount)
    basic.pause(500)
    pixelCount = pixelCount - 1
  }

  // clear
  sprite.delete()
  basic.showIcon(IconNames.Happy)
})
