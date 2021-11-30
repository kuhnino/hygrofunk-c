basic.setLedColor(0xff0000)
DHT11.setPin(DigitalPin.P3)
let SID = "Sauna"
let Ti = "Ti"
let Te = "Te"
let Le = "Le"
let STXT = "STXT"
basic.pause(5000)
radio.setGroup(82)
radio.setTransmitPower(7)
radio.setFrequencyBand(82)
basic.turnRgbLedOff()
basic.forever(function () {
    basic.setLedColor(0x00ff00)
    Ti = convertToText(input.temperature())
    basic.pause(2000)
    Te = convertToText(DHT11.temperature())
    basic.pause(2000)
    Le = convertToText(DHT11.humidity())
    basic.pause(2000)
    STXT = convertToText("" + SID + "," + Ti + "," + Te + "," + Le)
    basic.pause(2000)
    radio.sendString(STXT)
    basic.pause(2000)
    basic.showString(STXT)
    basic.setLedColor(0xffff00)
    basic.pause(60000)
    basic.turnRgbLedOff()
})
