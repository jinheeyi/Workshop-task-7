let x, y; // position of the circle
let radius = 50; // radius of the circle
let xSpeed, ySpeed; // speed of the circle movement
let circleColor; // color of the circle

// Square, triangle, and line properties
let squareX, squareY, squareSize, squareColor;
let triangleX, triangleY, triangleSize, triangleColor;
let lineStartX, lineStartY, lineEndX, lineEndY, lineColor;

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

    // Draw the circle
    fill(circleColor);
    noStroke();
    ellipse(x, y, radius * 2);

    // Draw the square
    fill(squareColor);
    noStroke();
    rect(squareX, squareY, squareSize, squareSize);

    // Draw the triangle
    fill(triangleColor);
    noStroke();
    triangle(triangleX, triangleY, 
             triangleX + triangleSize, triangleY, 
             triangleX + triangleSize / 2, triangleY - triangleSize);

    // Draw the line
    stroke(lineColor);
    strokeWeight(2);
    line(lineStartX, lineStartY, lineEndX, lineEndY);

    // Move the circle
    x += xSpeed;
    y += ySpeed;

    // Bounce the circle off walls
    if (x - radius <= 0 || x + radius >= width) {
        xSpeed = -xSpeed;
        circleColor = color(random(255), random(255), random(255)); // change color
    }
    if (y - radius <= 0 || y + radius >= height) {
        ySpeed = -ySpeed;
        circleColor = color(random(255), random(255), random(255)); // change color
    }

    // Update shapes every 120 frames (~2 seconds at 60 fps)
    if (frameCount % 120 === 0) {
        updateShapes();
    }
}

function updateShapes() {
    // Random properties for the square
    squareX = random(width);
    squareY = random(height);
    squareSize = random(50, 150);
    squareColor = color(random(255), random(255), random(255));

    // Random properties for the triangle
    triangleX = random(width);
    triangleY = random(height);
    triangleSize = random(50, 150);
    triangleColor = color(random(255), random(255), random(255));

    // Random properties for the line
    lineStartX = random(width);
    lineStartY = random(height);
    lineEndX = random(width);
    lineEndY = random(height);
    lineColor = color(random(255), random(255), random(255));
}