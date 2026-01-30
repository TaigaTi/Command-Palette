'use client';

import { useDispatch } from "react-redux";

export default function Modal() {
    const dispatch = useDispatch();
    
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-gray-800 p-6 rounded shadow-lg w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Command Palette</h2>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none"
                        placeholder="Type a command..."
                    />
                    <div className="flex justify-end">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer" onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}