"use client";

import { useEffect, useState } from "react";

interface DataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    id: number;
    login: string;
    avatar_url: string;
    url: string;
  };
}

async function getData() {
  const response = await fetch("https://api.github.com/users/gogoncalves/repos");
  return response.json();
}

export default function Repositories() {
  const [data, setData] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>Repositories page</h1>
      <br />
      <h3>My repositories</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => (
          <div key={item.id}>
            <strong>Repository: </strong>
            <a href={`https://github.com/${item.full_name}`} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
            <br />
            <br />
          </div>
        ))
      )}
    </main>
  );
}
