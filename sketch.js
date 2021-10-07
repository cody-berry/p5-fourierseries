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

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    maxN = createSlider(1, 21)
    speed = createSlider(0.01, 0.5, 0.02, 0.01)
}

console.log("🐳")

function draw() {
    background(209, 80, 30)
    translate(width/4, height/2)
    noFill()
    stroke(0, 0, 100)
    r = 4*originalR
    let x=0
    let y=0
    let prevX, prevY

    // let's put n in a for loop!
    for (let i=0; i < maxN.value(); i+=1) {

        let n = 2*i + 1
        prevX = x
        prevY = y
        r = 4*originalR/(n)
        stroke(0, 0, 100, 30)
        circle(prevX, prevY, r * 2)

        // now let's draw the point! First, we need to define where it is, and
        // update n.
        x += r * cos(n*time)
        y += r * sin(n*time)

        // Then, we can draw a line from the center of our circle to our point,
        // which is actually going to be another circle.

        stroke(0, 0, 100)
        line(prevX, prevY, x, y)
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
}