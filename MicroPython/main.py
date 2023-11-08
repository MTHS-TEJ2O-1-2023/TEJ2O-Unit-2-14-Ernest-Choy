"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import*

# variables
pixel_count = 0 

# setup
display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        display.clear()
        loopCount = 0

        while pixel_count <= 5: 
            display.set_pixel(pixel_count ,pixel_count, 255)
            pixel_count = pixel_count + 1

    if button_b.is_pressed():
        display.clear()
        loopCount = 5

        while pixel_count >= 0: 
            display.set_pixel(pixel_count ,pixel_count, 255)
            pixel_count = pixel_count - 1

    display.clear()
    display.show(Image.SAD)
