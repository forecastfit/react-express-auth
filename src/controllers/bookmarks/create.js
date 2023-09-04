const post = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Bookmarks }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { clothes_id, img_url, day}, // this req.body property is put here by the client
      params:{id}
    } = req;
  
    // TODO: check if username is taken, what should you return?
    const user = await Bookmarks.create(id, clothes_id, img_url, day);
    session.userId = user.id;
  
    res.send(user);
  };
  
  module.exports = post;