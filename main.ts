input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Meh)
    basic.showIcon(IconNames.StickFigure)
    basic.showIcon(IconNames.Pitchfork)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Rollerskate)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        . # # # .
        `)
    basic.showString("\"Diyorbek is Kyle's Son\" ")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1; index++) {
        basic.showIcon(IconNames.Sword)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Yes)
        basic.showIcon(IconNames.Rollerskate)
        music.playMelody("A G F G A F G - ", 174)
        music.playMelody("G F G - G F G - ", 176)
        music.playMelody("A G F G A F G - ", 176)
        music.playMelody("G A G A G E C5 - ", 158)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.StickFigure)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Happy)
    }
})
basic.showIcon(IconNames.Heart)
