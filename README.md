Website link:

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
**_here's another method on making multiple bouncy balls, which I really liked, so I thought maybe making multiple shapes, using this method would be good._**

**first step**
![Screenshot 2025-01-28 151313](https://github.com/user-attachments/assets/35d7490f-4807-4021-a1ea-0ded2a14e609)

**second step**
- The second step that I wanted to experience is putting on more shapes, just like on workshop 1. https://github.com/jinheeyi/Workshop-task-1 (showing many different shapes popping out from the screen). I thought of making the similar version for this workshop, and decided to make shapes floating around the screen (fully).
- For the shapes, I asked chatgpt 'how to add shapes around the screen?' and showed like this:

```ruby
let squareX, squareY, squareSize, squareColor;
let triangleX, triangleY, triangleSize, triangleColor;
let lineStartX, lineStartY, lineEndX, lineEndY, lineColor;
```
```ruby
   updateShapes();
}
```
```ruby
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
/ Draw the line
    stroke(lineColor);
    strokeWeight(2);
    line(lineStartX, lineStartY, lineEndX, lineEndY);
```
```ruby
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
```
- these codes are all adding the shapes, using lerp(), and timelapse on the timing when it appears for the shapes and the lines. While searching the codes, I just recognized maybe adding another moving diamond shape will make the sketch on what I wanted.
- Again, this is the same code for
```ruby
function setup() {
    createCanvas(200, 400);
    x = width / 2;
    y = height / 2;
    xSpeed = random(-3, 3);
    ySpeed = random(-3, 3);
    circleColor = color(random(255), random(255), random(255));
```
- but as on writing on the diamond code. (diamondColor)

![Screenshot 2025-01-28 160420](https://github.com/user-attachments/assets/0a51d9b0-09cd-4486-b8de-6fd1757fc592)
![Screenshot 2025-01-28 152713](https://github.com/user-attachments/assets/b8043d09-80dd-495e-9552-81626bfed3a9)


## Conclusion(+further improvement)
- I am quite impressed on how the ball turned out with bright colours flashing just like the first workshop (the butterfly motion), even the various shapes. I am also getting used to it and learning about the code too. 
- For further updates, I will try to make somethi
