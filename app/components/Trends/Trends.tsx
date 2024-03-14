"use client";
import { FunctionComponent } from "react";
import data from "../../data.json";
import Card from "./components/Card";

interface TrendsProps {}

const Trends: FunctionComponent<TrendsProps> = () => {
  return (
    <section className="bg-gray-200 py-2 px-4 rounded-lg">
      <h1>Top posts</h1>
      {data.trends.map((trend) => (
        <Card item={trend} key={trend.title} />
      ))}
    </section>
  );
};

export default Trends;
