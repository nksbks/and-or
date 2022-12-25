function DO () {
    basic.showIcon(IconNames.Heart)
    music.playMelody("C D E F G A B C5 ", 120)
    basic.pause(500)
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    if (input.soundLevel() >= 80) {
        DO()
    }
})
input.onButtonPressed(Button.A, function () {
    if (gate > 0) {
        DO()
    }
})
input.onSound(DetectedSound.Loud, function () {
    if (gate > 0) {
        DO()
    }
})
input.onButtonPressed(Button.B, function () {
    if (gate > 0) {
        DO()
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
input.setSoundThreshold(SoundThreshold.Loud, 80)
gate = 1
basic.showString("OR")
