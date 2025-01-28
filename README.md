Website link: https://jinheeyi.github.io/Workshop-task-7/

## Intro
- I successfully completed nearly all tasks for 'Workshop Week 1 and 2,' gaining experience in creating animations, working with text and language, and incorporating interactive elements like recording graphs and textboxes. Next is working on with stimulation, realizing there's many options on stimulation for example; gravity, water(fluid) and train etc. I decided to make a ball stimulation, mainly focusing on moving ball physics and the gravity on how the ball plunges or directions. And additionally, changing the colour, including the background. Checking on www.google.com, to get examples of the ball simulation and there was some good examples from p5.js.
-https://editor.p5js.org/anna10128/sketches/CJMIX_lWX
-https://editor.p5js.org/icm/sketches/BJKWv5Tn
## Notes (working progress)
![Screenshot 2025-01-25 145442](https://github.com/user-attachments/assets/b7665b8a-e5c1-4864-bc4c-fbfef4811549)
- From the workshop, it indicates on how the ball was moving and how the gravity interacts with two balls. 

```ruby
constructor(x, y) {
    this.x = x;
    this.y = y; 
    this.color = color(random(255), random(255), random(255)); // random color
  }
```
- this is for colour changing, but somehow the colour changes if I restart the sketch window. So I further looked into www.google.com, 'changing colour p5js' and saw one of the examples that I was looking for.
- https://editor.p5js.org/ivymeadows/sketches/B1PpMXlsZ
(this is where through clicking, the colour automatically changes into various colours.)
- https://p5js.org/reference/p5/color/
- https://www.youtube.com/watch?v=n3s-yOCH638
- (this youtube clip on how to gradually change color during a short period.)
![Capture](https://github.com/user-attachments/assets/ea4cfbee-6c79-4227-9396-f98da89f3acd)
![Capture1](https://github.com/user-attachments/assets/493c69e3-a924-4341-8c29-6896c639ae4e)
(demonstrates on how the circle would change colour from time to time and plus similar copying on what she did for the colour code)
- Functioning on workshop 6, I decided to make this code that works similar for workshop-task-0, which is including setting up the width, height, speed, even planning a circle.

**creating a circle**
```ruby
let x,y;//position of the circle
let radius=50;//radius of the circle
let xSpeed, ySpeed;//speed of the circle movement
let circleColor;//color fo the circle
```
![Screenshot 2025-01-28 145608](https://github.com/user-attachments/assets/00b538d6-b3f3-40ca-b0b2-5df396599471)
![Capture2](https://github.com/user-attachments/assets/31abd31e-2819-4d2f-921b-050f1b7b3559)
![Screenshot 2025-01-28 151126](https://github.com/user-attachments/assets/9f2e271b-f6a7-4c56-9b98-ab0afef6dabf)
**_here's another method on making multiple bouncy balls, which I really liked, so I thought maybe making multiple shapes, using this method would be good to my thinking._**

**first step**
![Screenshot 2025-01-28 151313](https://github.com/user-attachments/assets/35d7490f-4807-4021-a1ea-0ded2a14e609)

**second step**
- The second step that I wanted to experience is putting on more shapes, just like on workshop 1. https://github.com/jinheeyi/Workshop-task-1 (showing many different shapes popping out from the screen). I thought of making the similar version for this workshop, and decided to make shapes floating around the screen (fully).
- For the shapes, I asked chatgpt 'how to add shapes around the screen?' and showed like this:

```ruby
// Square properties
let squareX, squareY, squareSize, squareColor, squareXSpeed, squareYSpeed;

// Triangle properties
let triangleX, triangleY, triangleSize, triangleColor, triangleXSpeed, triangleYSpeed;

// Line properties
let lineStartX, lineStartY, lineEndX, lineEndY, lineColor;
let lineXSpeed, lineYSpeed, lineX2Speed, lineY2Speed;
```
```ruby
   updateShapes();
}
```
```ruby
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
```
```ruby
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
```
- these codes are all adding the shapes, using speed and the start, and random properties for all the shapes. It was quite hard at first, but I understood on where how the first code:
```ruby
 fill(circleColor);
    noStroke();
    ellipse(x, y, radius * 2);
    x += xSpeed;
    y += ySpeed;
    if (x - radius <= 0 || x + radius >= width) xSpeed = -xSpeed;
    if (y - radius <= 0 || y + radius >= height) ySpeed = -ySpeed;
```
are same to the other codes for the square, triangle and the line. 
![Screenshot 2025-01-28 155959](https://github.com/user-attachments/assets/43e7706d-131e-4358-9169-adc82194bf41)
**this is the first code without any moving for the shape.**
![Screenshot 2025-01-28 160420](https://github.com/user-attachments/assets/0a51d9b0-09cd-4486-b8de-6fd1757fc592)
![Screenshot 2025-01-28 152713](https://github.com/user-attachments/assets/b8043d09-80dd-495e-9552-81626bfed3a9)
**_with major big changes, somehow the code was a huge success._**
![Screenshot 2025-01-28 175924](https://github.com/user-attachments/assets/93eef85c-46c6-4f06-8246-efaf66fc2ed2)

## Conclusion(+further improvement)
- I am quite impressed on how the ball turned out with bright colours flashing just like the first workshop (the butterfly motion), even the various shapes. I am also getting used to it and learning about the code too.
