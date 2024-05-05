import logo from './logo.svg';
import './App.css';
import JobCard from './Components/JobCard/JobCard';
import JobsPage from './Components/JobsPage/JobsPage';
import { fetchJobsData } from './services/networkCalls';
function App() {

  return (
    <div className="App">
      <JobsPage ></JobsPage>
    </div>
  );
}

export default App;
