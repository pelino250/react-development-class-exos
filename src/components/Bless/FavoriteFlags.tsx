import React,{useState} from 'react';

const FavoriteCountries = () => {
  const
  return (
    <div>
      <form>
        <div className="inputFields">
          <label>Add Your Favorite Country Flags</label>
            <input type= "text"/>
            <button>ADD</button>
        </div>

        <div className="countryList">

        </div>
      </form>
    </div>
  );
};

export default FavoriteCountries;