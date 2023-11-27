function validation() {

	let email = document.getElementById('email').value;
	const inputWrapper = document.getElementById('input-wrapper');
	const submitBtn = document.querySelector('.submitbtn')
	const submitGood = document.querySelector('.submitgood');
	const submitBad = document.querySelector('.submitbad');
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

	if (email.match(pattern)) {
		inputWrapper.classList.add('valid');
		inputWrapper.classList.remove('invalid');
		submitBtn.style.background = 'linear-gradient(to right, #d6f5d6, #6fdc6f)';
		submitGood.style.display = 'block';
		submitBad.style.display = 'none';
		submitBtn.style.pointerEvents = "all";
	} else {
		inputWrapper.classList.remove('valid');
		inputWrapper.classList.add('invalid');
		submitBtn.style.background = 'linear-gradient(to right, hsl(0, 80%, 86%), hsl(0, 74%, 74%))';
		submitGood.style.display = 'none';
		submitBad.style.display = 'block';
		submitBtn.style.pointerEvents = "none";
	}
}

function submitValidation() {
	const emailSubmitted = document.querySelector('.emailsubmitted');
	emailSubmitted.style.display = 'flex';
}