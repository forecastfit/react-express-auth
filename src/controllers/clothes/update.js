const update = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Clothes }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { username, password }, // this req.body property is put here by the client
    } = req;
  
    // TODO: check if username is taken, what should you return?
    const user = await Clothes.update(username, password);
    session.userId = user.id;
  
    res.send(user);
  };
  
  module.exports = update;