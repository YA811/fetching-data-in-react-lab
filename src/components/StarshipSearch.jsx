

const search = (props) => {
    const { setQuery } = props;

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <input type="text" onChange={handleInputChange} placeholder="Search for a starship" />
    );
   
}

export default search;