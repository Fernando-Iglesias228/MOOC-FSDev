``` mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: The server relays the HTML file to the browser
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: The server relays the CSS file to the browser
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: The server relays the JS file to the browser
    deactivate server

    Note right of browser: The browser executes the JS code, which downloads the json file

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: The browser gets the json file to be executed upon with the JS code
    deactivate server

    Note right of browser: The browser acts upon the json file based on the instructions within the JS code
```
