## Challenge 1

Create an image (no more than 2MB) with a Golang script that prints "Full Cycle Rocks"

https://hub.docker.com/repository/docker/guilhermewelter/small-go

## Challenge 2

Nginx server with reversed proxy pointing to a nodejs server.

- The server should insert into a mysql DB a random name on each access
- The server should print the names saved on DB

```console
cd desafio-docker/nginx-node-mysql
docker compose up -d
```
