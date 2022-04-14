import ChevronDownIcon from '@heroicons/react/outline/ChevronDownIcon';
import ListItem from '../components/ListItem/ListItem';

const item = {
  heading: "Can't you just right click on this?",
  site: 'lucasoftware.com',
  time: '10h',
  user: 'bangonkeyboard',
  likes: 20,
  comments: 50,
  index: 1,
};

const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-8 space-y-4">
      <h1 className="text-4xl">
        Hacker <span className="text-teal-600">news</span>
      </h1>
      <div className="flex flex-row justify-between items-center mt-12 px-4 md:px-10 w-full">
        <h1 className="text-3xl">Top news</h1>
        <button
          type="button"
          className="flex justify-between w-28 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-50 text-sm font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Page
          <ChevronDownIcon className="w-5 h-5 mr-1 ml-2" />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center space-y-8 w-full">
        <ListItem item={item} />
        <ListItem item={item} />
        <ListItem item={item} />
      </div>
    </section>
  );
};

export default Home;
