
import './App.css';
import {Pie} from 'react-chartjs-2';

function App() {
  return (
    <div className="App">
<Pie data={
        {
          labels: [
            'Career',
            'Family',
            'Recreation',
            'Romance',
            'Health',
            'Social/Fun'
          ],
          datasets: [{
            data: [20, 40, 15, 15, 15, 5],
            backgroundColor: [
              'navy',
              'orange',
              'yellow',
              'plum',
              'green',
              'gray'
            ],
            hoverOffset: 4
          }]
        }
      }
        options={{
          plugins: {
            title: {
              display: true,
              text: ['Life balance wheel'],
              color: 'green',
              fullSize: false,
              font: {
                size: 50
              },
              position: 'top',
            }
          }
        }}
      />
    </div>
  );
}

export default App;
