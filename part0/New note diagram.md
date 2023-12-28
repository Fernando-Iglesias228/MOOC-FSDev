``` mermaid
sequenceDiagram
	participant browser
	participant server
	
 	browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
	activate server
	server: Adds new note to JSON file; reload page
	deactivate server
```
