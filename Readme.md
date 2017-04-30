# PADNUG 2016 Angular ASPNET Sample Application


### Configuration
You can use two command windows to start and run the Angular and ASP.NET applications locally.

In order to run these samples you'll need to have the following installed

* NodeJs and NPM 
* [Angular CLI](https://cli.angular.io/)
* .NET Core SDK 1.1.1

### Angular
Start at the root of the repo then:

* `cd todo`
* Restore packages with `npm install`
* `ng serve`

This should fire up the development server at:

http://localhost:4200

which lets you serve the front end.

### ASP.NET Core
Start at the root of the repo then:

* `cd TodoService`
* `dotnet restore`
* `dotnet run`

This should fire up the server application on port 5000. To check:

http://localhost:5000/api/todos






<div style="margin-top: 30px;font-size: 0.8em;
            border-top: 1px solid #eee;padding-top: 8px;">
    <img src="https://markdownmonster.west-wind.com/favicon.png"
         style="height: 20px;float: left; margin-right: 10px;"/>
    created with 
    <a href="https://markdownmonster.west-wind.com" 
       target="top">Markdown Monster</a> 
</div>