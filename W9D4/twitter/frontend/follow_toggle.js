const ApiUtil = require('./api_util.js'); 

class FollowToggle {
    constructor(el) {
        this.$el = $(el);                       
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.render(); 
        this.handleClick();
    }

    render() {
        if (this.followState === "unfollowed") {
            this.$el.text('Follow!'); 
        } else {
            this.$el.text('Unfollow!'); 
        }
    }

    handleClick() {
        this.$el.click((event) => {
            event.preventDefault(); 

            if (this.followState === "followed") {
                ApiUtil.unfollowUser(this.userId).then((data) => {
                    this.followState = 'unfollowed';
                    this.render();
                }); 
            } else {
                ApiUtil.followUser(this.userId).then((data) => {
                    this.followState = 'followed';
                    this.render();
                });
            }
        })
    }
}

//$("a").click(function(event){
// event.preventDefault();
// });

module.exports = FollowToggle; 