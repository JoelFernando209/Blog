import React, { lazy, Suspense } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./routers/home/index"));

export default function App() {
  return (
    <>
      <Suspense fallback={<h1>cargando...</h1>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </>
  );
}
