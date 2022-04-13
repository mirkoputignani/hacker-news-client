import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center space-y-100 mt-12 sm:mt-24 md:mt-32">
        <h2 className="text-3xl w-[740px tex-gray-800 text-center leading-normal sm:text-6xl font-bold capitalize dark:text-gray-100">
          The blog
        </h2>
        <p className="text-xl sm:text-md text-center text-gray-500 dark:text-gray-200">
          Hacker's news
        </p>
      </section>
    </Layout>
  );
};

export default Home;
