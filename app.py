from flask import Flask, request, render_template, jsonify
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    if request.method == 'POST':
        transcript = request.form.get('transcript')
        analyser = SentimentIntensityAnalyzer()
        sentiment = analyser.polarity_scores(transcript)
        print(f"Transcript: {transcript}")
        print(f"Sentiment: {sentiment}")
        return jsonify({"transcript": transcript, "sentiment": sentiment})

if __name__ == '__main__':
    app.run(debug=True)
