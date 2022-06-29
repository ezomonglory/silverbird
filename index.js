var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("slides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = "block";
	setTimeout(showSlides, 3000); // Change image every 3 seconds
}

let row = document.querySelector(".row");

console.log(row.getBoundingClientRect().top);
let rowe = document.querySelectorAll(".row-element");
const rowearr = Array.from(rowe)
// rowearr[3].classList.add("row-img-show")

let index = 3
const sho = ()=> {
  rowearr.forEach((ele, ind)=>{
    console.log(ele)
    console.log(index)
    if(ind===index) {
      ele[ind].classList.add("row-img-show")
    }else{
      ele[ind].classList.remove("row-img-show")
    }
    index = index + 1
    console.log(index)
  })
  
}

sho();
// setInterval(sho, 2000)





// move();

var sm = 85;
function move() {
	row.style.transform = `translateX(-${sm}px)`;

	sm = sm + 205;
	callhtml;
	setTimeout(move, 2000);
}

setInterval(callhtml, 1000);

function callhtml() {
	var mm;
	row.insertAdjacentHTML("beforeend", html);

	mm = mm + 100;
	row.style.width = `${mm}px`;
}

var html = ` <div class="row-element" >
<div class="active">
                            
</div>

<div class="row-img">

    <img src="images/sing.jpg" width="100%" height="100%" alt="" class="image">
    
</div>


</div>

<div class="row-element">
<div class="active">
                            
</div>

<div class="row-img">

    <img src="images/noway.jfif" width="100%" height="100%" alt="" class="image">

</div>


</div>

<div class="row-element">
<div class="active">
                            
</div>

<div class="row-img">

    <img src="images/kings.jfif" width="100%" height="100%" alt="" class="image">

   
    </div>
</div>


<div class="row-element">
<div class="active">
                            
</div>

<div class="row-img">

    <img src="images/moonfall.jfif" width="100%" height="100%" alt="" class="image">

  
    </div>
</div>




<div class="row-element">

<div class="active">

</div>
<div class="row-img">

    <img src="images/aki.jfif" width="100%" height="100%" alt="" class="image">

     
    </div>
</div>



<div class="row-element">

<div class="active">
    
</div>
<div class="row-img">
    <img src="images/sing.jpg" width="100%" height="100%" alt="" class="image">

</div>
</div>



<div class="row-element">
<div class="active">
    
</div>

<div class="row-img">

    <img src="images/noway.jfif" width="100%" height="100%" alt="" class="image">


    </div>
</div>

</div>

`;
