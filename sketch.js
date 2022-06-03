var wFrame, hFrame, sliderElement, imgSelector, selectedImg;
var imgChoices = [];
var selection = 0;

function preload() {
  imgChoices.push(loadJSON('imgs/img1.json'));
  imgChoices.push(loadJSON('imgs/img2.json'));
}

function setup() {
  wFrame = windowWidth-10;
  hFrame = windowHeight;
  createCanvas(wFrame, hFrame);

  text("Patten: ", 50, 90, 100, 100);
  sliderElement = createSlider(1, 9, 1, 1);
  sliderElement.position(50, 100);

  imgSelector = createButton("Next Image");
  imgSelector.style("border: 0");
  imgSelector.style("radius: 100px");
  imgSelector.size(100, 20);
  imgSelector.position(50, 50);
  imgSelector.mouseReleased(changeImg);
  selectedImg = imgChoices[0];
}

function draw() {
  let newFrameW = wFrame+sliderElement.value();
  resizeCanvas(newFrameW, hFrame);
  background(0);

  loadPixels();

  let v = 0;
  for (let i = 0; i < newFrameW*hFrame*4; i++)
  {
    pixels[v]=selectedImg.img[i%selectedImg.img.length][0];
    pixels[v+1]=selectedImg.img[i%selectedImg.img.length][1];
    pixels[v+2]=selectedImg.img[i%selectedImg.img.length][2];
    pixels[v+3]=255;
    v+=4;
  }

  updatePixels();
}

function changeImg()
{
  selection++;
  selectedImg = imgChoices[selection%imgChoices.length];
}