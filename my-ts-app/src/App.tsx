import './App.css';
import SalesTable from './SalesTable';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './state/store';
import React from 'react';
import { getItemAsync } from './state/item/itemSlice';


function App() {
  const image = useSelector((state: RootState) => state.item.entities?.[0]?.image)
  const dispatch: AppDispatch = useDispatch();
    
  React.useEffect(() => {
    dispatch(getItemAsync())
  }, [])
  return (
    <div className='flex flex-col h-screen'>
      <div className='h-8 bg-blue-500 grow-0'>
      </div>
      <div className='bg-slate-500 flex grow'>
        <div className='m-2 grow-0 rounded-lg bg-white p-4'>
          { image ? <img src={image} /> : null

          }
        </div>
        <div className='grow flex flex-col'>
          <div className='m-2 bg-white rounded-lg grow min-h-60'></div>
          <div className='m-2 bg-white rounded-lg grow'>
            <SalesTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;