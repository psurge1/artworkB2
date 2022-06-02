var wFrame = 500;
var hFrame = 500;
var sliderElement;
var imgSelector;
var selectedImg;
var imgChoices = [];
var selection = 0;

function preload() {
  img1 = loadJSON('imgs/img1.json');
  img2 = loadJSON('imgs/img2.json');
  imgChoices.push(img1);
  imgChoices.push(img2);
}

function setup() {
  createCanvas(wFrame, hFrame);
  sliderElement = createSlider(1, 9, 1, 1);
  imgSelector = createButton("Next Image");
  imgSelector.style("border: 0");
  imgSelector.style("radius: 100px");
  imgSelector.size(100, 20);
  imgSelector.mouseOver(changeImgH);
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

    // pixels[v+4]=selectedImg.img[i%selectedImg.img.length][0];
    // pixels[v+5]=selectedImg.img[i%selectedImg.img.length][1];
    // pixels[v+6]=selectedImg.img[i%selectedImg.img.length][2];
    // pixels[v+7]=255;

    // pixels[v+wFrame]=selectedImg.img[i%selectedImg.img.length][0];
    // pixels[v+wFrame+1]=selectedImg.img[i%selectedImg.img.length][1];
    // pixels[v+wFrame+2]=selectedImg.img[i%selectedImg.img.length][2];
    // pixels[v+wFrame+3]=255;

    // pixels[v+wFrame+4]=selectedImg.img[i%selectedImg.img.length][0];
    // pixels[v+wFrame+5]=selectedImg.img[i%selectedImg.img.length][1];
    // pixels[v+wFrame+6]=selectedImg.img[i%selectedImg.img.length][2];
    // pixels[v+wFrame+7]=255;
    
    v+=4;
  }

  updatePixels();

}

function changeImg()
{
  selectedImg = imgChoices[selection%imgChoices.length];
  selection++;
}

function changeImgH()
{
  
}