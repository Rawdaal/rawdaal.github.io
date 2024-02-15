var selectedTooth = ''; // Variable to store the selected tooth

// Function to set the selected tooth
function selectTooth(tooth) {
    selectedTooth = tooth;
    highlightTooth(tooth);
}

// Dental diagnoses data structure
const toothDiagnoses = {
    'Incisor': {
        1: 'Incisor Selected:\n Minor sensitivity, slight discoloration.',
        2: 'Incisor Selected:\n Cavity forming, gum recession near the tooth.',
        3: 'Incisor Selected:\n Severe decay, possible need for root canal or extraction.'
    },
    'Canine1': {
        1: 'Canine Selected:\n Minor sensitivity to hot or cold.',
        2: 'Canine Selected:\n Cracks or chips, moderate gum disease.',
        3: 'Canine Selected:\n Deep fracture, abscess formation.'
    },
    'Canine2': {
        1: 'Canine Selected:\n Minor sensitivity to hot or cold.',
        2: 'Canine Selected:\n Cracks or chips, moderate gum disease.',
        3: 'Canine Selected:\n Deep fracture, abscess formation.'
    },
    'Molar1': {
        1: 'Molar Selected:\n Food impaction, mild sensitivity.',
        2: 'Molar Selected:\n Developing cavities, moderate pain from impacted food.',
        3: 'Molar Selected:\n Advanced decay, possible wisdom tooth issues, need for root canal therapy.'
    },
    'Molar2': {
        1: 'Molar Selected:\n Food impaction, mild sensitivity.',
        2: 'Molar Selected:\n Developing cavities, moderate pain from impacted food.',
        3: 'Molar Selected:\n Advanced decay, possible wisdom tooth issues, need for root canal therapy.'
    }
};

function highlightTooth(elementId) {
    var element = document.getElementById(elementId);
    element.classList.add("highlight");

    // Remove highlight after 1 second
    setTimeout(function() {
        element.classList.remove("highlight");
    }, 1000); // 1000 milliseconds = 1 second
}

// Function to get the diagnosis for a tooth
function getToothDiagnosis(tooth, level) {
    if(toothDiagnoses[tooth]) {
        return toothDiagnoses[tooth][level];
    } else {
        return 'No diagnosis available for this part.';
    }
}

// Event listener for the submit button
document.getElementById('submit-button').addEventListener('click', function() {
    const discomfortLevel = parseInt(document.getElementById('discomfort-level').value);
    const diagnosisResult = getToothDiagnosis(selectedTooth, discomfortLevel);
    document.getElementById('diagnosis-results').innerText = diagnosisResult;
});

// When the user clicks on <span> (x), close the popup
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    document.getElementById("popupBox").style.display = "none";
}

// To open the popup when the page loads
window.onload = function() {
    document.getElementById("popupBox").style.display = "block";
}
