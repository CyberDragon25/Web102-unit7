import CreateCrewmateForm from '../components/CreateCrewmateForm';
import CrewmateList from '../components/CrewmateList';

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
