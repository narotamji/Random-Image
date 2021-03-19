function getRandomImage() {
//declare an array to store the images
const randomImage = new Array();

//insert the URL of images in array or insert path of image
randomImage[0] = "https://images.pexels.com/photos/858115/pexels-photo-858115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
randomImage[1] = "http://www.petsworld.in/blog/wp-content/uploads/2014/09/running-cute-puppies.jpg";
randomImage[2] = "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
randomImage[3] = "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
randomImage[4] = "https://wi.wallpapertip.com/wsimgs/156-1565522_puppies-desktop-wallpaper-desktop-background-puppies.jpg";
randomImage[5] = "https://images.unsplash.com/photo-1501265976582-c1e1b0bbaf63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";

//generate a number and provide to the image to generate randomly
let number1 = Math.floor(Math.random()*randomImage.length);
let number2 = Math.floor(Math.random()*randomImage.length);
let number3 = Math.floor(Math.random()*randomImage.length);
  
const firstImage = document.getElementById("result1").innerHTML =  '<img class="img-fluid shadow rounded p-1" src="'+randomImage[number1]+'" />';
const secondImage = document.getElementById("result2").innerHTML = '<img class="img-fluid shadow rounded p-1" src="'+randomImage[number2]+'" />';
const thirdImage = document.getElementById("result3").innerHTML =  '<img class="img-fluid shadow rounded p-1" src="'+randomImage[number3]+'" />';
}

const generaterBtn = document.getElementById("generate-image");
generaterBtn.addEventListener('click', getRandomImage);
