import CreateNote from "./CreateNote";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="top-nav">
                <h2>Recent Notes</h2>
                <CreateNote />
                {/* Create Note Component here */}
            </div>

            <div className="bottom-nav">
                {/* Search bar component here */}
                {/* sort component here */}
            </div>
        </nav>
    );
}

export default Navbar;