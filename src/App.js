import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import "./App.css";

export default function App() {
  const [textcopy, setTextcopy] = useState();
  const [isCopied, setCopied] = useClipboard(textcopy);

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <p>React Hook that converts speech to text and copies to clipboard.</p>

        <div className="main-content" onClick={() => setTextcopy(transcript)}>
          {transcript}
        </div>

        <div className="btn-style">
          <button onClick={setCopied}>
            {isCopied ? "Copied!" : "Copy to Clipboard"}
          </button>
          <button onClick={startListening}>Start Listining</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listining
          </button>
        </div>
      </div>
    </>
  );
}
