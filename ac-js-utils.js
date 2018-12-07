module.exports = {

  getReg3: (a, b, c) => {

    var x = (c * b) / a;
    return x;

  },//getReg3

  checkEmail: (email) => {

    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(email)) {
      return false;
    } else {
      return true;
    }

  }//checkEmail

}