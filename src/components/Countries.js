const Countries = ({ countries, loading }) => {

  if(loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul className="list-group mb-2">
      {
        countries.map((country, i) => (
          <li className="list-group-item" key={i}>
            {country.name.common}
            <img 
              src={country.flags.svg} 
              alt={country.flags.alt} 
              title={country.flags.alt}
              className="ms-2"
              style={{width:25}} />
          </li>
        ))
      }
    </ul>
  )
}

export default Countries;