radio.onReceivedString(function (receivedString) {
    EID = receivedString.charAt(0)
    if (EID != SID) {
        basic.showString(receivedString)
        radio.sendString(receivedString)
    }
})
let EID = ""
let SID = ""
basic.setLedColor(0xff0000)
DHT11.setPin(DigitalPin.P3)
SID = "B"
let Ti = "Ti"
let Te = "Te"
let Le = "Le"
let STXT = "STXT"
EID = "EID"
basic.pause(5000)
radio.setGroup(82)
radio.setTransmitPower(7)
radio.setFrequencyBand(82)
basic.turnRgbLedOff()
basic.forever(function () {
    Ti = convertToText(input.temperature())
    basic.pause(2000)
    Te = convertToText(DHT11.temperature())
    basic.pause(2000)
    Le = convertToText(DHT11.humidity())
    basic.pause(2000)
    STXT = convertToText("" + SID + "," + Ti + "," + Te + "," + Le)
    basic.showString(STXT)
    radio.sendString(STXT)
})
