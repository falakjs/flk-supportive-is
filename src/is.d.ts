/**
 * Supportive Is v1.1
 * A simple lightweight library to validate values agains certain types of data
 * For full documentation on github
 * Repo: https://github.com/hassanzohdy/supportive-is
 *
 * released 01/12/2017
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
export declare const Is: {
    /**
    * Determine whether the given value is null
    *
    * @param mixed value
    * @return bool
    */
    null: (value: any) => boolean;
    /**
    * Determine whether the given value is undefined
    *
    * @param mixed value
    * @return bool
    */
    undefined: (value: any) => boolean;
    /**
    * Determine whether the given value is a number whatever if its data type is String or Number
    *
    * @param mixed value
    * @return bool
    */
    numeric: (value: any) => boolean;
    /**
    * Determine whether the given value is an integer and its data type is number
    *
    * @param mixed value
    * @return bool
    */
    int: (number: number) => boolean;
    /**
    * Determine whether the given value is a float number and its data type is number
    *
    * @param mixed value
    * @return bool
    */
    float: (value: any) => boolean;
    /**
    * Determine whether the given value is not a number
    *
    * @param mixed value
    * @return bool
    */
    NaN: (value: any) => boolean;
    /**
    * Determine whether the given value is a regular expression
    *
    * @param mixed value
    * @return bool
    */
    regex: (value: any) => boolean;
    /**
    * Determine whether the given value is an object
    *
    * @param mixed value
    * @return bool
    */
    object: (value: any) => boolean;
    /**
    * Determine whether the given value is a plain object
    *
    * @param mixed value
    * @return bool
    */
    plainObject: (value: any) => boolean;
    /**
     * Determine whether the given value is an array
     *
     * @param mixed value
     * @return bool
     */
    array: (value: any) => boolean;
    /**
     * Determine whether the given value is valid html attribute `id`
     */
    validHtmlId: (value: any) => boolean;
    /**
    * Determine whether the given value is a jquery object
    *
    * @param mixed value
    * @return bool
    */
    jquery: (value: any) => boolean;
    /**
    * Determine whether the given value is a dom element
    *
    * @param mixed value
    * @return bool
    */
    dom: (value: any) => boolean;
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
    a: (object: any, className: string) => boolean;
    /**
     * Determine whether the given value is iterable
     *
     * @param object object
     * @returns bool
     */
    iterable: (object: any) => boolean;
    /**
     * Check if the given value is symbol
     */
    symbol: (value: any) => boolean;
    /**
    * Determine whether the given value is a string
    *
    * @param mixed value
    * @return bool
    */
    string: (value: any) => boolean;
    /**
    * Determine whether the given value is an boolean
    *
    * @param mixed value
    * @return bool
    */
    bool: (value: any) => boolean;
    /**
    * Determine whether the given value is an boolean
    *
    * @param mixed value
    * @return bool
    */
    boolean: (value: any) => boolean;
    /**
    * Determine whether the given value is a function
    *
    * @param mixed value
    * @return bool
    */
    function: (value: any) => boolean;
    /**
     * Determine whether the given value is callable
     *
    * @param mixed value
    * @return bool
     */
    callable: (value: any) => boolean;
    /**
     * Returns `true` if the passed function is native to the browser, and is not
     * polyfilled
     *
     * @param {function()|undefined} func A function that is attached to a JS
     * object.
     * @return {boolean}
     */
    native: (func: any) => boolean;
    /**
    * Determine whether the given value is a scalar
    * Scalar types are strings, booleans, integers and
    *
    * @param mixed value
    * @return bool
    */
    scalar: (value: any) => boolean;
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
    empty(value: any): boolean;
    /**
     * determine if the given value is an instance of form element
     *
     * @param  mixed value
     * @returns bool
     */
    formElement: (value: any) => boolean;
    /**
     * determine if the given value is an instance of form data
     *
     * @param  mixed value
     * @returns bool
     */
    formData: (value: any) => boolean;
    /**
    * Determine whether the given value is a valid json string
    *
    * @param mixed value
    * @return bool
    */
    json(value: any): boolean;
    /**
    * Determine whether the given value is a valid url
    *
    * @param mixed value
    * @return bool
    */
    url: (value: any) => boolean;
    /**
    * Determine whether the given value is a valid email
    *
    * @param mixed value
    * @return bool
    */
    email: (value: any) => boolean;
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
        eg: (value: any, withCode?: boolean) => boolean;
    };
    /**
    * Determine whether cookies are enabled
    *
    * @return bool
    */
    cookieEnabled(): boolean;
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
        android(): RegExpMatchArray | null;
        /**
        * Determine whether the current visitor is opening from a blackberry mobile
        *
        * @return bool
        */
        blackBerry(): RegExpMatchArray | null;
        /**
        * Determine whether the current visitor is opening from an ios device
        *
        * @return bool
        */
        ios(): RegExpMatchArray | null;
        /**
        * Determine whether the current visitor is opening from an Iphone
        *
        * @return bool
        */
        iphone(): RegExpMatchArray | null;
        /**
        * Determine whether the current visitor is opening from an ipad
        *
        * @return bool
        */
        ipad(): RegExpMatchArray | null;
        /**
        * Determine whether the current visitor is opening from an ipod
        *
        * @return bool
        */
        ipod(): RegExpMatchArray | null;
        /**
        * Determine whether the current visitor is opening from an windows mobile
        *
        * @return bool
        */
        windows(): RegExpMatchArray | null;
        /**
        * Determine whether the current visitor is opening from mobile whatever its type
        *
        * @return bool
        */
        any(): boolean;
    };
    /**
    * Determine whether the current visitor is opening from desktop
    *
    * @return bool
    */
    desktop(): boolean;
    /**
     * Check if the current browser is the given name
     *
     * @param   string browser
     * @returns bool
     * @see     https://stackoverflow.com/a/9851769/3380387
     */
    browser(browser: string): boolean;
};
export default Is;
