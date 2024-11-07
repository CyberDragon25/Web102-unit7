import CreateCrewmateForm from '../components/CreateCrewmateForm';
import CrewmateList from './CrewmateList';

function Home() {
  return (
    <div>
      <h1>My Crew</h1>
      <CreateCrewmateForm />
      <CrewmateList />
    </div>
  );
}

export default Home;
