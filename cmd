docker build -t tewan7500/hello-nodejs:1.0 .

docker run --name hello-nodejs  -d -p 8080:8080  tewan7500/hello-nodejs:1.0