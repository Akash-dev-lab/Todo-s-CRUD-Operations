import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { asyncgetusers } from './store/reducers/UserAction';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetusers());
  }, [dispatch]);

  return <div>App</div>


}

export default App
