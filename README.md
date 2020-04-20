# Parkhere
Front-end code

#Information about ParkHere
The ParkHere web app was created by the ParkHere team (Caroline, Karin, Hanna, Elvira, Angelica) as a part of their final exam project during their Java developer studies at Academy. The focus of the app is to help the user park correctly, so the app will get the users location and based on that give parking information for the user's current location. It is a first prototype, and this repo is run on localhost. The app currently only works within Stockholm council as the app is currently only using the specific parking API for that area.

The app has a back-end in Java and front-end in React. The app takes the user's location in the browser as an HTTP Request in React. The variables then goes to back-end, to a controller and in to the APICall object. After that the variables is referred to the API. The JSON-answer from the API then gets sent to the place object as "raw" variables. That is then sent to the ReturnMessage object which sends that information to the front-end again. The React app then renders the Returnmessage - and finally the user gets the parking information displayed.
