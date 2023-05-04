router.get('/clima', (req, res) => {
    const ciudad = req.query.ciudad;
    res.redirect(`/clima/${ciudad}`);
  });
  