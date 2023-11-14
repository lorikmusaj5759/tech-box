/* sophisticated.js */

// This code implements a complex and sophisticated algorithm that generates a fractal image.

// Fractal Generation Parameters
const MAX_ITERATIONS = 1000;
const MIN_COLOR = 0;
const MAX_COLOR = 255;
const ESCAPE_RADIUS = 4;

// Canvas Dimensions
const WIDTH = 800;
const HEIGHT = 800;

// Create a new canvas element
const canvas = document.createElement("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;

// Get the drawing context
const context = canvas.getContext("2d");

// Create a blank image data object
const imageData = context.createImageData(WIDTH, HEIGHT);

// Calculate and set color of each pixel of the fractal
for(let x = 0; x < WIDTH; x++) {
  for(let y = 0; y < HEIGHT; y++) {
    const a = map(x, 0, WIDTH, -2.5, 1);
    const b = map(y, 0, HEIGHT, -1, 1);
  
    let ca = a;
    let cb = b;
  
    let n = 0;
  
    while(n < MAX_ITERATIONS) {
      const aa = a * a;
      const bb = b * b;
      const twoab = 2 * a * b;
  
      a = aa - bb + ca;
      b = twoab + cb;
  
      if(aa + bb > ESCAPE_RADIUS) {
        break;
      }
  
      n++;
    }
  
    const color = map(n, 0, MAX_ITERATIONS, MIN_COLOR, MAX_COLOR);
  
    const pixelIndex = (y * WIDTH + x) * 4;
  
    imageData.data[pixelIndex] = color; // Red
    imageData.data[pixelIndex + 1] = color; // Green
    imageData.data[pixelIndex + 2] = color; // Blue
    imageData.data[pixelIndex + 3] = 255; // Alpha
  }
}

// Render the generated fractal image on the canvas
context.putImageData(imageData, 0, 0);

// Map function to scale values from one range to another
function map(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// Add the canvas to the document body
document.body.appendChild(canvas);