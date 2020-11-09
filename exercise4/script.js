function run()
{
	var textID = document.querySelector("#text");
	var input = [];
  var values = [];
	values[0] = "red";
	values[1] = "green";
	values[2] = "blue";
	values[3] = "width";
  for(let i = 1; i < 3; i++)
	{
  	for(const val of values)
		{
    	input.push(document.querySelector(`#${val}${i}`).value)
    }
  }
  textID.style.border = `${input[3]}px solid rgb(${input[0]}, ${input[1]}, ${input[2]})`
  textID.style.backgroundColor = `rgb(${input[4]}, ${input[5]}, ${input[6]})`
  textID.style.width = `${input[7]}px`
}
