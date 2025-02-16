import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import FeaturesSection from './Components/FeaturesSection';
import DiseaseDetection from './Components/DiseaseDetection'; // AI Disease Detection Menu
import ConsultationSection from './Components/ConsultationSection';
import TestimonialsSection from './Components/TestimonialsSection';
import Footer from './Components/Footer';
import ContactSection from './Components/ContactSection';
import LoginComponent from './Components/LoginComponent';
import SignupComponent from './Components/SignupComponent';
import DiabetesPrediction from './Components/DiabetesPrediction';
import HeartPrediction from './Components/HeartDiseasePrediction';
import RespiratoryDiseasePrediction from './Components/RespiratoryDiseasePrediction';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroSection />
                            <AboutSection />
                            <FeaturesSection />
                            <TestimonialsSection />
                            <ContactSection />
                            <Footer />
                        </>
                    } />
                    <Route path="/features" element={<FeaturesSection />} />
                    <Route path="/about" element={<AboutSection />} />
                    <Route path="/contact" element={<ContactSection />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/signup" element={<SignupComponent />} />
                    <Route path="/disease-detection" element={<DiseaseDetection />} /> {/* AI Disease Detection Menu */}
                    <Route path="/consultation" element={<ConsultationSection />} />
                    {/* New routes for Disease Prediction */}
                    <Route path="/diabetes" element={<DiabetesPrediction />} />
                    <Route path="/heart" element={<HeartPrediction />} />
                    <Route path="/respiratory" element={<RespiratoryDiseasePrediction />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;