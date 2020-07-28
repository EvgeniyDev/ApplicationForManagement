# ApplicationForManagement
 This project was made with Angular 8/.Net Core 3.1. This is a simple REST API for notes' manipulation, which are stored in .json file.
 Simple CRUD operations are implemented.
 
# User manual
 ## Language selection
 In order to change language to preferable press the relevant button with the desired language code on it. There are 3 languages available: English, Ukrainian, Russian.
 ## CRUD operations
 ### Create
 In order to create new note find and press on the `Create note` link. Then fill necessary input fields (name, surname and age) and press "Create note" button.
 ### Read
 All existing notes are shown on the main page of the API UI. To navigate to them from `Create note` page locate and press on the `List of notes` link
 ### Update*
 In order to update note info find the relevant one and press `Update` button. Informational form will appear below the list of all notes. Change information in input fields to preferable and press `Update note` button.
 ### Delete
 In order to delete note find the relevant one and press `Delete` button
 ## Running the app
 The app can be run on IIS Express or deployed on IIS. 
 In order to deploy the app on IIS, firstly, locate and navigate ClientApp folder of the project. Then, run `ng build --prod`  to generate `dist` folder with output files. After that, copy all files from `dist` folder to `wwwroot` folder of the project. At last, `Publish` the project.  
 ## Running end-to-end tests
 Navigate to the ClientApp Folder of the project. Run `ng e2e` to execute the end-to-end tests via Protractor.
 
 *Update operation still not working (405 error code)
