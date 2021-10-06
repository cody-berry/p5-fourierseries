/*
@author Cody
@date 2021-10-06

code planning:
    circle, point, and line
    second circle on first
    for loop on n
    wave
    n slider
    sawtooth wave
 */
let font
let time = 0
let r

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
    background(209, 80, 30)
    translate(width/4, height/2)
    r = 100
    noFill()
    stroke(0, 0, 100)
    circle(0, 0, r*2)
    // now let's draw the point! First, we need to define where it is.
    let x = r*cos(time/100)
    let y = r*sin(time/100)
    // Then, we can draw a line from the center of our circle to our point,
    // which is actually going to be another circle.
    line(0, 0, x, y)
    circle(x, y, r/2)
    time++
}