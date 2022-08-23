const btnRating = document.querySelectorAll('.btn-rating');
const submit = document.querySelector('.submit');
const ratingCard = document.querySelector('.rating-card');
const span = document.querySelector('.error');
let rate;

btnRating.forEach((btn)=>{
	btn.addEventListener('click',()=>{
		if(btn.value === "1")
		{
			btn.classList.toggle('choice-rating');
			btn.nextElementSibling.classList.remove('choice-rating');
			btn.nextElementSibling.nextElementSibling.classList.remove('choice-rating');
			btn.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('choice-rating');
			btn.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('choice-rating');
			rate = btn.value;
			span.textContent ="";
		}

		else if(btn.value === "2")
		{
			btn.classList.toggle('choice-rating');
			btn.previousElementSibling.classList.remove('choice-rating');
			btn.nextElementSibling.classList.remove('choice-rating');
			btn.nextElementSibling.nextElementSibling.classList.remove('choice-rating');
			btn.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('choice-rating');
			rate = btn.value;
			span.textContent ="";
		}

		else if(btn.value === "3")
		{
			btn.classList.toggle('choice-rating');
			btn.previousElementSibling.previousElementSibling.classList.remove('choice-rating');
			btn.previousElementSibling.classList.remove('choice-rating');
			btn.nextElementSibling.classList.remove('choice-rating');
			btn.nextElementSibling.nextElementSibling.classList.remove('choice-rating');
			rate = btn.value;
			span.textContent ="";
	
		}

		else if(btn.value === "4")
		{
			btn.classList.toggle('choice-rating');
			btn.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('choice-rating');
			btn.previousElementSibling.previousElementSibling.classList.remove('choice-rating');
			btn.previousElementSibling.classList.remove('choice-rating');
			btn.nextElementSibling.classList.remove('choice-rating');
			rate = btn.value;
			span.textContent ="";
		}

		else if(btn.value === "5")
		{
			btn.classList.toggle('choice-rating');
			btn.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('choice-rating');
			btn.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove('choice-rating');
			btn.previousElementSibling.previousElementSibling.classList.remove('choice-rating');
			btn.previousElementSibling.classList.remove('choice-rating');
			rate = btn.value;
			span.textContent ="";
				
		}
		
		submit.addEventListener('click',()=>{
			ratingCard.innerHTML = ` 
				<div class="thanks">
       				 <img src="./images/illustration-thank-you.svg" alt="photo-thankyou">
        			 <h3>You selected <span>${rate}</span> out of 5</h3>
        			 <h2>Thank you!</h2>
        			 <p>We appreciate you taking the time to give a rating. If you ever need more support, 
         				don’t hesitate to get in touch!</p>
    			</div>`;
			});
		});
});

submit.addEventListener('click',()=>{
			span.textContent = `Veuillez choisir une note`;
		});


