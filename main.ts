let score = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Sad)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    score = score - 1
    basic.showNumber(score)
    basic.showString("left!")
    basic.clearScreen()
    if (score < 1) {
        basic.showString("haha")
        music.play(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.UntilDone)
        score = 3
    }
})
