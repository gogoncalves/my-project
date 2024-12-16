import { OwnerRepo } from "@/components/OwnerRepo";

async function delayFetch(url: string, delay: number) {
  await new Promise(resolve => setTimeout(resolve, delay));
  const response = await fetch(url, { next: { revalidate: 60 } });
  return response.json();
}

// async function getData() {
//   const response = await fetch("https://api.github.com/users/gogoncalves/repos")
//   return response.json();
// }

async function getData() {
  const data = await delayFetch("https://api.github.com/users/gogoncalves/repos", 0);
  return data;
}

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

export default async function Home() {
  const data: DataProps[] = await getData();

  return (
    <main>
      <h1>Página Home</h1>
      <span>Seja bem vindo a pagina home</span>
      <br />
      <h3>My repositories</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repository: </strong>
          <a href={`https://github.com/${item.full_name}`} target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
          <br />
          <OwnerRepo avatar_url={item.owner.avatar_url} name={item.owner.login} />
          <br />
        </div>
      ))}
    </main>
  );
}
