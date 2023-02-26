
export const fetchLatestMessages = async () =>
{
    const response = await fetch('http://localhost:5000/messages', {
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    });

    const responseJson = await response.json();

    return responseJson;
}
