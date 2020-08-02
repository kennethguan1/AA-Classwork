const ApiUtil = require('./api_util.js'); 

class UsersSearch {
    constructor(el) {
        this.$el = el;
        this.input = this.$el.find('input');
        this.ul =  this.$el.find('ul');
        this.handleInput(); 
    }
    
    handleInput() {
        this.input.on('input', (event) => {
            
            ApiUtil.searchUsers(event.currentTarget.value).then((data) => {
                this.renderResults(data); 
            })
        })
    }

    renderResults(results) {
        this.ul.empty(); 
        console.log(results); 
        results.forEach(result => {
            let $li = $("<li>");
            $li.html(result.username); 
            this.ul.append($li); 
        }); 
    }
}

module.exports = UsersSearch; 