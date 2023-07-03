const ol = document.querySelector('#projects-cards ol')

function getApiGithub() {
    fetch('https://api.github.com/users/danielrezez/repos')
        .then(async res => {
            if(!res.ok) {
                throw new Error(res.status)
            }
            var data = await res.json()
            data.map(item => {
                let li = document.createElement('li')

                li.innerHTML = `
                <a href="${item.homepage}" target="_blank">
                    <div id="title-project">
                        <figure>
                            <img src="assets/folder.svg" alt="ícone de pasta"><br>
                            <figcaption>${item.name.toUpperCase()}</figcaption>
                        </figure>
                    </div>
                    <span id="project-description">${item.description}</span>
                    <div id="data-project">
                        <span id="stargazers-forks">
                            <figure>
                                <img src="assets/star.svg">
                                <figcaption>${item.stargazers_count}</figcaption>
                            </figure>
                            <figure>
                                <img src="assets/git-branch.svg">
                                <figcaption>${item.forks_count}</figcaption>
                            </figure>
                        </span>
                        <span><img src="">${item.language}</span>
                    </div>
                </a>
            `

            ol.appendChild(li)

            })

        }).catch(e => console.log(e))
}

getApiGithub()