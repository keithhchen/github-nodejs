const request = require('./request')

async function editTopics(repo, names) {
  if (!repo || !names) {
    throw new Error("Params missing.")
  }

  try {
    const url = `https://api.github.com/repos/${repo}/topics`
    const body = {
      names
    }
    const res = await request.put({ url, body })
    return res
  } catch (err) {
    throw new Error(err)
  }
}

async function getOrgRepos(org) {
  if (!org) {
    throw new Error("Params missing.")
  }
  try {
    const url = `https://api.github.com/orgs/${org}/repos`
    const res = await request.get(url)
    return res
  } catch (err) {
    throw new Error(err)
  }
}