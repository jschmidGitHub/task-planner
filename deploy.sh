#!/bin/bash
ng build --base-href /task-planner/ && \
sudo rm -rf /var/www/task-planner/* && \
sudo cp -r dist/practice-app/browser/* /var/www/task-planner/ && \
sudo chown -R www-data:www-data /var/www/task-planner && \
sudo systemctl reload nginx && \
echo "task-planner deployed successfully!"
