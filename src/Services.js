
export const getAllRoomMessages = async () =>
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

export const sendRoomMessage = (messagePayload) =>
{
    const response = fetch('http://localhost:5000/messages', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messagePayload)
    });

    return response;
}
