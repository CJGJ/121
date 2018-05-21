export.views = function(req, res) => {
  const name = req.params.name;
  console.log('GET page for ' + name);
  res.render('representative', {"name" : name});
};
