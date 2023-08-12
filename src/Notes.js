import { useState } from "react";

const Notes = () => {

    const [notes, setNotes] = useState([
        { note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "2023-04-04", id: 1 },
        { note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "2023-04-04", id: 1 },
        { note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "2023-04-04", id: 1 },
        { note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "2023-04-04", id: 1 }
    ])



    return (

        <main className="notes">
            <div className="innerNotesGrid">
                <div className="note-div">
                    <h1>Note</h1>
                </div>

                <div className="note-div">
                    <h1>Note</h1>
                </div>

                <div className="note-div">
                    <h1>Note</h1>
                </div>

                <div className="note-div">
                    <h1>Note</h1>
                </div>

                <div className="note-div">
                    <h1>Note</h1>
                </div>

                <div className="note-div">
                    <h1>Note</h1>
                </div>

                <div className="note-div">
                    <h1>Note</h1>
                </div>

                <div className="note-div">
                    <h1>Note</h1>
                </div>

                <div className="note-div">
                    <h1>Note</h1>
                </div>

                <div className="note-div">
                    <h1>Note</h1>
                </div>

                <div className="note-div">
                    <h1>Note</h1>
                </div>

                <div className="note-div">
                    <h1>Note</h1>
                </div>

                <div className="note-div">
                    <h1>Note</h1>
                </div>

                <div className="note-div">
                    <h1>Note</h1>
                </div>

                <div className="note-div">
                    <h1>Note</h1>
                </div>

            </div>
        </main>
    );
}

export default Notes;