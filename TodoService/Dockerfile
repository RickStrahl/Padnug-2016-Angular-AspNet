#  MAKE SURE: Run 'dotnet publish' before building
FROM microsoft/dotnet:1.1.1-sdk

MAINTAINER Rick Strahl

ENV ASPNETCORE_URLS=http://*:5000
# ENV ASPNETCORE_ENVIRONMENT=Development

# copy publish folder contents to web root in container
COPY ./bin/Release/netcoreapp1.1/publish /var/www/todosample

WORKDIR /var/www/todosample

# Run out of Publish Folder
CMD ["/bin/sh", "-c", "dotnet 'TodoService.dll'"]