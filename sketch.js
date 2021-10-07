/*
@author Cody
@date 2021-10-06

code planning:
.   circle, point, and line
.   second circle on first
.   for loop on n
.   wave
    n slider
    sawtooth wave
 */
let font
let time = 0
let originalR = 10
let r
let n = -1
let wave = []
let maxN

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 0)
    maxN = createSlider(10, 100, 10, 5)
}

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
    for (let n = 1; n < maxN.value(); n+=0) {
        prevX = x
        prevY = y
        circle(prevX, prevY, r * 2)
        // now let's draw the point! First, we need to define where it is, and
        // update n.
        x += r * cos(n*time / 100)
        y += r * sin(n*time / 100)
        // Then, we can draw a line from the center of our circle to our point,
        // which is actually going to be another circle.
        line(prevX, prevY, x, y)
        n+=2
        r = 4*originalR/(n)
    }
    wave.unshift(y)
    // we'll want to draw the wave
    beginShape()
    for (let i = 0; i < wave.length; i++) {
        vertex(i+16*originalR, wave[i])
    }
    endShape()
    line(x, y, 16*originalR, wave[0])
    if (wave.length > 315) {
        wave.pop()
    }
    time++
}