
const list= (props)=>{
    const { starships, query } = props;

    const filteredStarships = starships.filter((starship) =>
        starship.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <ul>
            {filteredStarships.map((starship) => (
                <li key={starship.url}>
                    <a href={starship.url} target="_blank" rel="noopener noreferrer">
                        {starship.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default list;