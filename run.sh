#!/bin/bash

# Define an array of directories
directories=("server" "client")

# Loop through each directory and run 'make'
for dir in "${directories[@]}"; do
    echo "Entering directory: $dir"
    cd $dir || { echo "Failed to enter directory: $dir"; exit 1; }
    make || { echo "Make failed in directory: $dir"; exit 1; }
    cd ..
    echo "Leaving directory: $dir"
    echo "---------------------------------------"
done

echo "All projects have been processed."