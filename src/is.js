"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Supportive Is v1.1
 * A simple lightweight library to validate values agains certain types of data
 * For full documentation on github
 * Repo: https://github.com/hassanzohdy/supportive-is
 *
 * released 01/12/2017
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
exports.Is = {
    /**
    * Determine whether the given value is null
    *
    * @param mixed value
    * @return bool
    */
    null: function (value) { return value === null; },
    /**
    * Determine whether the given value is undefined
    *
    * @param mixed value
    * @return bool
    */
    undefined: function (value) { return typeof value == 'undefined'; },
    /**
    * Determine whether the given value is a number whatever if its data type is String or Number
    *
    * @param mixed value
    * @return bool
    */
    numeric: function (value) { return /^[+-]?\d+(\.\d+)?([Ee][+-]?\d+)?$/g.test(value); },
    /**
    * Determine whether the given value is an integer and its data type is number
    *
    * @param mixed value
    * @return bool
    */
    int: Number.isInteger,
    /**
    * Determine whether the given value is a float number and its data type is number
    *
    * @param mixed value
    * @return bool
    */
    float: function (value) { return typeof value === 'number' && value % 1 !== 0; },
    /**
    * Determine whether the given value is not a number
    *
    * @param mixed value
    * @return bool
    */
    NaN: function (value) { return isNaN(value); },
    /**
    * Determine whether the given value is a regular expression
    *
    * @param mixed value
    * @return bool
    */
    regex: function (value) { return typeof value != 'undefined' && value.constructor.name == 'RegExp'; },
    /**
    * Determine whether the given value is an object
    *
    * @param mixed value
    * @return bool
    */
    object: function (value) { return !exports.Is.null(value) && typeof value === 'object'; },
    /**
    * Determine whether the given value is a plain object
    *
    * @param mixed value
    * @return bool
    */
    plainObject: function (value) { return !exports.Is.null(value) && !exports.Is.undefined(value) && value.constructor.name === 'Object'; },
    /**
     * Determine whether the given value is an array
     *
     * @param mixed value
     * @return bool
     */
    array: function (value) { return value instanceof Array; },
    /**
     * Determine whether the given value is valid html attribute `id`
     */
    validHtmlId: function (value) { return /^[A-Za-z]+[\w\-\:\.]*$/.test(value); },
    /**
    * Determine whether the given value is a jquery object
    *
    * @param mixed value
    * @return bool
    */
    jquery: function (value) { return value instanceof jQuery; },
    /**
    * Determine whether the given value is a dom element
    *
    * @param mixed value
    * @return bool
    */
    dom: function (value) { return value instanceof HTMLElement; },
    /**
     * Determine whither the given object is instance of the given class name
     * Please note that this method won't work with parent classes
     * use `instanceof` expression instead
     * i.e
     * class A{}
     * class B extends A {}
     * let object = new B;
     *
     * Using Is.instanceof()
     * console.log(Is.instanceof(object, 'B')); // true
     * console.log(Is.instanceof(object, 'A')); // false
     *
     * Using the normal instanceof
     * console.log(object instanceof B); // true
     * console.log(object instanceof A); // true
     *
     * @param object object
     * @param string className
     * @returns bool
     */
    a: function (object, className) { return object.constructor.name === className; },
    /**
     * Determine whether the given value is iterable
     *
     * @param object object
     * @returns bool
     */
    iterable: function (object) { return typeof object[Symbol.iterator] === 'function'; },
    /**
     * Check if the given value is symbol
     */
    symbol: function (value) { return typeof value === 'symbol'; },
    /**
    * Determine whether the given value is a string
    *
    * @param mixed value
    * @return bool
    */
    string: function (value) { return typeof value === 'string'; },
    /**
    * Determine whether the given value is an boolean
    *
    * @param mixed value
    * @return bool
    */
    bool: function (value) { return typeof value == 'boolean'; },
    /**
    * Determine whether the given value is an boolean
    *
    * @param mixed value
    * @return bool
    */
    boolean: function (value) { return typeof value == 'boolean'; },
    /**
    * Determine whether the given value is a function
    *
    * @param mixed value
    * @return bool
    */
    function: function (value) { return typeof value == 'function'; },
    /**
     * Determine whether the given value is callable
     *
    * @param mixed value
    * @return bool
     */
    callable: function (value) { return typeof value == 'function'; },
    /**
     * Returns `true` if the passed function is native to the browser, and is not
     * polyfilled
     *
     * @param {function()|undefined} func A function that is attached to a JS
     * object.
     * @return {boolean}
     */
    native: function (func) { return !!func && func.toString().indexOf('[native code]') != -1; },
    /**
    * Determine whether the given value is a scalar
    * Scalar types are strings, booleans, integers and
    *
    * @param mixed value
    * @return bool
    */
    scalar: function (value) { return /string|number|boolean/.test(typeof value); },
    /**
    * Determine whether the given value if an empty
    * This can be validated against any type of values
    * undefined or nullable values will be considered empty
    * Objects that doesn't have any properties will be considered empty
    * Arrays and Strings will be empty based on its length
    * The 0 'Zero" number will not be considered empty
    *
    * @param mixed value
    * @return bool
    */
    empty: function (value) {
        if (exports.Is.undefined(value) || exports.Is.null(value))
            return true;
        if (exports.Is.string(value))
            return value.length == 0;
        if (exports.Is.object(value)) {
            return typeof value.length != 'undefined' ? value.length == 0 : Object.keys(value).length == 0;
        }
        // this is used here fo zero
        if (exports.Is.numeric(value))
            return false;
        return true;
    },
    /**
     * determine if the given value is an instance of form element
     *
     * @param  mixed value
     * @returns bool
     */
    formElement: function (value) { return value instanceof HTMLFormElement; },
    /**
     * determine if the given value is an instance of form data
     *
     * @param  mixed value
     * @returns bool
     */
    formData: function (value) { return value instanceof FormData; },
    /**
    * Determine whether the given value is a valid json string
    *
    * @param mixed value
    * @return bool
    */
    json: function (value) {
        try {
            JSON.parse(value);
            return true;
        }
        catch (e) {
            return false;
        }
    },
    /**
    * Determine whether the given value is a valid url
    *
    * @param mixed value
    * @return bool
    */
    url: function (value) { return (new RegExp('^(https?:\\/\\/||\/\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%@_.~+&:]*)*(\\?[;&a-z\\d%@_.,~+&:=-]*)?(\\#[-a-z\\d_]*)?$', 'i')).test(value); },
    /**
    * Determine whether the given value is a valid email
    *
    * @param mixed value
    * @return bool
    */
    email: function (value) { return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value); },
    /**
     * Determine whether the given mobile number is a valid Egyptian mobile number
     * The following formats are valid
     * 010[another-8digs]
     * 2010[another-8digs]
     * +2010[another-8digs]
     *
     * Available mobile numbers are 010|011|012|015
     *
     * @param string value
     * @param bool withCode => If set to true, then user can add the +(num) on the beginning of the number
     * @returns bool
     */
    mobileNumber: {
        eg: function (value, withCode) {
            if (withCode === void 0) { withCode = true; }
            var expression = '^';
            if (withCode) {
                expression += '(\\+?2)?';
            }
            expression += '01(0|1|2|5)\\d{8}$';
            var regex = new RegExp(expression);
            return regex.test(value);
            // (value: any): boolean => /^(\+?2)?01(0|1|2|5)\d{8}$/.test(value);
        },
    },
    /**
    * Determine whether cookies are enabled
    *
    * @return bool
    */
    cookieEnabled: function () {
        return navigator.cookieEnabled;
    },
    /**
    * Determine the current visitor is opening from mobile
    * Please Note this method depends on the user agent
    *
    * @return bool
    */
    mobile: {
        /**
        * Determine whether the current visitor is opening from an Android device
        *
        * @return bool
        */
        android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        /**
        * Determine whether the current visitor is opening from a blackberry mobile
        *
        * @return bool
        */
        blackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        /**
        * Determine whether the current visitor is opening from an ios device
        *
        * @return bool
        */
        ios: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        /**
        * Determine whether the current visitor is opening from an Iphone
        *
        * @return bool
        */
        iphone: function () {
            return navigator.userAgent.match(/iPhone/i);
        },
        /**
        * Determine whether the current visitor is opening from an ipad
        *
        * @return bool
        */
        ipad: function () {
            return navigator.userAgent.match(/iPad/i);
        },
        /**
        * Determine whether the current visitor is opening from an ipod
        *
        * @return bool
        */
        ipod: function () {
            return navigator.userAgent.match(/iPod/i);
        },
        /**
        * Determine whether the current visitor is opening from an windows mobile
        *
        * @return bool
        */
        windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        /**
        * Determine whether the current visitor is opening from mobile whatever its type
        *
        * @return bool
        */
        any: function () {
            return Boolean(exports.Is.mobile.android() || exports.Is.mobile.blackBerry() || exports.Is.mobile.ios() || exports.Is.mobile.windows());
        },
    },
    /**
    * Determine whether the current visitor is opening from desktop
    *
    * @return bool
    */
    desktop: function () {
        return !exports.Is.mobile.any();
    },
    /**
     * Check if the current browser is the given name
     *
     * @param   string browser
     * @returns bool
     * @see     https://stackoverflow.com/a/9851769/3380387
     */
    browser: function (browser) {
        // Opera 8.0+
        var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        // Firefox 1.0+
        var isFirefox = typeof window.InstallTrigger !== 'undefined';
        // Safari 3.0+ "[object HTMLElementConstructor]" 
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
        // Internet Explorer 6-11
        var isIE = false || !!document.documentMode;
        // Edge 20+
        var isEdge = !isIE && !!window.StyleMedia;
        // Chrome 1 - 71
        var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
        // Blink engine detection
        var isBlink = (isChrome || isOpera) && !!window.CSS;
        var browsersList = {
            chrome: isChrome,
            Firefox: isFirefox,
            opera: isOpera,
            edge: isEdge,
            ie: isIE,
            safari: isSafari,
            blink: isBlink,
        };
        return browsersList[browser.toLowerCase()] === true;
    }
};
exports.default = exports.Is;
