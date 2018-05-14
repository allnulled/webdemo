 


# webdemo

Web-based mouse and keyboard automation tool.

## 1. Installation

`~$ npm install --save webdemo`

## 2. Usage

##### 1. Include the js file in your *.html file:

```html
<script src="node_modules/webdemo/webdemo.js"></script>
```

##### 2. Create a new webdemo instance:

```js
const demo = new WebDemo("Name of this demo");
```

##### 3. Add tasks to the demo:

```js
demo.speed(600);
demo.inform("Writing user's name");
demo.mouse("[name='name']").click().type("Developer");
demo.inform("Writing user's surname");
demo.mouse("[name='surname']").click().type("This is a secret");
demo.inform("Writing user's age");
demo.mouse("[name='age']").click().type("None of your business");
demo.inform("Submiting form");
demo.mouse("[name='submit']").click();
```

##### 4. Run the demo:

```js
demo.start();
```

And the demo will start.





 

## 3. Notes

Nothing is required externally. 

But some libraries have been included in the source code:










 

## 4. API Reference














 

### WebDemo
----

**Type:** `{Class}`

**Parameter:** `{String} title` Title of the new demo.

**Returns:** `{WebDemo}` A new instance of WebDemo class.

**Description:** This class generates a new WebDemo. With this objects, we can automate browser tasks.




 

----
### webDemo._

**Type:** `{Object}`

**Description:** Object that holds the internal stuff of the WebDemo instance.



 

----
### webDemo._.title

**Type:** `{String} title`

**Description:** Name of the current webDemo.



 

----
### webDemo._.subject

**Type:** `{HTMLElement}`

**Description:** Element that has the current focus of the webDemo. This means that the actions registered will have this element as target.



 

----
### webDemo._.logger

**Type:** `{DOMLogger}` 

**Url:** https://www.npmjs.com/package/domlogger

**Url:** https://github.com/allnulled/domlogger

**Description:** This object can log messages that one can see in the same page (without the need of opening the console).



 

----
### webDemo._.tasks

**Type:** `{Array}`

**Description:** Holds all the tasks that have been registered for this webDemo.



 

----
### webDemo.start()





 

----
### webDemo.inform(message)

**Type:** `{Function}`

**Parameter:** `{String} message` Message to be shown.

**Return:** `{WebDemo}`  

**Description:** Shows a message by the DOMLogger instance.



 

----
### webDemo._.cursor

**Type:** `{HTMLElement}`

**Description:** Image of a cursor, that will move over the screen, simulating the click and drag'n'drop events.



 

----
### webDemo.mouse(elementReference)

**Type:** `{Function}`

**Parameter:** `{HTMLElement} elementReference` Element in which to put the mouse over.

**Return:** `{WebDemo}` Returns the same webDemo instance.

**Description:** Moves the mouse to put it over the center of an `{HTMLElement}`.



 

----
### WebDemo.click()

**Type:** `{Function}`

**Parameter:** `{String} text` Text to type.

**Parameter:** `{Number} speedOpt` Useless for now.

**Return:** `{WebDemo}` Returns the same webDemo instance.




 

----
### WebDemo.type(test, speedOption)

**Type:** `{Function}`

**Parameter:** `{String} text` Text to type.

**Parameter:** `{Number} speedOpt` Useless for now.

**Return:** `{WebDemo}` Returns the same webDemo instance.




 










# Read this file
