import ArrowUpIcon from '@heroicons/react/outline/ArrowUpIcon';
import ChatIcon from '@heroicons/react/outline/ChatIcon';

const ListItem = ({ item }) => {
  return (
    <div className="flex flex-row justify-center items-center space-x-2 w-full">
      {/* badge e titolo */}
      <div className="flex justify-center">
        <span className="bg-teal-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-teal-600 dark:text-gray-800">
          {item.index}
        </span>
      </div>
      {/* informazioni */}
      <div className="flex">
        <div className="flex flex-col">
          <span className="text-md font-medium">{item.heading}</span>
          <div className="flex flex-row justify-between mt-2">
            <span className="text-gray-500 text-sm">{item.site}</span>
            <span className="text-gray-500">
              {item.time} - by{' '}
              <span className="text-blue-500">{item.user}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
