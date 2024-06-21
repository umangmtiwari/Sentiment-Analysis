from flask import Flask, request, render_template, jsonify, make_response
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
        
        # Create the response with the correct Content-Type header
        response = make_response(jsonify({"transcript": transcript, "sentiment": sentiment}))
        response.headers['Content-Type'] = 'application/json; charset=utf-8'
        return response

if __name__ == '__main__':
    app.run(debug=True)
