const Search = () => {
    return (
        <div className="search">
            <input placeholder="Search" type="search" name="" id="" />

            <div className="button filter">
                <img src={process.env.PUBLIC_URL + '/img/icons/sort.png'} />
                <p>Sort:</p>
                <p>Chronological</p>
            </div>
        </div>
    );
}

export default Search;