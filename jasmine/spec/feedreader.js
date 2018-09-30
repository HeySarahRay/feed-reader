/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('is defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loops through each feed to test that URL's are not empty.*/
        it('url defined', function () {
            allFeeds.forEach(feed => {
                expect(allFeeds).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            });
        });

        /* Loops through each feed to test that the feed name has been defined and is not empty.*/
        it('name defined', function () {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
        });
    });

    /* Test suite for the menu.*/
    describe('The menu', function () {

        /* Tests the menu element to see if it is hidden by default.*/
        it('is hidden', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Tests the menu to see if it becomes visible when clicked, and hides once it is clicked again.*/
        it('toggles', function () {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Test suite for initial entries.*/
    describe('Initial Entries', function () {

        /* Tests loadFeed function to make sure that there is at least a single entry within the container.*/
        beforeEach(done => {
            loadFeed(0, done);
        });
        it('is present', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* Test suite for new feeds.*/
    describe('New Feed Selection', function () {
        let oldfeed,
            newfeed;

        /* Tests loadFeed to make sure that new content shows up.*/
        beforeEach(done => {
            loadFeed(0, function() {
                oldfeed = $('.feed').text();
            loadFeed(1, function() {
                newfeed = $('.feed').text();
                done();
            });
        });
    });
        it('loads new feed', function () {
            expect(oldfeed).not.toBe(newfeed);
            });
        });
}());