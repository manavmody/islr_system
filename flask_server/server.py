from flask import Flask,request
from flask_cors import CORS
import base64,requests
import cv2
app = Flask(__name__)
cors = CORS(app)

@app.route("/video",methods=["GET"])
def video():
    video_data = request.json['videoData']
    video_binary = base64.b64decode(video_data.split(',')[1])
    with open('video.mp4', 'wb') as f:
        f.write(video_binary)
    cap = cv2.VideoCapture('video.mp4')
    # Loop through each frame of the video
    frame_count = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
    cap.release()
    return {'message': 'Video frames extracted successfully'}



if __name__ == "__main__":
    app.run(debug=True)