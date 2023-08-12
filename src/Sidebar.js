const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="profile-div">
                <img src={process.env.PUBLIC_URL + '/img/profile.png'} />

                <div className="container">
                    <p>Username Here</p>
                    <p>emailhere@gmail.com</p>
                </div>

            </div>

            <div className="siderbar-menu">


                <div className="newPro">
                    <a href="#" className="newProject">New Project</a>
                </div>


                <div className="button home">
                    <img src={process.env.PUBLIC_URL + '/img/icons/home.png'} />
                    <p>Home</p>
                </div>

                <div className="button notes">
                    <img src={process.env.PUBLIC_URL + '/img/icons/notes.png'} />
                    <p>Notes</p>
                </div>

                <div className="button flash-cards">
                    <img src={process.env.PUBLIC_URL + '/img/icons/flash.png'} />
                    <p>Flash Cards</p>
                </div>

                <div className="button summaries">
                    <img src={process.env.PUBLIC_URL + '/img/icons/summaries.png'} />
                    <p>Summaries</p>
                </div>
            </div>




        </aside>

    );
}

export default Sidebar;