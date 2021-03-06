export async function getIssuesService(page: number) {
    const url = `https://api.github.com/repos/rails/rails/issues?page=${page}&per_page=5`;
    const response = fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return [];
            }
        })
        .catch((error) => console.log("Request Error"));
    return response;
}
