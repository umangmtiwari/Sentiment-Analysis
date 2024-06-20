document.addEventListener('DOMContentLoaded', (event) => {
    const recordButton = document.getElementById('recordButton');
    const stopButton = document.getElementById('stopButton');
    const transcriptInput = document.getElementById('transcriptText');
    const sentimentDiv = document.getElementById('sentiment');

    let recognition;
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
    } else {
        recognition = new SpeechRecognition();
    }

    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function() {
        recordButton.style.display = 'none';
        stopButton.style.display = 'inline-block';
    };

    recognition.onend = function() {
        recordButton.style.display = 'inline-block';
        stopButton.style.display = 'none';
    };

    recognition.onresult = function(event) {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                transcript += event.results[i][0].transcript;
            } else {
                transcript += event.results[i][0].transcript;
            }
        }
        transcriptInput.value = transcript;

        // Send transcript to Flask backend
        fetch('/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `transcript=${encodeURIComponent(transcript)}`,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            
            // Update sentiment scores and bars
            updateSentimentDisplay(data.sentiment);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    recordButton.addEventListener('click', () => {
        recognition.start();
    });

    stopButton.addEventListener('click', () => {
        recognition.stop();
    });

    // Function to update sentiment display
    function updateSentimentDisplay(sentimentData) {
        const sentimentBoxes = {
            positive: document.querySelector('.result-box.positive'),
            negative: document.querySelector('.result-box.negative'),
            neutral: document.querySelector('.result-box.neutral'),
            compound: document.querySelector('.result-box.compound')
        };

        // Update each sentiment box
        Object.keys(sentimentData).forEach(sentiment => {
            const score = sentimentData[sentiment];
            const bar = sentimentBoxes[sentiment].querySelector('.bar');
            const scoreDisplay = sentimentBoxes[sentiment].querySelector('.score');

            // Update bar width and score display
            bar.style.width = `${score * 100}%`; // Convert score to percentage
            scoreDisplay.textContent = score.toFixed(2); // Display score rounded to 2 decimal places
        });
    }
});
