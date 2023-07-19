import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "./context";

import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider activeChain={ChainId.Goerli}>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);




// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";
// import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// import { StateContextProvider } from "./context";

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(
//   <React.StrictMode>
//     <ThirdwebProvider activeChain={ChainId.Goerli}>
//       <Router>
//         <StateContextProvider>
//           <App />
//         </StateContextProvider>
//       </Router>
//     </ThirdwebProvider>
//   </React.StrictMode>
// );
