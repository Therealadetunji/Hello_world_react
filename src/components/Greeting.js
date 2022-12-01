import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../redux/Greetings/Greeting';

const Greeting = () => {
  const dispatch = useDispatch();

  const greet = useSelector((state) => (state.greetings));

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  return (
    <h1 key={greet.id}>
      {greet.greetings.message}
    </h1>
  );
};
export default Greeting;
