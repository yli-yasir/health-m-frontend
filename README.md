# ❤️ Health-M

Health-M is a simple **web based** patient management system built with [React](https://reactjs.org/). The aim of the project is to demonstrate what can be built with **modern and free technologies** and to highlight some of the technical **challenges and lessons** learned.

  👉 🚧 [Live Demo](https://yli-yasir.github.io/health-m-frontend) 🚧 👈

## User Interface ( React, Material-UI )

Health-M is a single page web application built with React. It makes use the [Material-UI](https://material-ui.com) React component library to speed up development and to help deliver a high quality user experience.

I decided to use React because it has a rich and high quality ecosystem. Although it took me a while to learn to do things in a declarative manner in React, I still personally found it easier and more straightforward to work with than other frameworks such as [Vue](https://vuejs.org/).

![UI GIF](https://github.com/yli-yasir/health-m-frontend/raw/master/readmeAssets/ui.gif)

### 🔍 Challenges and Lessons
* Initially, I thought that my file structure was good and everything was well seperated. I had deeply nested folders that were split according to file or component types. This later turned against me when the project started growing. Due to this structure, it became a pain to import and locate modules, and it started to hinder my development considerably. This was when I remembered something I had a while ago but didn't quite understand until now.

**"Separation of concerns is not equal to separation of file types"** 

I now keep a rather shallow file structure and separate things according to feature or domain.

* Some of the Material-UI components felt a bit verbose, this is tradeoff for the high customizability they need to offer. I now understand that component libraries are general purpose and I should create my own wrappers around them to make them better suited to my application if it's needed.

*  Difficulty working with App and some of my components especially in edge cases. This is because of insufficient testing. Consider using [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/) for testing. Also use [StoryBook](https://storybook.js.org/) to develop components in isolation and tackle edge cases.

## Async Logic and Clean up ( Memory Leaks )

It is very common to perform asynchronous logic in React components such as fetching data when the component mounts and then updating component state a callback that is executed after the async operation. It may seem dead simple at first because you all need to is call an asynchronus function when a certain event occurs ( such as `componentDidMount` ) or utilize the  `useEffect()` hook. 

### 🔍 Challenges and Lessons
* A component might get unmounted while an asynchronous call it fired is in progress. The callback for this async function will still execute even after the component has been unmounted. This is a waste of resources especially when the callback does expensive work. This problem is best solved by executing clean up logic when the component unmounts. We can cancel the effects of the async callback when the component is unmounted by using something similar to [Cancellable Promises](https://github.com/facebook/react/issues/5465#issuecomment-157888325), or you can check if the component is mounted in your callback and ony execute your logic accordingly. 

## User Authentication ( JWT, Local Storage VS Cookies )

Health-M uses [JWT](https://jwt.io/) for authentication. 

### 🔍 Challenges and Lessons

* Local Storage VS Cookies, where should the JWT be stored?

Some developers would advise against using Local Storage because of its invulnerability to XSS attacks, and would instead advise to store the Cookies with `HttpOnly`.

However, using cookies to store your tokens will leave you open to CSRF attacks and still XSS attacks ( Yes, even with `HttpOnly` )!

This is because a malicious user doing an XSS attack can still inject a script which performs a fetch request to a server. Even if you utilize `SameSite` to prevent the cookie from being sent to other servers, the hacker can still issue requests to your server on behalf of the compromised user ( such as shopping, etc. ).

Conclusion: No matter where you choose to store your token. Make sure your site is not vulnerable to malicous attacks.  

## Forms ( Formik, Yup, Fabric )
The app needed a rather big form with good client side validation support. Managing forms in React can be a bit challenging, and this is why [Formik](https://formik.org/) was made. Fortunately, Formik has out the box support for schema based object validation with [Yup](https://github.com/jquense/yup).

![Pedigree Chart Editor](https://github.com/yli-yasir/health-m-frontend/raw/master/readmeAssets/pedigreeChart.gif)
### 🔍 Challenges
* A Pedigree Chart (Family Tree) editor was needed in the form. After looking through free options I decided to use the [Fabric](http://fabricjs.com/) HTML canvas library to implement the Pedigree Chart Editor. This is because of Fabric's interative object model and ability to be serialized and restored from JSON.


## Backend ( Node, Express, REST, MongoDB, Joi ) 
The backend server for this application utilizes Node.js and Express to build a web server which complies to the REST architectural style.

### 🔍 Challenges and Lessons
* Some routes in the web server shared similar logic to some degree, and repeating myself would have resulted in code that is harder to scale and maintain. To remedy this, I am defining seperate middleware functions and reusing them where needed.

* Consistency was needed on the web server. One must try to remain consistent and comply to REST architecture when possible.

* Manually and imperatively validating user data was unmaintainable and a pain. I utilized the `Joi` Object schema validation library for validation.

* The business logic (domain) layer was tightly coupled with the data access layer. So, a lot of changes would need be made if a change was introduced in the data access layer.

The solution is to define an interface (sometimes called repository) which defines all our business logic functions. This interface is then utilized in our routers (controllers) to decouple the domain layer from the data persistence layer.

If any change was made to data access layer (Swapping to a different database), then only changes to the **implementations** in our repository interface would be to be made. This is because our controllers only call the functions defined in that interface now, and do not care about their actual implementations.  



