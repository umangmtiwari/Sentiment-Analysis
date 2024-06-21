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
            transcript += event.results[i][0].transcript;
        }
        transcriptInput.value = transcript;

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

    function updateSentimentDisplay(sentimentData) {
        let sentimentHtml = '';
        for (const [key, value] of Object.entries(sentimentData)) {
            sentimentHtml += `${key}: ${value.toFixed(2)}<br>`;
        }
        sentimentDiv.innerHTML = sentimentHtml;
    }
});
