const FollowToggle = require('./follow_toggle.js'); 
const UsersSearch = require('./users_search.js'); 
console.log('twitter'); 
$(() => {
    $('.follow-toggle').each(function (index, el) {
        new FollowToggle(el);
    });

    new UsersSearch($('.user-search')); 
})


    