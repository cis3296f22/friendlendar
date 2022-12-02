/**
 * Js function that injects a scalable Navbar into the page. It takes in a navList. This list contains the nav headers and associated links to js functions in the title. The list, specifies the list headers, their associated link names, and javascript functions to call. The MakeNavRouter function takes in this list, the name of the divs it will inject into, and the name of the startLink.
 * @type {class}
 */

/** 
 * @return - Generates 
 * @param params - Parameter that holds navList headers and their links, two divs to inject into the main page, and a starLink for initial compilation. Uses /#home as default.
 * @type {class}
 */
function MakeNavRouter(params) {

    /**
     * @param {object} linkObj - The objects held in the navList in params. Specifically the submenus that will pop up under each header. They contain what the linkText or "Title" that will display on the index page. The url it will generate. And the .js function it will call. 
     * This function will add the linkObj and its url to a routing table if the object has valid credentials.
     */
    function MakeLink(linkObj) {  // local private function

        var aTag = document.createElement("a");

        var linkText = linkObj.linkText || "Missing Link Text";
        aTag.innerHTML = linkText;


        // if both the action property and the linkURL property exist in the linkObj
        // then "register" the link and action in the routing table...

        if ('action' in linkObj && 'linkURL' in linkObj && linkObj.action !== "") {

            console.log("registering " + linkObj.linkURL + " (in MakeNavRouter)");
            aTag.href = linkObj.linkURL;

            // register the linkURL into the routing table. linkURL is the key. 
            // action is the value associated with that key. action will
            // be run whenever that linkURL shows up in the browser's address bar. 
            routes[linkObj.linkURL] = linkObj.action;

        }

        return aTag;

    } // end function MakeLink
     
     /**
     * @param  {object} obj - The whole object passed through navList. It contains both the headers and the details of their submenus. 
     * This function checks to see if the object is not a header, to which it will call MakeLink to generate the submenu and its links to a div. Otherwise it appends the header to a div. It returns the div. 
     */
    function MakeLinkOrGroup(obj) {  // local private function

        var navGroup = document.createElement("div");
        navGroup.classList.add(NavGroupClass);

        if (!obj.header) { // if its not a header, it must be a link 
            navGroup.appendChild(MakeLink(obj));
        } else {

            // create header div along with its associated submenu div 
            var headerDiv = document.createElement("div");
            headerDiv.innerHTML = obj.header;
            headerDiv.classList.add(MenuHeaderClass);
            navGroup.appendChild(headerDiv);

            var subMenuDiv = document.createElement("div");
            subMenuDiv.classList.add(SubMenuClass);
            subMenuDiv.classList.add(hideClass);
            navGroup.appendChild(subMenuDiv);
            headerDiv.assocSubMenu = subMenuDiv;

            // create all the links in the sub menu
            console.log("submenu: " + obj.subMenu);
            var length = obj.subMenu.length;
            for (var j = 0; j < length; j++) {
                subMenuDiv.appendChild(MakeLink(obj.subMenu[j]));
            }
        }
        return navGroup;
    } // end function MakeLinkOrGroup


    // ********************************************
    // ENTRY POINT for Building the Navigation Bar

    // extract properties from parameter object, setting default values for any properties
    // that have not been supplied.

    /**
    * @typedef {string}
    * name for nav div
    */
    var navId = params.navId; // this is a required property of the parameter object
    if (!navId) {
        alert("Error in MakNavRouter: parameter property 'navId' must be supplied");
        return;
    }

    /**
    * @typedef {object}
    */
    var navList = params.navList; // this is a required property of the parameter object
    if (!navList) {
        alert("Error in MakNavRouter: parameter property 'navList' must be supplied");
        return;
    }

    /**
    * @typedef {string} contentId - if contentId is not specified it assumes it to be "content"
    */
    var contentId = params.contentId || "content";

    /**
    * @typedef {string} startLink - if startLink is not specified it assumed it to be "#/home"
    */
    var startLink = params.startLink || "#/home";

    // use variable names instead of hard coded CSS class names, so it's easier to make changes.

    /**
    * @const {string}
    */
    var NavRouterClass = "NavRouter";

    /**
    * @const {string}
    */
    var NavGroupClass = "NavGroup";

    /**
    * @const {string}
    */
    var MenuHeaderClass = "MenuHeader";

    /**
    * @const {string}
    */
    var SubMenuClass = "SubMenu";

    /**
    * @const {string}
    */
    var hideClass = "hide";

    /**
    * @const {string}
    */
    var showClass = "show";

    // Declare an array to store our routes - MakeLink adds Associative Array
    // entries into this array, associating a link with a function (that should be 
    // invoked by the NavRouter whenever that link is clicked.

    /**
    * @typedef {array} routes - routing table
    */
    var routes = [];

    /**
    * @const {div} navRouter - div to hold navRouter
    */
    var navRouter = document.createElement("div");
    navRouter.classList.add(NavRouterClass);
    console.log("NavList" + navList);
    var l = navList.length; 
    for (var i = 0; i < l; i++) {

        // This code will add entries into the routing table (declared above).
        navRouter.appendChild(MakeLinkOrGroup(navList[i]));

    }

    document.getElementById(navId).appendChild(navRouter);
    console.log("MakeNavRouter injected the nav bar");

    // ******************************************************************************
    // Done Building the Navigation Bar... 
    // ******************************************************************************

    // ******************************************************************************
    // Start Setting Up Event Handling For Drop Down Menus... 
    // ******************************************************************************

    // This event handler will run any time the user clicks anywhere on the page. 
    // 
    // If a MenuHeader is clicked, the associated SubMenu is toggled (hidden/shown). 
    // Otherwise (when click is anywhere else), all SubMenus are closed.

    /**
     * @param  {object} event - is the DOM element clicked on the page. 
     * This function will decide whether to hide or show a header's submenu and call its action depending on the status of the page.
     */
    window.onclick = function (event) {

        // ------------------------------------------------------------------------
        // Private functions related to hiding and showing drop down menus. 

        /**
        * @typedef {object} ele - The submenu.
        * This function will hide all submenus except the one clicked (ele).
        */
        function hideSubMenusExcept(ele) {
            var dropContentList = document.getElementsByClassName(SubMenuClass);
            for (var i = 0; i < dropContentList.length; i++) {
                if (ele !== dropContentList[i]) {
                    hide(dropContentList[i]);
                }
            }
        }

        /**
        * @param  {object} ele - The submenu.
        * This function is a helper function that will carry out the removal and addition of ele to its classList.
        */
        function hide(ele) {
            ele.classList.remove(showClass);
            ele.classList.add(hideClass);
        }

        /**
        * @param  {object} ele - The submenu. 
        * This function is a helper function that will carry out the removal and addition of ele to its classList.
        */
        function show(ele) {
            ele.classList.remove(hideClass);
            ele.classList.add(showClass);
        }
        // End of private functions
        // ------------------------------------------------------------------------

        /**
        * @tytypedefpe {div} clickedEle - the DOM element that was clicked. 
        */
        var clickedEle = event.target; // this is the DOM element (anywhere on page) that was clicked.
        // console.log("clickedEle on next line");
        // console.log(clickedEle);

        // if the clicked element is a MenuHeader, it will have a custom property 
        // that indicates the associated SubMenu.

        /**
        * @typedef {div} subMenu - the submenu that was clicked
        */
        var subMenu = clickedEle.assocSubMenu;
        if (subMenu) {

            // console.log("SubMenu associated with MenuHeader (on next line):");
            // console.log(subMenu);

            if (subMenu.classList.contains(showClass)) {
                hide(subMenu);
            } else {
                show(subMenu);
            }

            hideSubMenusExcept(subMenu);

        } else { // the element they clicked was not a MenuHeader, so close all SubMenus. 

            // console.log("clicked ele is not a MenuHeader");
            hideSubMenusExcept(null); // hide all SubMenus
        }
    }; // window.onclick function 

    // ******************************************************************************
    // Done Setting Up Event Handling For Drop Down Menus... 
    // ******************************************************************************

    // ******************************************************************************
    // Start Setting Up Routing (event handling whenever address bar's link changes) 
    // ******************************************************************************

    // return an object that has the URL's pathPrefix and param as properties. 
    // the param is whatever is after the last / (if there is more than one / in the original path. 
    // extract the parameter value from the path. 
    // the parameter is defined as being whatever is after the last '/' in the path...

    /**
     * @param  {string} path - The URL path string that will need to be parsed. 
     * This function makes the calls associated with the credentials of the url path. 
     */
    function parsePath(path) {

        // path #/insertUser --> {param:"", pathPrefix: "#/insertUser" }
        // path #/updateUser/43 --> {param:"43", pathPrefix: "#/updateUser" }

        // start out assuming that this is a parameterless path (URL)

        /**
        * @typedef {object} obj - param path obj
        */
        var obj = {
            param: "",
            pathPrefix: path
        };

        // search for last '/' in the path (URL)
        /**
        * @typedef {string} n - string past / 'The URL'
        */
        var n = path.lastIndexOf("/");

        // n = -1 means no '/' 
        // #/home would be a "normal" (parameterless) URL. For this, n would be 1 
        // (indicating the last/only '/' in the URL).
        if (n > 1) {
            obj.param = path.substring(n + 1);
            console.log('routParamFw extracted parameter [' + obj.param + '] from path [' + path + ']');
            obj.pathPrefix = path.substring(0, n);
        }
        console.log("*** parsePath: path is [" + path + "] param is [" + obj.param + "] and pathPrefix is [" + obj.pathPrefix + "]");
        return obj;
    } // parsePath

    /**
     * @param  {string} what - The html content string.
     * This function will inject the html content into the page.
     */
    function inject(what) {
        document.getElementById(contentId).innerHTML = "";
        document.getElementById(contentId).appendChild(what);
    }

    /**
     * This function is called whenever the browswer's address bar changes. It tries to call the submenu header's linkURL from the routing table. If it exists, it injects it into the page. 
     */
    function router() { // Will be called whenever the browser's address bar changes.
        var saveLink = location.hash;
        var pathObj = parsePath(saveLink);
        var path = pathObj.pathPrefix;
        var param = pathObj.param;
        console.log('in function router, path is ' + path); // prints something like #/home
        if (!routes[path]) {
            var ele = document.createElement("div");
            ele.innerHTML = "<p>Error: unknown linkURL '" + path + "' was never added to the routing table.</p>";
            inject(ele);
        } else { // There is an entry in the routing table for the link that's in the address bar
            // Store the link in local storage so that link will appear upon page refresh.
            sessionStorage.setItem("NavRouterURL", saveLink);
            console.log("Link Written to Session: " + saveLink);
            if (routes[path] instanceof Function) {
                // The routing table entry is a function, so call a content generating function 
                // either with a parameter or without (depending on whether or not a parameter 
                // was found in the address bar). 
                if (param.length > 0) {
                    var ele = routes[path](param);
                    inject(ele);
                } else {
                    var ele = routes[path](); // returns DOM element
                    inject(ele);
                }
            } else {
                // What's in the routing table (indexed by the URL) is a String, 
                // not a function. Open up a new tab using that String as URL.
                console.log("Ready to open this link in a new tab: " + routes[path]);
                window.open(routes[path], "_blank");
            }
        }
    }


    // Whenever a link is clicked (or window.location.hash changes), invoke function router
    // that will figure out which content function to run (and inject into the content area).

    /**
     * @typedef {string} hashchange - Indicates the path has been changed.
     * @typedef {object} router - The routing table.
     * This function will inject the html content into the page by choosing what content funtion to run.
     */
    window.addEventListener('hashchange', router);


    // USE LOCAL STORAGE TO PERSIST CURRENT LINK UPON PAGE REFRESH.
    // Notice that local storage is set by function router (whenever link changes).
    // if there's a previously stored path in user's local storage
    // use that path as initial link...
    // Closing the browser tab clears the user's local storage...

    /**
     * @typedef {string} URL - holds the URL of the page. Persistently looks at local storage. 
     * This function checks if there's a previously stored path in user's local storage and uses that path as the link. 
     */
    var URL = sessionStorage.getItem("NavRouterURL");

    // without this line of code, sometimes you'll get an empty content, e.g., 
    // when you refresh the page but the link didn't change.
    location.hash = "xxx";

    if (URL) {
        location.hash = URL;
    } else {

        // without this line of code, initial rendering will show no content.
        // This code makes it look like the user clicked on the home link at initial rendering. 
        location.hash = startLink;
        console.log("initial location.hash is " + location.hash);
    }

    // ******************************************************************************
    // Done Setting Up Routing (event handling whenever address bar's link changes) 
    // ******************************************************************************

    /**
    * @typedef {array} navRouter - Array holding navRouter contents
    */
    var navRouter = {};

    /**
     * @param {object} linkObj - The objects held in the navList in params. Specifically the submenus that will pop up under each header. They contain what the linkText or "Title" that will display on the index page. The url it will generate. And the .js function it will call. 
     * This function adds the associating linkURL of a submenu object to the routing table. 
     */
    navRouter.addRoute = function (linkObj) {
        routes[linkObj.linkURL] = linkObj.action;
        console.log(linkObj.linkURL + " added to routing table (with no associated nav bar link");
    };

    /**
     * This function logs the routes created to the console. 
     */
    navRouter.printRoutes = function () {
        console.log("Routing table printed on next line");
        for (var key in routes) {
            console.log(key);
        }
    };

    return navRouter;
} 