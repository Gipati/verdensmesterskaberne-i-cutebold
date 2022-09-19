radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        cuteBot.forward()
    } else if (receivedNumber == 1) {
        cuteBot.stopcar()
    } else if (receivedNumber == 2) {
        cuteBot.motors(20, 40)
    } else if (receivedNumber == 3) {
        cuteBot.motors(40, 20)
    } else if (receivedNumber == 4) {
        cuteBot.backforward()
    } else if (receivedNumber == 5) {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        for (let index = 0; index < 3; index++) {
            cuteBot.moveTime(cuteBot.Direction.left, 100, 2)
        }
    } else {
    	
    }
})
radio.setGroup(93)
music.playMelody("C D E F G A B C5 ", 315)
cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
