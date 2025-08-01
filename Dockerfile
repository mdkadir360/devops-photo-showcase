FROM ubuntu
WORKDIR /photo
COPY . .
RUN  apt update && apt install nginx -y
COPY . /var/www/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

