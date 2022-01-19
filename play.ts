



//% weight=0 color=#0fbc11  icon="\uf207" block="play1"
namespace play {


    /**
    * PLAY: full speed move right
    */
    //% weight=9
    //% blockId=play_forward block="forward"
    export function forward() {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P3, 512)
    pins.analogWritePin(AnalogPin.P4, 512)
    basic.showArrow(ArrowNames.North)
}


    /**
    * PLAY: full speed move back
    */
    //% weight=8
    //% blockId=play_back block="back"
    export function back () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P3, 512)
    pins.analogWritePin(AnalogPin.P4, 512)
    basic.showArrow(ArrowNames.South)
}



    /**
    * PLAY: full speed turn left
    */
    //% weight=7
    //% blockId=play_left block="left"
    export function left () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P3, 512)
    pins.analogWritePin(AnalogPin.P4, 512)
    basic.showArrow(ArrowNames.West)
}


    /**
    * PLAY: full speed move right
    */
    //% weight=6
    //% blockId=play_right block="right"
    export function right () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P3, 512)
    pins.analogWritePin(AnalogPin.P4, 512)
    basic.showArrow(ArrowNames.East)
}


    /**
    * PLAY: stop
    */
    //% weight=5
    //% blockId=play_stop block="stop"
    export function stop () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P3, 1023)
    pins.analogWritePin(AnalogPin.P4, 1023)
    basic.showString("Stop")
}
    /**
    * PLAY: ok
    */
    //% weight=4
    //% blockId=play_ok block="ok"
    export function ok () {
    basic.showString("ok")
}


}

