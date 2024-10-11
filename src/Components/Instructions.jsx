import React from 'react';

const Instructions = () => {
    return (
        <div className=" fixed inset-0 z-50 flex flex-col justify-center items-center mt-10 p-4">
            {/* English Instructions */}
            <div className="bg-gray-100 p-6 rounded-2xl w-96 h-96  mb-6">
                <h2 className="text-xl font-bold mb-4">Instructions (English):</h2>
                <ul className="list-decimal pl-5">
                    <li>After some time, the client will contact you.</li>
                    <li>Our employee will be there during the deal.</li>
                    <li>Please bring valid identification documents.</li>
                    <li>Ensure the product is in the condition as described.</li>
                    <li>In case of any issues, contact customer support.</li>
                </ul>
            </div>

            {/* Urdu Instructions */}
            {/* <div className="bg-gray-100 p-6 rounded-lg w-full">
                <h2 className="text-xl font-bold mb-4">ہدایات (Urdu):</h2>
                <ul className="list-decimal pl-5 text-right">
                    <li>کچھ دیر بعد، کلائنٹ آپ سے رابطہ کرے گا۔</li>
                    <li>ہمارا ملازم ڈیل کے دوران وہاں موجود ہوگا۔</li>
                    <li>براہ کرم درست شناختی دستاویزات لائیں۔</li>
                    <li>یقینی بنائیں کہ پروڈکٹ دی گئی حالت میں ہے۔</li>
                    <li>کسی بھی مسئلے کی صورت میں، کسٹمر سپورٹ سے رابطہ کریں۔</li>
                </ul>
            </div> */}
        </div>
    );
};

export default Instructions;
