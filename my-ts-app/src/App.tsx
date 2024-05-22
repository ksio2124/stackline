import data from './static/stackline_frontend_assessment_data_2021.json'
import './App.css';
import SalesTable from './SalesTable';


function App() {
  return (
    <div className='flex flex-col h-screen'>
      <div className='h-8 bg-blue-500 grow-0'>
      </div>
      <div className='bg-slate-500 flex grow'>
        <div className='m-2 grow-0 rounded-lg bg-white p-4'>
          <img src={data[0].image} />

        </div>
        <div className='grow flex flex-col'>
          <div className='m-2 bg-white rounded-lg grow'></div>
          <div className='m-2 bg-white rounded-lg grow'>
            <SalesTable />
          </div>

        </div>

      </div>

    </div>
  )
}

export default App;