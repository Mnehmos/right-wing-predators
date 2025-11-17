#!/bin/bash
# Simple script to serve the misconduct database locally

echo "Starting Right-Wing Misconduct Database server..."
echo "Access the database at: http://127.0.0.1:8000/"
echo "Press Ctrl+C to stop the server"
echo ""

python3 -m http.server 8000
