'use client';

import Modal from "./modal";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const isOpen = useSelector((state: { openModal: boolean }) => state.openModal);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen gap-6">
        <h1 className="text-4xl font-bold">Command Palette</h1>
        <button className="bg-gray-700 px-10 py-4 rounded hover:bg-gray-600 hover:cursor-pointer" onClick={() => dispatch({ type: "OPEN_MODAL" })}>Open Command Palette</button>
      </div>
      {isOpen && (<Modal/>)}
    </>
  );
}
