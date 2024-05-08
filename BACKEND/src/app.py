import numpy as np
from PIL import Image
from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2

from brain_tumor import process_brain_tumor_diagnosis
from pneumonia import predict_pneumonia
from lung_cancer import predict_lung_cancer
from skin_cancer import skin_cancer_classification


app = Flask(__name__)
CORS(app)

@app.route('/home')
def start():
    return "code is working"



@app.route('/diagnose', methods=['POST'])
def diagnose():
    # Check if the post request has the image and type parts
    if 'image' not in request.files or 'type' not in request.form:
        return jsonify({'error': 'Missing image or type data'}), 400
    
    image = request.files['image']
    diagnosis_type = request.form['type']

    # Check if the file is an image
    if image.filename == '' or not image.filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
        return jsonify({'error': 'Invalid or missing image file'}), 400



    if diagnosis_type == 'type1':
        image_data = Image.open(image)
        cv2_image = cv2.cvtColor(np.array(image_data), cv2.COLOR_RGB2BGR)
        result = process_brain_tumor_diagnosis(cv2_image)

    elif diagnosis_type == 'type2':
        image_data = Image.open(image)
        image_data = np.array(image_data)
        result = predict_lung_cancer(image_data)

    elif diagnosis_type == 'type3':
        image_data = Image.open(image)
        result = predict_pneumonia(image_data)

    elif diagnosis_type =='type4':
        image_data = Image.open(image)
        image_data = np.array(image_data)
        result = skin_cancer_classification(image_data)

    else:
        return jsonify({'error': 'Invalid diagnosis type'}), 400
    result = result.tolist()
    return jsonify({'result': result}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
