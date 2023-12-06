import { Provider } from "react-redux";
import Chart from "./components/Chart";
import ThemeSetting from "./components/ThemeSetting";
import store from "./store/createStore.js";

const Home = () => {
  return (
    <Provider store={store}>
      <main className="max-w-full flex flex-col justify-center h-screen items-center relative">
        <ThemeSetting />
        <Chart />
      </main>
    </Provider>
  );
};

export default Home;
