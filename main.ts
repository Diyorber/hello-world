input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sword)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.Rollerskate)
        music.playMelody("A G F G A F G - ", 174)
        music.playMelody("G F G - G F G - ", 176)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.StickFigure)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Happy)
    }
})
basic.showIcon(IconNames.Heart)
