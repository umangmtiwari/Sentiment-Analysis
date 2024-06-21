# Live Sentiment Analysis

https://live-sentiment-analysis.vercel.app/

Welcome to the **Live Sentiment Analysis** repository! This project enables real-time voice recording, transcription, and sentiment analysis using Flask, HTML, CSS, JavaScript, and the VADER sentiment analysis tool. The application captures audio from the user, transcribes it into text, analyzes the sentiment, and displays the results graphically.

- **Start Speaking**: Click the "Start Recording" button to begin capturing audio.
- **Stop Speaking**: Click the "Stop Recording" button to stop capturing audio.
- **Transcription**: Automatically transcribes the recorded audio into text using Google's speech recognition API.

### Sentiment Analysis

- **VADER Sentiment Analysis**: Analyzes the transcribed text using the VADER (Valence Aware Dictionary and sEntiment Reasoner) sentiment analysis tool.
- **Sentiment Scores**: Provides detailed sentiment scores including negative, neutral, positive, and compound values.

### User Interface

- **Modern Design**: Features a clean, modern design with CSS styling and a starry background animation.
- **Responsive Layout**: Ensures the application is accessible on various devices and screen sizes.
- **Inline Display**: Displays the recorded audio's transcription and sentiment analysis results directly on the webpage.

## Technologies Used

- **Python**: Backend logic using Flask.
- **JavaScript**: Client-side scripting for recording audio.
- **HTML/CSS**: Frontend design and layout.
- **VADER Sentiment Analysis**: Tool for sentiment analysis.
- **Google Speech Recognition API**: For transcribing audio to text.

## How to Run

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/Live-Sentiment-Analysis.git
    cd Live-Sentiment-Analysis
    ```

2. **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

3. **Run the Flask application**:
    ```bash
    python app.py
    ```

4. **Access the application**:
    Open your web browser and go to `http://127.0.0.1:5000/`.

## Directory Structure

```plaintext
Live-Sentiment-Analysis/
│
├── static/
│   ├── star1.png
│   ├── star2.png
│   ├── star3.png
│   ├── star4.png
│   ├── star5.png
│   ├── star6.png
│   ├── star7.png
│   ├── star8.png
│   ├── script.js
│
├── templates/
│   └── index.html
│
├── app.py
├── requirements.txt
└── README.md
```

## Future Enhancements

- **Improved Error Handling**: Enhance error messages and handling for better user experience.
- **Additional Sentiment Analysis Models**: Incorporate other sentiment analysis models for comparison.
- **Speech-to-Text Services**: Option to choose between multiple speech-to-text services.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcomed.

Feel free to customize this README to better match your project's specifics and preferences.
