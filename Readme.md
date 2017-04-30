# PADNUG 2016 Angular ASPNET Sample Application

This is the basic sample application from the PadNug presentation from May 2nd, 2017 titled 

**Angular (4.0) Applications with ASP.NET Core Backends**

### Resources

* [Slides (much more than presented)]()


### Configuration
You can use two command windows to start and run the Angular and ASP.NET applications locally.

In order to run these samples you'll need to have the following installed:

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

### ASP.NET Core API Service
Start at the root of the repo then:

* `cd TodoService`
* `dotnet restore`
* `dotnet run`

This should fire up the server application on port 5000. To check:

http://localhost:5000/api/todos

You should now be able to run from the Angular Dev server and be able to serve requests.

#### Add HTML Files to Service wwwroot
To build `wwwroot` HTML output from Angular app:

```
ng build --prod --aot
```

This creates the production bundled output of the Angular application in the `wwwroot` folder and allows you to run the entire application from http://localhost:5000 without a separate server for the front end.

### Running under Docker
To run the sample as a docker container, run this dockpowershell script:

```
.\dockerbuild.ps1
```

Then navigate to http://localhost:5004/index.html.


<div style="margin-top: 30px;font-size: 0.8em;
            border-top: 1px solid #eee;padding-top: 8px;">
    <img src="https://markdownmonster.west-wind.com/favicon.png"
         height="20" width="20" halign="left" />
    created with 
    <a href="https://markdownmonster.west-wind.com" 
       target="top">Markdown Monster</a> 
</div>