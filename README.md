# Snoty Docs
## Development
You can either use `mkdocs serve --watch=.` or use the included `docker-compose.yml` to use a Docker-based setup.
To have watches work in Docker, use this hacky command to restart the container on changes.
```bash
while inotifywait -r . -e create,delete,modify; do { dcup -d --force-recreate }; done                                                                                                                took
```
