import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
import App from "./containers/App";

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// ProviderによってAppComponent以下のコンポーネントからstoreにアクセスすることが可能となる
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
