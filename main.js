/* 1.grab input value */

document.querySelector(".js-go").addEventListener('click',function(){
	
	var input=document.querySelector("input").value;
	//console.log(input);
	cleanContainer();
	search(input);
	//pusht(input);

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
	
	var input=document.querySelector("input").value;
	
	if(e.which===13){
		cleanContainer();
		search(input);
		
	} 
});


/* 2.do the data stuff with api */

function search(input) {
var url="http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="+input; 

// AJAX Request

var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){

	var data=e.target.response;
	
	pusht(data);
});
}
function cleanContainer() {

 var container = document.querySelector(".js-container");

 container.innerHTML = "";

}

/*3.show me the gif */
function pusht(input){
	
	var response=JSON.parse(input);

	var imageurl=response.data;
	console.log(imageurl);

	imageurl.forEach(function(image){

		var src =  image.images.fixed_height.url;
		var container = document.querySelector(".js-container");
		container.innerHTML = container.innerHTML+ "<img src=\""+ src +"\" class=\"container-image\">";

	});

	





}