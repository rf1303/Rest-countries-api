

export const CountriesNav = () => {
    const handleChange = (e) => {
        console.log('e.target.value:', e.target.value)
    }
    return (
    <>
        <div className="">
            <div className="">
                <span className=""><IconSearch aria-hidden="true" /></span>
                <input
                  type="text"
                  name=""
                  value={e.target.value}
                  onChange={handleChange}
                  placeholder="Search fo a country..."
                  className=""
                />
            </div>
            <select
              name=""
              value={value}
              onChange={handleChange}
              className=""
            >
              <option value="">Select...</option>
              
            </select>
        </div>
    </>
    ); 
}
