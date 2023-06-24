const combineUrl = (url) => `http://127.0.0.1:3000${url}`;

const processResponce = (res) => res.json();

const get = async (url) => fetch(combineUrl(url), { method: "GET" }).then(processResponce);

const post = async (url, body) => fetch(combineUrl(url), {
    headers: { 'Content-Type': 'application/json' },
    method: "POST",
    body: JSON.stringify(body)
}).then(processResponce);

const put = async (url, body) => fetch(combineUrl(url), { method: "PUT", body: JSON.stringify(body) }).then(processResponce);

const remove = async (url) => fetch(combineUrl(url), { method: "DELETE" }).then(processResponce);

export {
    get,
    post,
    put,
    remove
}