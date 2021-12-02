input.onButtonPressed(Button.A, function () {
    change = 1
})
input.onButtonPressed(Button.AB, function () {
    change = 3
    x = 4
    dx = 1
    x2 = 3
    dx2 = 1
    x3 = 2
    dx3 = 1
    x4 = 1
    dx4 = 1
    x5 = 0
    dx5 = 1
    y = 0
    y2 = randint(0, 5)
    y3 = randint(0, 5)
    y4 = randint(0, 5)
    y5 = randint(0, 5)
})
input.onButtonPressed(Button.B, function () {
    change = 2
})
let y5 = 0
let y4 = 0
let y3 = 0
let y2 = 0
let change = 0
let y = 0
let dx5 = 0
let x5 = 0
let dx4 = 0
let x4 = 0
let dx3 = 0
let x3 = 0
let dx2 = 0
let x2 = 0
let dx = 0
let x = 0
x = 4
dx = 1
x2 = 3
dx2 = 1
x3 = 2
dx3 = 1
x4 = 1
dx4 = 1
x5 = 0
dx5 = 1
y = 0
change = 1
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
    } else if (change == 3) {
        basic.clearScreen()
        if (y > 5) {
            y = 0
        }
        if (y2 > 5) {
            y2 = 0
        }
        if (y3 > 5) {
            y3 = 0
        }
        if (y4 > 5) {
            y4 = 0
        }
        if (y5 > 5) {
            y5 = 0
        }
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
        led.plotBrightness(x5, y, 50)
        led.plotBrightness(x4, y, 100)
        led.plotBrightness(x3, y, 150)
        led.plotBrightness(x2, y, 200)
        led.plot(x, y)
        y += 1
        led.plotBrightness(x5, y2, 50)
        led.plotBrightness(x4, y2, 100)
        led.plotBrightness(x3, y2, 150)
        led.plotBrightness(x2, y2, 200)
        led.plot(x, y2)
        y2 += 1
        led.plotBrightness(x5, y3, 50)
        led.plotBrightness(x4, y3, 100)
        led.plotBrightness(x3, y3, 150)
        led.plotBrightness(x2, y3, 200)
        led.plot(x, y3)
        y3 += 1
        led.plotBrightness(x5, y4, 50)
        led.plotBrightness(x4, y4, 100)
        led.plotBrightness(x3, y4, 150)
        led.plotBrightness(x2, y4, 200)
        led.plot(x, y4)
        y4 += 1
        led.plotBrightness(x5, y5, 50)
        led.plotBrightness(x4, y5, 100)
        led.plotBrightness(x3, y5, 150)
        led.plotBrightness(x2, y5, 200)
        led.plot(x, y5)
        y5 += 1
        basic.pause(100)
    }
})
