// function calculatePercentage() {
//     let obtainedMarks = document.getElementById('obtainmarks').value;
//     let totalMarks = document.getElementById('totalmarks').value;



//     obtainedMarks = +(obtainedMarks);
//     totalMarks = +(totalMarks);


//     if (isNaN(obtainedMarks) || isNaN(totalMarks) || totalMarks === 0) {

//         document.getElementById('result').innerHTML = 'Please enter valid number! '


//         return;

//     }

//     let percentage = (obtainedMarks / totalMarks) * 100;
//     let resultMessage;
//     switch (true) {
//         //     case (percentage >= 90):

//         //         resultMessage = "Excellent! You've got A1! Grade, with " + Math.round(percentage) + "%.";

//         //         break;

//         case (percentage > 100):
//             resultMessage = "Enter valid number";
//             break;
//         case (percentage >= 80):

//         resultMessage = "Excellent! You've got A1! Grade, with " + Math.round(percentage) + "%.";



//         case (percentage >= 70):

//             resultMessage = "Excellent! You've got A! Grade, with " + Math.round(percentage) + "%.";

//             break;
//         case (percentage >= 60):

//             resultMessage = "Good job! You've got B Grade, with " + Math.round(percentage) + "%.";

//             break;
//         case (percentage >= 50):

//             resultMessage = "Good! You've got C Grade, with " + Math.round(percentage) + "%.";

//             break;
//         case (percentage < 50):

//             resultMessage = "Ooops! You are fail !! with  " + Math.round(percentage) + "%.";

//             break;



//         default:
//             resultMessage = "Please check your input.";

//             break;
//     }

//     document.getElementById('result').innerHTML = resultMessage;

// }



function calculatePercentage() {
    let obtainedMarks = document.getElementById('obtainmarks').value;
    let totalMarks = document.getElementById('totalmarks').value;

    obtainedMarks = +(obtainedMarks);
    totalMarks = +(totalMarks);

    const resultElement = document.getElementById('result');

    // Validate input
    if (isNaN(obtainedMarks) || isNaN(totalMarks) || totalMarks === 0) {
        resultElement.style.color = "red";
        resultElement.innerHTML = '⚠️ Please enter valid numbers!';
        return;
    }

    let percentage = (obtainedMarks / totalMarks) * 100;
    let resultMessage;
    let color;

    // Determine grade and message
    switch (true) {
        case (percentage > 100):
            resultMessage = "🚫 Enter valid numbers!";
            color = "red";
            break;
        case (percentage >= 80):
            resultMessage = `🌟 Excellent! You've got **A1 Grade** with ${Math.round(percentage)}%. 🎉`;
            color = "green";
            break;
        case (percentage >= 70):
            resultMessage = `👏 Great! You've got **A Grade** with ${Math.round(percentage)}%. Keep it up! 🌟`;
            color = "#4caf50";
            break;
        case (percentage >= 60):
            resultMessage = `👍 Good job! You've got **B Grade** with ${Math.round(percentage)}%.`;
            color = "#2196f3";
            break;
        case (percentage >= 50):
            resultMessage = `🙂 Not bad! You've got **C Grade** with ${Math.round(percentage)}%.`;
            color = "orange";
            break;
        case (percentage < 50):
            resultMessage = `😢 Oops! You failed with ${Math.round(percentage)}%. Better luck next time! 💪`;
            color = "red";
            break;
        default:
            resultMessage = "⚠️ Please check your input.";
            color = "red";
            break;
    }

    // Display result with appropriate color and emojis
    resultElement.style.color = color;
    resultElement.innerHTML = resultMessage;
}
