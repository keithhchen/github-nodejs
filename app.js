const api = require("./api")

async function addTopic(topic, include = "") {
  if (!topic) {
    throw new Error("No topic name provided.")
  }
  const repos = await api.getOrgRepos('Berklee-Game-Audio')
  repos.forEach(repo => {
    if (!repo.topics.includes(topic) && repo.full_name.toLowerCase().includes(include)) {
      api.editTopics(repo.full_name, [topic, ...repo.topics])
        .then(res => console.log(repo.name + ": " + res.names))
        .catch(err => console.log(err))
    }
  })
}