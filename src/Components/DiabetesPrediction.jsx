import React, { useState } from 'react';

const DiabetesPrediction = () => {
    const [inputValues, setInputValues] = useState({});

    const parameters = ['Glucose', 'Insulin', 'BMI', 'Age'];

    const handleInputChange = (event, param) => {
        const value = event.target.value;
        setInputValues({
            ...inputValues,
            [param]: value,
        });
    };

    const handleSubmit = () => {
        console.log('Submitting Diabetes prediction with values:', inputValues);
    };

    return (
        <div className="container mx-auto py-12 px-6 md:px-24">
            <h1 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Diabetes Prediction</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                {parameters.map((param, index) => (
                    <div key={index} className="mb-4">
                        <label htmlFor={param} className="block text-gray-700 text-sm font-bold mb-2">
                            {param}:
                        </label>
                        <input
                            type="text"
                            id={param}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={(e) => handleInputChange(e, param)}
                        />
                    </div>
                ))}
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

export default DiabetesPrediction;
