input.onButtonPressed(Button.A, function () {
    change = 1
})
input.onButtonPressed(Button.B, function () {
    change = 2
})
let change = 0
let x = 4
let dx = 1
let x2 = 3
let dx2 = 1
let x3 = 2
let dx3 = 1
let x4 = 1
let dx4 = 1
let x5 = 0
let dx5 = 1
let y = 0
basic.forever(function () {
    if (change == 1) {
        basic.clearScreen()
        y = 0
        if (x >= 4) {
            dx += -1
        } else if (x <= 0) {
            dx += 1
        }
        if (x2 >= 4) {
            dx2 += -1
        } else if (x2 <= 0) {
            dx2 += 1
        }
        if (x3 >= 4) {
            dx3 += -1
        } else if (x3 <= 0) {
            dx3 += 1
        }
        if (x4 >= 4) {
            dx4 += -1
        } else if (x4 <= 0) {
            dx4 += 1
        }
        if (x5 >= 4) {
            dx5 += -1
        } else if (x5 <= 0) {
            dx5 += 1
        }
        x += dx
        x2 += dx2
        x3 += dx3
        x4 += dx4
        x5 += dx5
        for (let index = 0; index < 5; index++) {
            led.plotBrightness(x5, y, 50)
            led.plotBrightness(x4, y, 100)
            led.plotBrightness(x3, y, 150)
            led.plotBrightness(x2, y, 200)
            led.plot(x, y)
            y += 1
        }
        basic.pause(100)
    } else if (change == 2) {
        basic.clearScreen()
        y = 0
        if (x >= 4) {
            dx += -1
        } else if (x <= 0) {
            dx += 1
        }
        if (x2 >= 4) {
            dx2 += -1
        } else if (x2 <= 0) {
            dx2 += 1
        }
        if (x3 >= 4) {
            dx3 += -1
        } else if (x3 <= 0) {
            dx3 += 1
        }
        if (x4 >= 4) {
            dx4 += -1
        } else if (x4 <= 0) {
            dx4 += 1
        }
        if (x5 >= 4) {
            dx5 += -1
        } else if (x5 <= 0) {
            dx5 += 1
        }
        x += dx
        x2 += dx2
        x3 += dx3
        x4 += dx4
        x5 += dx5
        for (let index = 0; index < 5; index++) {
            led.plotBrightness(y, x5, 50)
            led.plotBrightness(y, x4, 100)
            led.plotBrightness(y, x3, 150)
            led.plotBrightness(y, x2, 200)
            led.plot(y, x)
            y += 1
        }
        basic.pause(100)
    }
})
