
function todo() {
    this.index = (req,res,next) => {
        return res.render('tes');
    }
}

module.exports = new todo();