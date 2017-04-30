# create a release build
dotnet publish -c Release

docker stop todosample
docker rm todosample -f 
docker rmi rickstrahl/todosample

docker build -t rickstrahl/todosample .

docker run -p 5004:5000 --name todosample rickstrahl/todosample

#docker stop todosample

#docker rm todosample -f

# docker exec -it todosample  /bin/bash

# # if above doesn't work
# docker exec -it todosample  /bin/sh