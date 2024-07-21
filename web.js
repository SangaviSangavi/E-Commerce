document.addEventListener('DOMContentLoaded',function() {
    inputFields.forEach(function(input) {
        input.addEventListener('input',function () {
            if(this.value.trim()!==''){
                this.previousElementSibling.style.didplay='none';
            }else{
                this.previousElementSibling.style.didplay='block';
            }
        });
    });
    function isValidEmail(email) {
        const emailRegex = /^[^\s]+@[^\s@]+\.[^\s@]+$/;
        const lastPartRegex = /\.(com|net|org)$/i;
        return emailRegex.test(email) && lastPartRegex.test(email);
    }
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', function () {
        const isValid = isValidEmail(this.value);
        if(!isValid){
            this.setCustomValidity('Please enter a valid email address.');
        }else{
            this.setCustomValidity('');
        }
    });
});