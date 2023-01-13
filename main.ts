input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("F A C F D B G C ", 5000000000)
    basic.showIcon(IconNames.Sword)
})
basic.showIcon(IconNames.Heart)
