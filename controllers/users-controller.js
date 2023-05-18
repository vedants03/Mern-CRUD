const user = require("../model/User");

const login = async (req, res, next)=>{
    const { email, password } = req.body;
    //check email
    await user.findOne({ email: email }, (err, user) => {
      if (user) {
        //check password
        if (password === user.password) {
          res.send({ message: "Login successfull!", user: user });
        } else {
          res.send({ message: "Password is incorrect!"});
        }
      } else {
        res.send({ message: "Please login to proceed" });
      }
    }).clone().catch(function(err){console.log(err)});
}

const signup = async (req,res,next)=>{
    const { fname, lname, email, password } = req.body;
    //check email
    try{
      let User = await user.findOne({email})
      if(User){
        res.send("User Already Exists!!");
      }
      else{
          User  = new user({
          fname,
          lname,
          email,
          password
        })
        await User.save();
      }
      res.send({User})
    }
    catch(err){
      console.log(err)
    }
    // res.send("register");
    //   console.log(req.body);
}

exports.login = login;
exports.signup = signup;