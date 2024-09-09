let formData = {};

function showPage(pageNumber) {
    if (!validateCurrentStep()) {
        return;
    }
    switch(pageNumber) {
        case 1:
            document.getElementById('landingPage').style.display = 'block';
            document.getElementById('step1').style.display = 'none';
            document.getElementById('step2').style.display = 'none';
            document.getElementById('step3').style.display = 'none';
            document.getElementById('step4').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
            break;
        case 2:
            document.getElementById('landingPage').style.display = 'none';
            document.getElementById('step1').style.display = 'block';
            document.getElementById('step2').style.display = 'none';
            document.getElementById('step3').style.display = 'none';
            document.getElementById('step4').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
            break;
        case 3:
            document.getElementById('landingPage').style.display = 'none';
            document.getElementById('step1').style.display = 'none';
            document.getElementById('step2').style.display = 'block';
            document.getElementById('step3').style.display = 'none';
            document.getElementById('step4').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
            break;
        case 4:
            document.getElementById('landingPage').style.display = 'none';
            document.getElementById('step1').style.display = 'none';
            document.getElementById('step2').style.display = 'none';
            document.getElementById('step3').style.display = 'block';
            document.getElementById('step4').style.display = 'none';
            document.getElementById('successMessage').style.display = 'none';
            break;
        case 5:
            document.getElementById('landingPage').style.display = 'none';
            document.getElementById('step1').style.display = 'none';
            document.getElementById('step2').style.display = 'none';
            document.getElementById('step3').style.display = 'none';
            document.getElementById('step4').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
            getFormData();
            displayReview();
            break;
        case 6:
            document.getElementById('landingPage').style.display = 'none';
            document.getElementById('step1').style.display = 'none';
            document.getElementById('step2').style.display = 'none';
            document.getElementById('step3').style.display = 'none';
            document.getElementById('step4').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
            break;
        default: break;
        
    }
}

function getFormData() {
    formData.fullName = document.getElementById('fullName').value;
    formData.email = document.getElementById('email').value;
    formData.phone = document.getElementById('phone').value;
    formData.adults = document.getElementById('adults').value;
    formData.children = document.getElementById('children').value;
    formData.checkInDate = document.getElementById('checkInDate').value;
    formData.ticketColor = document.getElementById('ticketColor').value; // Corrected ticket color field
    formData.locker = getSelectedRadioValue('locker'); // Corrected the radio button for locker
}

function displayReview() {
    // Display the booking summary in step 5
    document.getElementById('reviewDetails').innerHTML = `
        <h3>Booking Summary</h3>
        <p><strong>Full Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone No.:</strong> ${formData.phone}</p>
        <p><strong>No. of Adults:</strong> ${formData.adults}</p>
        <p><strong>No. of Children:</strong> ${formData.children}</p>
        <p><strong>Check-in Date:</strong> ${formData.checkInDate}</p>
        <p><strong>Ticket Color:</strong> ${formData.ticketColor}</p>
        <p><strong>Locker:</strong> ${formData.locker}</p>
    `;
}

function submitForm() {
    if (validateStep1() && validateStep2() && validateStep3() && validateStep4()) {
    if (document.getElementById('agree').checked) {
        showPage(6); // Move to success page
    } else {
        alert('Please agree to terms and conditions.');
    }

}
}

// Helper function to get selected radio value
function getSelectedRadioValue(name) {
    const selectedRadio = document.querySelector(`input[name="${name}"]:checked`);
    return selectedRadio ? selectedRadio.value : null;
}

// Update range values display
var adultsRange = document.getElementById('adults');
var childrenRange = document.getElementById('children');
var adultsValueSpan = document.getElementById('adultsValue');
var childrenValueSpan = document.getElementById('childrenValue');

function updateRangeValues() {
    adultsValueSpan.textContent = adultsRange.value;
    childrenValueSpan.textContent = childrenRange.value;
}

adultsRange.addEventListener('input', updateRangeValues);
childrenRange.addEventListener('input', updateRangeValues);




document.addEventListener('DOMContentLoaded', function () {
    const parakaiWrappers = document.querySelectorAll('.parakaiWrapper');
    const detailsDiv = document.getElementById('myDetails');

    // Function to handle animation sequence
    function animateSequence(index) {
        if (index < parakaiWrappers.length) {
            // Display current pihaWrapper
            parakaiWrappers[index].style.display = 'block';
            // Wait for the animation to finish
            setTimeout(() => {
                // Hide current pihaWrapper
                parakaiWrappers[index].style.display = 'none';
                // Continue with the next one
                animateSequence(index + 1);
            }, 6000);
        } else {
            // All animations are done, show the "Details" div
            detailsDiv.style.display = 'block';
        }
    }

    // Start the animation sequence
    animateSequence(0);
});

