import React, { useEffect } from 'react';
import { useGetProfileDataQuery} from './Redux/api';

function App() {
 
  const {data=[]} = useGetProfileDataQuery()

  useEffect(() => {
    // const postebi = data.posts
    const poto = data.picture.data.url
    console.log(poto);
  })

  return (
    <div>
      <div>
        {data.name}
      </div>
      <div>
        {data.email}
      </div>
      <div>
        <img src={data.picture.data.url} />
      </div>
    </div>
  );
}

export default App;
