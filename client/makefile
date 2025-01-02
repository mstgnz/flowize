APP_NAME=flowize
PORT=80

# Makefile for building and running the Docker image and container
.PHONY: run build live stop cleanI cleanC exec
.DEFAULT_GOAL:= run

# Build the Docker image and run the container
run: cleanC build
	docker run -d --name $(APP_NAME) -p $(PORT):$(PORT) $(APP_NAME)

# Build the Docker image
build:
	docker build -t $(APP_NAME) -f kubernetes/Dockerfile .

live:
	npx ng serve

# Stop and remove the Docker container
stop:
	docker stop $(APP_NAME)
	docker rm $(APP_NAME)

# Run the application inside the Docker container
exec:
	docker exec -it $(APP_NAME) /bin/sh

# Clean up the Docker image
cleanI:
	docker rmi $(APP_NAME)
	docker builder prune --filter="image=$(APP_NAME)"

cleanC:
	@CONTAINER_EXISTS=$$(docker ps -aq --filter name=$(APP_NAME)); \
	if [ -n "$$CONTAINER_EXISTS" ]; then \
		echo "Stopping and removing container $(APP_NAME)"; \
		docker stop $(APP_NAME); \
		docker rm $(APP_NAME); \
	else \
		echo "No such container: $(APP_NAME)"; \
	fi