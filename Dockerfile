FROM node:17.5.0-slim

RUN apt update -y && apt install -y curl unzip jq
COPY aws_cli_install.sh .
RUN bash aws_cli_install.sh && /usr/local/bin/aws --version
RUN rm -rf aws awscliv2.zip
RUN npm install -g serverless
