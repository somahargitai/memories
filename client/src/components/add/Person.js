import React from 'react';
import useAxios from 'axios-hooks'
// import People from '../view/People';
import PeopleList from '../view/PeopleList';

export const Person = () => {
/*
  const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
    'https://api.myjson.com/bins/820fc'
  );
  
  const [{ data: getHealthData, loading: getHealthLoading, error: getHealthError }] = useAxios(
    'http://localhost:5001'
  );

  const [{ data: putData, loading: putLoading, error: putError}, executePut] = useAxios(
    {
      url: 'https://api.myjson.com/bins/820fc',
      method: 'PUT'
    },
    { manual: true }
  );
*/

  const [{ data: postData, loading: postLoading, error: postError}, executePost] = useAxios(
    {
      url: 'http://localhost:5001/personadd',
      method: 'POST'
    },
    { manual: true }
  );
/*
  const updateData = () => {
    executePut({
      data: {
        id: '1',
        name: 'Josyip Manó',
        nick: 'Manó',
        birth: '1988-08-08',
        birthPlace: 'Budapest',
        email: 'mano@mano.com'
      },
    })
  }
*/
  const uploadThis = {
    "name": "Kogutowicz Peter",
    "nick": "Manó",
    "birth": "1988-08-08",
    "birthPlace": "Budapest",
    "email": "mano@mano.com"
  };

  const uploadPerson = () => {
    executePost({
      data: {
        ...uploadThis,
        updatedAt: new Date().toISOString()
      }
    })
  }

  return (
    <div>
    <button onClick={uploadPerson}> Upload Person </button>
      <p>some text</p>
      <PeopleList />
    </div>
  );
}

export default Person;

// <button onClick={updateData}>update data</button> 
// <pre>{JSON.stringify(putData || getData, null, 2)}</pre>