let x, y; // position of the circle
let radius = 50; // radius of the circle
let xSpeed, ySpeed; // speed of the circle movement
let circleColor; // color of the circle

// square
let squareX, squareY, squareSize, squareColor, squareXSpeed, squareYSpeed;

// triangle
let triangleX, triangleY, triangleSize, triangleColor, triangleXSpeed, triangleYSpeed;

// line
let lineStartX, lineStartY, lineEndX, lineEndY, lineColor;
let lineXSpeed, lineYSpeed, lineX2Speed, lineY2Speed;

function setup() {
    createCanvas(300, 550);
    x = width / 2;
    y = height / 2;
    xSpeed = random(-3, 3);
    ySpeed = random(-3, 3);
    circleColor = color(random(255), random(255), random(255));

    // Initialize shapes with random properties
    updateShapes();
}

function draw() {
    background(255);

    // Draw and move the circle
    fill(circleColor);
    noStroke();
    ellipse(x, y, radius * 2);
    x += xSpeed;
    y += ySpeed;
    if (x - radius <= 0 || x + radius >= width) xSpeed = -xSpeed;
    if (y - radius <= 0 || y + radius >= height) ySpeed = -ySpeed;

    // Draw and move the square
    fill(squareColor);
    noStroke();
    rect(squareX, squareY, squareSize, squareSize);
    squareX += squareXSpeed;
    squareY += squareYSpeed;
    if (squareX <= 0 || squareX + squareSize >= width) squareXSpeed = -squareXSpeed;
    if (squareY <= 0 || squareY + squareSize >= height) squareYSpeed = -squareYSpeed;

    // Draw and move the triangle
    fill(triangleColor);
    noStroke();
    triangle(triangleX, triangleY, 
             triangleX + triangleSize, triangleY, 
             triangleX + triangleSize / 2, triangleY - triangleSize);
    triangleX += triangleXSpeed;
    triangleY += triangleYSpeed;
    if (triangleX <= 0 || triangleX + triangleSize >= width) triangleXSpeed = -triangleXSpeed;
    if (triangleY - triangleSize <= 0 || triangleY >= height) triangleYSpeed = -triangleYSpeed;

    // Draw and move the line
    stroke(lineColor);
    strokeWeight(2);
    line(lineStartX, lineStartY, lineEndX, lineEndY);
    lineStartX += lineXSpeed;
    lineStartY += lineYSpeed;
    lineEndX += lineX2Speed;
    lineEndY += lineY2Speed;
    if (lineStartX <= 0 || lineStartX >= width) lineXSpeed = -lineXSpeed;
    if (lineStartY <= 0 || lineStartY >= height) lineYSpeed = -lineYSpeed;
    if (lineEndX <= 0 || lineEndX >= width) lineX2Speed = -lineX2Speed;
    if (lineEndY <= 0 || lineEndY >= height) lineY2Speed = -lineY2Speed;
}

function updateShapes() {
    // Random properties for the square
    squareX = random(width - 50);
    squareY = random(height - 50);
    squareSize = random(50, 150);
    squareColor = color(random(255), random(255), random(255));
    squareXSpeed = random(-3, 3);
    squareYSpeed = random(-3, 3);

    // Random properties for the triangle
    triangleX = random(width - 50);
    triangleY = random(height - 50);
    triangleSize = random(50, 150);
    triangleColor = color(random(255), random(255), random(255));
    triangleXSpeed = random(-3, 3);
    triangleYSpeed = random(-3, 3);

    // Random properties for the line
    lineStartX = random(width);
    lineStartY = random(height);
    lineEndX = random(width);
    lineEndY = random(height);
    lineColor = color(random(255), random(255), random(255));
    lineXSpeed = random(-3, 3);
    lineYSpeed = random(-3, 3);
    lineX2Speed = random(-3, 3);
    lineY2Speed = random(-3, 3);
}
