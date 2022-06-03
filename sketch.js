var wFrame, hFrame, sliderElement, imgSelector, selectedImg;
var imgChoices = [];
var selection = 0;
var normalColor = "#3722a8";
var hoverColor = "#392182";
var clickedColor = "#231450";
var textColor = "#000000";

function preload() {
  imgChoices.push(loadJSON('imgs/img1.json'));
  imgChoices.push(loadJSON('imgs/img2.json'));
}

function setup() {
  wFrame = windowWidth-10;
  hFrame = windowHeight;
  createCanvas(wFrame, hFrame);

  sliderElement = createSlider(1, 9, 1, 1);
  sliderElement.addClass("patternSlider");
  sliderElement.position(50, 100);

  imgSelector = createButton("Next Image");
  imgSelector.style("color: "+textColor);
  imgSelector.style("border: 0");
  imgSelector.style("border-radius: 3px");
  imgSelector.style("background-color: "+normalColor);
  imgSelector.size(100, 20);
  imgSelector.position(50, 50);
  imgSelector.mouseOver(changeImgF);
  imgSelector.mouseOut(changeImgB);
  imgSelector.mousePressed(changeImg);
  imgSelector.mouseReleased(changeImgF);
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
  imgSelector.style("background-color: "+clickedColor);
  selection++;
  selectedImg = imgChoices[selection%imgChoices.length];
}

function changeImgF()
{
  imgSelector.style("background-color: "+hoverColor);
}

function changeImgB()
{
  imgSelector.style("background-color: "+normalColor);
}