``` mermaid
sequenceDiagram
	participant browser
	participant server
	
 	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
	activate server
	server-->>browser: Adds new note to JSON file and redirects browser
	deactivate server

	Note right of server: The server responds with code 302, which redirects the browser, <br>making it repeat the GET process for the CSS, JS and JSON files
```
