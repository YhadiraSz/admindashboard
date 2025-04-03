import { Suspense, lazy } from "react";

const Insights = lazy(() => import("./Insights/Insights"));
const Orders = lazy(() => import("./Orders/Orders"));

const Main = () => (
  <main>
    <h1
      className="dashboard-title"
      style={{ opacity: 1, margin: 0, padding: 0 }}
    >
      Dashboard
    </h1>
    <Suspense fallback={<div className="loading-spinner" />}>
      <Insights />
      <Orders />
    </Suspense>
  </main>
);

export default Main;