function redirectToWebsite(url) {
    window.open(url, '_blank');
}

    function Ad2replay() {
        // Initially hide all ads and details
        document.getElementById('ad1').style.display = 'none';
        document.getElementById('ad2').style.display = 'none';
        document.getElementById('myDetails2').style.display = 'none';
    
        // Show first ad (ad1) and then transition to the next ad
        document.getElementById('ad1').style.display = 'block';
    
        // After 3 seconds, transition to ad2 (second ad)
        setTimeout(function() {
            document.getElementById('ad1').style.display = 'none';
            document.getElementById('ad2').style.display = 'block';
        }, 3000); // 3 seconds delay
    
        // After another 3 seconds, show name and ID (myDetails2)
        setTimeout(function() {
            document.getElementById('ad2').style.display = 'none';
            document.getElementById('myDetails2').style.display = 'block';
        }, 6000); // 6 seconds total delay (3 sec for ad1 + 3 sec for ad2)
    }
    
    document.addEventListener('DOMContentLoaded', function () {
        const gjnzWrappers = document.querySelectorAll('.gjnzWrapper');
        const detailsDiv = document.getElementById('myDetails2');
        const replayButton = document.querySelector('button'); // Assuming the button is the replay button
    
        let sequenceEnded = false; // Flag to track if the sequence has finished
    
        // Function to handle animation sequence
        function animateGjnzSequence(index) {
            if (index < gjnzWrappers.length) {
                // Display the current gjnzWrapper
                gjnzWrappers[index].style.display = 'block';
                
                // Wait for the animation to finish
                setTimeout(() => {
                    // Hide the current gjnzWrapper
                    gjnzWrappers[index].style.display = 'none';
                    
                    // Continue with the next one
                    animateGjnzSequence(index + 1);
                }, 3000); // Duration of each frame (3000ms = 3 seconds)
            } else {
                // All animations are done, show the "Details" div
                detailsDiv.style.display = 'block';
                sequenceEnded = true; // Mark the sequence as ended
    
                // Ensure no extra transitions
                setTimeout(() => {
                    gjnzWrappers.forEach(wrapper => wrapper.style.display = 'none');
                }, 100); // Small delay to ensure all are hidden before displaying details
            }
        }
    
        // Start the animation sequence
        animateGjnzSequence(0);
    });

    
    function validateCurrentStep() {
        const currentPage = document.querySelector('.booking > div:not([style*="display: none"])');
        const pageId = currentPage.id;
    
        switch (pageId) {
            case 'step1':
                return validateStep1();
            case 'step2':
                return validateStep2();
            case 'step3':
                return validateStep3();
            case 'step4':
                return validateStep4();
            default:
                return true;
        }
    }
    
    function validateStep1() {
        const date = document.getElementById('checkInDate').value;
        const adults = document.getElementById('adults').value;
        const children = document.getElementById('children').value;
        
        if (!date || adults < 1) {
            alert('Please fill out all required fields in Step 1.');
            return false;
        }
        return true;
    }
    
    function validateStep2() {
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        
        if (!fullName || !email) {
            alert('Please fill out all required fields in Step 2.');
            return false;
        }
        return true;
    }
    
    function validateStep3() {
        const ticketColor = document.getElementById('ticketColor').value;
        const locker = document.querySelector('input[name="locker"]:checked');
        
        if (!ticketColor || !locker) {
            alert('Please fill out all required fields in Step 3.');
            return false;
        }
        return true;
    }
    
    function validateStep4() {
        const agree = document.getElementById('agree').checked;
        
        if (!agree) {
            alert('You must agree to the terms and conditions in Step 4.');
            return false;
        }
        return true;
    }
    

    function resetBookingForm() {
        // Clear form inputs
        document.getElementById('checkInDate').value = '';
        document.getElementById('adults').value = 1;
        document.getElementById('children').value = 0;
        document.getElementById('fullName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('ticketColor').value = '#000000';
        document.querySelector('input[name="locker"][value="No"]').checked = true;
        document.getElementById('agree').checked = false;
    
        // Reset progress bar to the initial state
        document.getElementById('bookingProgress').value = 0;
    }