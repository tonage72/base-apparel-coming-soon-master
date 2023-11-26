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
		submitBtn.style.backgroundColor = 'green';
		submitGood.style.display = 'block';
		submitBad.style.display = 'none';
	} else {
		inputWrapper.classList.remove('valid');
		inputWrapper.classList.add('invalid');
		submitBtn.style.backgroundColor = '#f96262';
		submitGood.style.display = 'none';
		submitBad.style.display = 'block';
	}
}