async function main() {
    try {
        const userInfo = await fetchUserInfo("noy72");
        buildHTML(userInfo);
    } catch (error) {
        console.log(error);
    }
}

function fetchUserInfo(userId) {
    return fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`).then(
        (response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(
                    new Error(`${response.status} ${response.statusText}`)
                );
            }
        }
    );
}

function buildHTML(info) {
    const user_name = document.createElement("h4");
    user_name.appendChild(
        document.createTextNode(`${info.name} (@${info.login})`)
    );

    const avatar = document.createElement("img",);
    avatar.src = info.avatar_url;
    avatar.alt = info.login;
    avatar.height = 100;

    const list = document.createElement("ul");
    const following = document.createElement("li");
    following.appendChild(
        document.createTextNode(`Following: ${info.following}`)
    );
    const followers = document.createElement("li");
    followers.appendChild(
        document.createTextNode(`Followers: ${info.followers}`)
    );
    const repos = document.createElement("li");
    repos.appendChild(
        document.createTextNode(`Repos: ${info.public_repos}`)
    );
    list.appendChild(following);
    list.appendChild(followers);
    list.appendChild(repos);

    const result = document.querySelector('body > div');
    result.appendChild(user_name);
    result.appendChild(avatar);
    result.appendChild(list);
}

