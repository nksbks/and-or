input.onButtonPressed(Button.AB, function () {
    if (input.soundLevel() >= 150) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    if (gate > 0) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onSound(DetectedSound.Loud, function () {
    if (gate > 0) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (gate > 0) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    gate = gate * -1
    if (gate > 0) {
        basic.showString("OR")
    } else {
        basic.showString("AND")
    }
})
let gate = 0
gate = 1
basic.showString("OR")
