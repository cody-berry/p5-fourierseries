/*
@author Cody
@date 2021-10-06

code planning:
.   circle, point, and line
.   second circle on first
.   for loop on n
.   wave
.   n slider
    ?sawtooth wave
 */
let font
let time = 0
let originalR = 20
let r
let n = -1
let wave = []
let maxN
let speed
let x=0
let y=0
let pos

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    maxN = createSlider(1, 21)
    speed = createSlider(0, 0.2, 0.05, 0.01)
}

console.log("🐳")

function draw() {
    background(209, 80, 30)
    translate(width/4, height/2)
    noFill()
    stroke(0, 0, 100)
    r = 4*originalR
    let prevX, prevY
    x = 0
    y = 0

    // let's put n in a for loop!
    for (let i=0; i < maxN.value(); i++) {
        prevX = x
        prevY = y
        pos = sawtoothWave(i, time)
        stroke(0, 0, 100, 30)
        circle(prevX, prevY, r * 2)

        // and we draw a line from our start to the end.
        stroke(0, 0, 100)
        line(prevX, prevY, pos.x, pos.y)
    }

    wave.unshift(y)
    line(x, y, 12*originalR, wave[0])

    // we'll want to draw the wave
    beginShape()

    stroke(0, 0, 100)
    for (let i = 0; i < wave.length; i++)
        vertex(i+12*originalR, wave[i])
    endShape()

    if (wave.length > 315)
        wave.pop()

    time += speed.value()
    translate(-width/4, -height/2)
    text("speed: " + str(speed.value()) + ", maxN: " + str(maxN.value()), 60, 30)
}

function squareWave(i, time) {
    n = 2*i + 1
    r = 4*originalR/(n)

    // now let's draw the point! First, we need to define where it is, and
    // update n.
    x += r * cos(n*time)
    y += r * sin(n*time)

    // and actually, we need to return the point.
    return new p5.Vector(x, y)
}

function sawtoothWave(i, time) {
    n = i + 1
    if (n % 2 === 0) {
        r = 4*originalR/(n)
    } else {
        r = -4*originalR/(n)
    }

    // we need to define where our point is.
    x += r * cos(n*time)
    y += r * sin(n*time)

    // and we return it.
    return new p5.Vector(x, y)
}
