import "./App.css";
import { Provider } from "react-redux/es";
// import store from "./redux/task/store";
import { NativeBaseProvider } from "native-base";
import CustomRoutes from "./routes/Routes";

function App() {
  return (
    // <Provider >
      <NativeBaseProvider>
        <div
          style={{
            width: "412px",
            margin: "auto",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <CustomRoutes />
        </div>
      </NativeBaseProvider>
    // </Provider>
  );
}

export default App;
