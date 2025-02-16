import React, { useState } from 'react';

const RespiratoryDiseasePrediction = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    const handleSubmit = () => {
        console.log('Submitting Pneumonia prediction with image:', image);
    };

    return (
        <div className="container mx-auto py-12 px-6 md:px-24">
            <h1 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Respiratory Disease Prediction</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                        X-ray Image:
                    </label>
                    <input
                        type="file"
                        id="image"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleImageChange}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Predict
                </button>
            </form>
        </div>
    );
};

export default RespiratoryDiseasePrediction;
