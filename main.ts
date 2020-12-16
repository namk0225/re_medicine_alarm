input.onButtonPressed(Button.A, function () {
    time1 = 0
    _1번약통 += 1
    if (_1번약통 % 2 != 0) {
        servos.P0.setAngle(90)
    } else {
        servos.P0.setAngle(0)
    }
})
input.onButtonPressed(Button.B, function () {
    time2 = 0
    _2번약통 += 1
    if (_2번약통 % 2 != 0) {
        servos.P1.setAngle(90)
    } else {
        servos.P1.setAngle(0)
    }
})
let _2번약통 = 0
let _1번약통 = 0
let time2 = 0
let time1 = 0
servos.P0.setAngle(0)
servos.P1.setAngle(0)
let strip1 = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
let strip2 = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)
time1 = 0
time2 = 0
_1번약통 = 0
_2번약통 = 0
basic.forever(function () {
    if (time1 <= 10800) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (time1 > 10800 && time1 <= 21600) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (time1 > 21600 && time1 <= 32400) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (time1 > 32400 && time1 <= 43200) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else {
        strip1.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (time2 <= 10800) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (time2 > 10800 && time2 <= 21600) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (time2 > 21600 && time2 <= 32400) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (time2 > 32400 && time2 <= 43200) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else {
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
basic.forever(function () {
    if (time1 == 43199) {
        music.playMelody("G G C5 C5 G G C C ", 400)
    }
    if (time2 == 43201) {
        music.playMelody("C5 C5 C C C5 C5 C C5 ", 400)
    }
})
basic.forever(function () {
    time1 += 1
    basic.pause(1000)
})
basic.forever(function () {
    time2 += 1
    basic.pause(1000)
})
