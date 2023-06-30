import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const data = [
  { name: 'John', age: 25, city: 'New York' },
  { name: 'Alice', age: 30, city: 'Los Angeles' },
  { name: 'Bob', age: 28, city: 'Chicago' },
  { name: 'Emily', age: 35, city: 'San Francisco' },
];

const Table = ({ data }) => {
  const [sortColumn, setSortColumn] = useState(null);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortColumn(null);
    } else {
      setSortColumn(column);
    }
  };
	
	let sortedData;
	if (sortColumn === 'age'){
		sortedData = sortColumn ? [...data].sort((a, b) => parseInt(a[sortColumn]) - parseInt(b[sortColumn])) : data;
	}
	else{
		sortedData = sortColumn ? [...data].sort((a, b) => a[sortColumn].localeCompare(b[sortColumn])) : data;
	}

  return (
    <div>
      <ul>
        {Object.keys(data[0]).map((column) => (
          <li key={column}>
            <input
              type="radio"
              name="sort"
              checked={sortColumn === column}
              onChange={() => handleSort(column)}
            />
            {column}
          </li>
        ))}
      </ul>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function Full() {
	return(
			<>
					<div>
						<h1>My Table</h1>
						<Table data={data} />
					</div>
			</>
	)
}

 root.render(<Full />);
 
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
