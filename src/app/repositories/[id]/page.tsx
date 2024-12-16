import { get } from "http";

interface PageDetailProps {
    params: {
        id: string;
    };
}

export const revalidate = 60

async function getData(id: string) {
    console.log(id);
    const response = await fetch("https://api.github.com/users/gogoncalves/repos");
    return response.json();
}

export default async function RepositoryId({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    const data = await getData(id);

    return (
        <div>
            <h1>Detail repository {id} page</h1>
        </div>
    );
}
