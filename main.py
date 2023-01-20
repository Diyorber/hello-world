def on_button_pressed_a():
    basic.show_icon(IconNames.HAPPY)
    basic.show_icon(IconNames.MEH)
    basic.show_icon(IconNames.STICK_FIGURE)
    basic.show_icon(IconNames.PITCHFORK)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_free_fall():
    basic.show_leds("""
        # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
    """)
    basic.show_icon(IconNames.HEART)
input.on_gesture(Gesture.FREE_FALL, on_gesture_free_fall)

def on_button_pressed_ab():
    basic.show_icon(IconNames.ROLLERSKATE)
    basic.show_leds("""
        . . . # .
                . . . # .
                . . . # .
                . . . # .
                . # # # .
    """)
    basic.show_string("\"Diyorbek is Kyle's Son\" ")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    for index in range(1):
        basic.show_icon(IconNames.SWORD)
        basic.show_icon(IconNames.HEART)
        basic.show_icon(IconNames.YES)
        basic.show_icon(IconNames.ROLLERSKATE)
        music.play_melody("A G F G A F G - ", 174)
        music.play_melody("G F G - G F G - ", 176)
        music.play_melody("A G F G A F G - ", 176)
        music.play_melody("G A G A G E C5 - ", 158)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    for index2 in range(4):
        music.play_sound_effect(music.builtin_sound_effect(soundExpression.twinkle),
            SoundExpressionPlayMode.UNTIL_DONE)
        basic.show_icon(IconNames.HEART)
        basic.show_icon(IconNames.STICK_FIGURE)
        basic.show_icon(IconNames.HEART)
        basic.show_icon(IconNames.HAPPY)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

basic.show_icon(IconNames.HEART)