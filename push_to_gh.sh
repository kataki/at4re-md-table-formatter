#!/bin/bash

# Run pnpm build
pnpm build

# Check if the build directory exists
if [ -d "build" ]; then
    # Move into the build directory
    cd build

    # Initialize a git repository if not already initialized
    if [ ! -d ".git" ]; then
        git init
        git remote add origin https://github.com/R333T/at4re-md-table-formatter
    fi

    # Add all files
    git add .

    # Commit changes
    git commit -m "Deploying to gh-pages on $(date +"%Y-%m-%d %H:%M:%S")"

    # Push changes to the gh-pages branch
    git push -f origin HEAD:gh-pages

    # Move back to the previous directory
    cd ..
else
    echo "Error: Build directory not found."
    exit 1
fi
