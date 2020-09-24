
export const netWorkService = ({ url, method, body }) => {
    console.log("dfdf", method, body, url);

    const name = body ? JSON.stringify(body) : null;

    return fetch(` http://localhost:7070/api/${url}`, {
        method,
        mode: 'cors',
        headers: {
            "Content-Type": "text/plain",
        },
        body: name,
    }).then((res) => res.json()).catch(console.log)
    ;
};
