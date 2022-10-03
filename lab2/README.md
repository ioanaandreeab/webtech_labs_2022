# _Lab 2_

## Web 101 && Basic JS

### Intro to Web
**What is the Web?**

The Web is an _information system_ that uses the _Internet_ and is comprised of all the pages that are accessible via a browser. These web pages share resources using the _HyperText Transfer Protocol (HTTP)_ and present the user the capacity to _interact_ with the content shown. The Web also functions by following the _client-server model_, but we'll see more about these details in the next sections.

**How does one find a resource on the Web?**

We've seen that the Web has a vast collection of resources that anyone with a browser can access, but how does one know how to find a particular resource? The answer is pretty simple - this is thanks to the _URL (Uniform Resource Locator)_. Every URL has the following structure:

**[scheme]://domain[/path/to/file]**, where:
- scheme - the protocol (a set of rules that allow the communication in a computer network) that needs to be used - in this case **HTTP/HTTPS** (the secure variant of HTTP)
- domain - unique identifier for each website (eg. google)
- path - (optional) allows for the identification of a particular page/resource of a website

**What happens when I search for something on Google?**

Any action a user has on the Web follows the next flow: 
- the user (**client**) sends a **request** to a **server** - say we go to google.com and type in "ramen recipes"
- the **server** receives the request, takes the appropiate **action** according to the purpose (_method/verb_) of the request - in our example we're want to retrieve ramen recipes, so the Google server looks in its database for ramen recipes
- the server sends a **response** back to the client, either successful or not, depending on whether or not it was able to fulfill the request
- the client receives the response - in this case, the ramen recipes 🍜

You can take a closer look at the **client-server architecture** (that is powered by the Internet) below:
![](https://cdn-images-1.medium.com/max/1080/1*qzK0Z9vfDT4fVQu3G9OGPg.png)

**Which actions can a client take on the Web?**

The **request methods** determine the acitons that the server needs to perform on the resources specified by the client. A client can therefore **C**reate a resource (_POST_), **R**ead it (_GET_), **U**pdate it (_PUT_) or **D**elete it (_DELETE_). (_💡Notice the bold letters - those form a concept that summarizes the standard instructions that can be performed on a resource and that are key to data persistence - **CRUD**, we'll encounter these again when we'll create our own web server in the next labs_)
Depending on whether or not the server is able to process the request, there are multiple **response status codes** it can send back to the client to inform the state of the action. There are 5 main categories of response statuses:
- **1**XX - informational responses
- **2**XX - successful responses
- **3**XX - redirection responses
- **4**XX - client error responses
- **5**XX - server error responses

🤔 Want to explore more response statuses? Check [this website](https://http.cat/) out for visual representations!

**Which are the contents of a Web page?**
Often enough, as a client, an user would request to see a Web page. The web page they would receive is composed of the following components:
- a _structural_ component - **HTML** - defines the elements that are rendered on a page
- a _styling_ component - **CSS** - makes the structural elements have a pleasant aspect for ease of use
- a _dynamic_ component - **JS** - allows the user to interact with the rendered elements

🤔 Remember devtools? Go ahead and inspect the structure of any website of your choice. If you've missed this during the lab, here's a [resource](https://nira.com/chrome-developer-tools/) that explains everything that's found in devtools!

For now, let's focuse on the dynamic component!