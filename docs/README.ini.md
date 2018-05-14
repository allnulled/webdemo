/**
 *
 * # webdemo
 * 
 * Web-based mouse and keyboard automation tool.
 * 
 * ## 1. Installation
 * 
 * #### 1.1. Download the WebDemo module:
 * 
 * `~$ npm install --save webdemo`
 * 
 * #### 1.2. Include all the dependencies in your HTML:
 * 
 * ```html
 * <link  href="node_modules/webdemo/dep/domlogger.css" rel="stylesheet" type="text/css" />
 * <script src="node_modules/webdemo/dep/syn.js"></script>
 * <script src="node_modules/webdemo/dep/domlogger.js"></script>
 * <script src="node_modules/webdemo/src/webdemo.js"></script>
 * ```
 * 
 * ## 2. Usage
 * 
 * ##### 1. Create a new webdemo instance:
 * 
 * ```js
 * const demo = new WebDemo("Name of this demo");
 * ```
 * 
 * ##### 2. Add tasks to the demo:
 * 
 * ```js
 * demo.speed(600);
 * demo.inform("Writing user's name");
 * demo.mouse("[name='name']").click().type("Developer");
 * demo.inform("Writing user's surname");
 * demo.mouse("[name='surname']").click().type("This is a secret");
 * demo.inform("Writing user's age");
 * demo.mouse("[name='age']").click().type("None of your business");
 * demo.inform("Submiting form");
 * demo.mouse("[name='submit']").click();
 * ```
 * 
 * ##### 3. Run the demo:
 * 
 * ```js
 * demo.start(function() {
 *   // once finished all the tasks...
 * });
 * ```
 * 
 * And the demo will start.
 * 
 * 
 */