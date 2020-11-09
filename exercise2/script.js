var i = 0;
var images = [];
images[0] = "image1.jpg";
images[1] = "image2.jpg";
images[2] = "image3.jpg";
images[3] = "image4.jpg";
images[4] = "image5.jpg";

function previous()
{
	if(i <= 0)
  {
    i = images.length;
  }
	i--;
	return(document.querySelector('.img').setAttribute('src', images[i]));
}

function next()
{
	if(i >= images.length - 1)
  {
    i = -1;
  }
	i++;
	return(document.querySelector('.img').setAttribute('src', images[i]));
}
