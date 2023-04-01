function preload(){

}
function setup(){
canvas = createCanvas(640,480)
canvas.position(110, 250)
video = createCapture(VIDEO)
video.hide()

tint_color = ""
}
function draw(){
    image(video, 150, 80, 350, 350)
    stroke("purple")
    fill("yellow")
    rect(20, 20, 20, 450, 10);
    rect(590, 20, 20, 450, 10);
    rect(40, 20, 550, 20);
    rect(40, 440, 550, 20);
    stroke("blue")
    fill("pink")
    circle(30, 35, 40);
    circle(30, 450, 40);
    circle(600, 35, 40);
    circle(600, 450, 40);
}
function take_snapshot(){
    save('student_name.png')
}
