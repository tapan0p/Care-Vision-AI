import React, { useState } from 'react';

const DiagnosisForm = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(''); 
  const [diagnosisResult, setDiagnosisResult] = useState(null); 
  const [accuracy, setAccuracy] = useState(null); 

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    setSelectedImage(image); 
    const imageURL = URL.createObjectURL(image); 
    setImagePreview(imageURL); 
  };

  // Function to handle diagnosis type selection
  const handleTypeSelect = (event) => {
    const type = event.target.value;
    setSelectedType(type);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!selectedImage || !selectedType) {
      console.log('Please select an image and diagnosis type');
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('type', selectedType);
  
      const response = await fetch('http://localhost:5000/diagnose', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Failed to send data to backend');
      }
  
      const responseData = await response.json(); // Parse response body as JSON
      console.log('Data sent to backend successfully');
      console.log('Response from backend:', responseData);

      // Extract result and accuracy from the response
      let { result } = responseData;
      
    
      if(selectedType=='type1'){
        let accuracyPercentage = (result * 100).toFixed(2);
        if (result <= 0.5) accuracyPercentage = 100 - accuracyPercentage
        setDiagnosisResult(result > 0.5 ? 'Brain tumor detected' : 'Brain tumor not detected');
        setAccuracy(accuracyPercentage);
      }
      else if(selectedType=='type2'){
        let predictedClassIndex = result

        let classLabels = {
          0: 'adenocarcinoma',
          1: 'large_cell_carcinoma',
          2: 'normal',
          3: 'squamous_cell_carcinoma'
      };

      let predictedClassLabel = classLabels[predictedClassIndex];
      setDiagnosisResult(predictedClassLabel)
      setAccuracy(null);

      }
      else if(selectedType=='type4'){
        let predictedClassIndex = result

        let classLabels = {
          4: 'melanocytic nevi',
          6: 'melanoma',
          2: 'benign keratosis-like lesions',
          1: 'basal cell carcinoma',
          5: 'pyogenic granulomas and hemorrhage',
          0: 'Actinic keratoses and intraepithelial carcinomae',
          3: 'dermatofibroma'
          }

      let predictedClassLabel = classLabels[predictedClassIndex];
      console.log(predictedClassLabel)
      setDiagnosisResult(predictedClassLabel)
      setAccuracy(null);

      }
      else if(selectedType=='type3'){
        let accuracyPercentage = (result * 100).toFixed(2);
        if (result <= 0.5) accuracyPercentage = 100 - accuracyPercentage
        setDiagnosisResult(result > 0.5 ? 'Pneumonia detected' : 'Pneumonia not detected');
        setAccuracy(accuracyPercentage);
      }
      
      } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">Upload Image for Diagnosis</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Upload Input */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium mb-1">Select Image:</label>
          <input type="file" id="image" accept="image/*" onChange={handleImageUpload} className="border border-gray-300 p-2 w-full" />
          {/* Display image preview */}
          {imagePreview && <img src={imagePreview} alt="Selected" className="mt-2 w-full h-50" />}
        </div>
        {/* Diagnosis Type Selection */}
        <div>
          <label htmlFor="diagnosisType" className="block text-sm font-medium mb-1">Select Diagnosis Type:</label>
          <select id="diagnosisType" className="border border-gray-300 p-2 w-full" value={selectedType} onChange={handleTypeSelect}>
            <option value="">Select Diagnosis Type</option>
            <option value="type1">Brain tumor detection</option>
            <option value="type2">Lung cancer classification</option>
            <option value="type3">Pneumonia detection</option>
            <option value="type4">Skin cancer classification</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Submit Button */}
        <button type="submit" className="bg-cyan-900 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600">Submit</button>
      </form>

      {/* Display diagnosis result and accuracy */}
      {diagnosisResult && (
        <div className="mt-4">
          <p className="font-bold">Diagnosis Result:</p>
          <p>{diagnosisResult}</p>
          <p className="font-bold">{accuracy==null?'':'Accuracy : '}</p>
          <p>{accuracy}{accuracy==null?'':'%'}</p>
        </div>
      )}
    </div>
  );
};

export default DiagnosisForm;
