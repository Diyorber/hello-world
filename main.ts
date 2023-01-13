input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C B D G B D C A ", 174)
    basic.showIcon(IconNames.Sword)
})
basic.showIcon(IconNames.Heart)
