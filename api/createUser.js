import axios from 'axios'

const createUser = async (req, res) => {
  const { userId, userName } = req.body

  axios
    .post('https://api.chatengine.io/projects/people/',
      { username: userName, secret: userId },
      { headers: { 'Private-Key': process.env.chat_engine_private_key } }
    )
    .then(apiRes => {
      res.json({
        body: apiRes.body,
        error: null,
      })
    })
    .catch(() => {
      res.json({
        body: apiRes.body,
        error: 'There was a error with creating user',
      })
    })
}

export default createUser