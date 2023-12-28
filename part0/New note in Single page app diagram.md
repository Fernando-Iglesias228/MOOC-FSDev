``` mermaid
  	sequenceDiagram
	participant Server
	participant Browser
	participant User

	User->>Browser: Types the desired note, and presses the 'save' button
	Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
	activate Server
	Server->>Browser: {"message": "note created}
	deactivate Server
```
