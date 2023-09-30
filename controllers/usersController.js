module.exports = {

    getAll : function(req, res, next) {
        const users = {
          "id" : 1,
          "name" : "Antonio",
          "surname" : "Flores" 
        }
        res.send(users);
      },

    create : function(req, res, next) {
        console.log(req.body),
        res.json(req.body)
      },

    update: function(req, res, next) {
        console.log(req.params.id);
        console.log(req.body);
        res.json(req.body)
      },
    
    delete: function(req, res, next) {
        console.log(req.params.id);  
        res.json(req.body)
      }
    }