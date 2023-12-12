if (input.buttonIsPressed(Button.A)) {
	
} else {
	
}
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        # # # # #
        . . . . .
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    basic.pause(2000)
})
